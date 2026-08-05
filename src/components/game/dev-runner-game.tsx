"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";

export interface DevRunnerMessages {
  footerTitle: string;
  footerPlayButton: string;
  shortScoreLabel: string;
  shortBestScoreLabel: string;
  startButton: string;
  restartButton: string;
  closeButton: string;
  jumpButton: string;
  jumpInstructions: string;
  gameDescription: string;
  gameOverTitle: string;
  scoreLabel: string;
  bestScoreLabel: string;
  accessibilityLabel: string;
  reducedMotionNotice: string;
  pausedTitle: string;
  resumeButton: string;
  pausedRestartButton: string;
}

type GameStatus = "idle" | "playing" | "gameOver";
type Bug = { x: number; width: number; height: number; variant: number; passed: boolean };

const STORAGE_KEY = "braule-dev-runner-best-score";
const BASE_GAME_HEIGHT = 100;
const INITIAL_SPEED = 150;
const MAX_SPEED = 260;
const JUMP_FORCE = -310;
const GRAVITY = 1050;

const formatScore = (value: number) => Math.max(0, Math.floor(value)).toString().padStart(5, "0");

export function DevRunnerGame({ messages }: { messages: DevRunnerMessages }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef<number | null>(null);
  const loopRef = useRef<(now: number) => void>(() => undefined);
  const lastTimeRef = useRef(0);
  const statusRef = useRef<GameStatus>("idle");
  const pausedRef = useRef(false);
  const worldRef = useRef({ y: 0, velocityY: 0, score: 0, elapsed: 0, spawnIn: 1.65, bugs: [] as Bug[] });
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState<GameStatus>("idle");
  const [isPaused, setIsPaused] = useState(false);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const setGameStatus = useCallback((next: GameStatus) => {
    statusRef.current = next;
    setStatus(next);
  }, []);

  const cancelLoop = useCallback(() => {
    if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    frameRef.current = null;
  }, []);

  const saveBest = useCallback((value: number) => {
    setBestScore((current) => {
      const next = Math.max(current, value);
      if (next !== current) {
        try { localStorage.setItem(STORAGE_KEY, String(next)); } catch { /* Storage is optional. */ }
      }
      return next;
    });
  }, []);

  const draw = useCallback((time = 0) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const width = Math.max(1, rect.width);
    const height = Math.max(1, rect.height);
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    if (canvas.width !== Math.round(width * dpr) || canvas.height !== Math.round(height * dpr)) {
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
    }
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, width, height);

    const gameScale = Math.min(1.1, Math.max(0.8, height / BASE_GAME_HEIGHT));
    const groundY = height - 12 * gameScale;
    const playerW = 23 * gameScale;
    const playerH = 34 * gameScale;
    const playerX = Math.max(12, width * 0.08);
    const world = worldRef.current;
    const playerTop = groundY - playerH + world.y;
    const running = statusRef.current === "playing" && !pausedRef.current;
    const stride = running ? Math.sin(time / 75) * 2.5 * gameScale : 0;

    const css = getComputedStyle(canvas);
    const foreground = css.getPropertyValue("--foreground").trim() || "#f8fafc";
    const muted = css.getPropertyValue("--muted").trim() || "#94a3b8";
    const primary = css.getPropertyValue("--primary").trim() || "#7c3aed";
    const accent = css.getPropertyValue("--accent").trim() || "#2563eb";
    const cyan = css.getPropertyValue("--accent-bright").trim() || "#38bdf8";

    ctx.globalAlpha = 0.22;
    ctx.fillStyle = muted;
    for (let i = 0; i < 9; i += 1) {
      const offset = running ? (world.elapsed * 42) % 90 : 0;
      ctx.fillRect((i * 71 - offset + width) % width, 13 + (i % 3) * 17, 1.5, 1.5);
    }
    ctx.globalAlpha = 1;
    const gradient = ctx.createLinearGradient(0, 0, width, 0);
    gradient.addColorStop(0, primary); gradient.addColorStop(0.55, accent); gradient.addColorStop(1, cyan);
    ctx.fillStyle = gradient;
    ctx.fillRect(0, groundY, width, 2);
    ctx.globalAlpha = 0.35;
    const dashOffset = running ? (world.elapsed * 150) % 42 : 0;
    for (let x = -dashOffset; x < width; x += 42) ctx.fillRect(x, groundY + 5 * gameScale, 19 * gameScale, 1.5);
    ctx.globalAlpha = 1;

    ctx.save();
    ctx.translate(playerX + playerW / 2, playerTop + playerH / 2);
    if (statusRef.current === "gameOver") ctx.rotate(0.12);
    ctx.translate(-playerW / 2, -playerH / 2);
    ctx.fillStyle = foreground;
    ctx.fillRect(5 * gameScale, 2 * gameScale, 14 * gameScale, 13 * gameScale);
    ctx.fillStyle = primary;
    ctx.fillRect(7 * gameScale, 5 * gameScale, 10 * gameScale, 3 * gameScale);
    ctx.fillStyle = cyan;
    ctx.fillRect(15 * gameScale, 10 * gameScale, 2 * gameScale, 2 * gameScale);
    ctx.fillStyle = accent;
    ctx.fillRect(4 * gameScale, 16 * gameScale, 17 * gameScale, 12 * gameScale);
    ctx.fillStyle = foreground;
    ctx.fillRect(7 * gameScale, 19 * gameScale, 4 * gameScale, 4 * gameScale);
    ctx.fillRect(14 * gameScale, 19 * gameScale, 4 * gameScale, 4 * gameScale);
    const legY = 28 * gameScale;
    ctx.fillRect(6 * gameScale, legY, 5 * gameScale, Math.max(3, 6 * gameScale + stride));
    ctx.fillRect(14 * gameScale, legY, 5 * gameScale, Math.max(3, 6 * gameScale - stride));
    if (statusRef.current === "gameOver") {
      ctx.fillStyle = cyan; ctx.font = `bold ${10 * gameScale}px monospace`; ctx.fillText("!", 20 * gameScale, 6 * gameScale);
    }
    ctx.restore();

    world.bugs.forEach((bug) => {
      const bx = bug.x; const by = groundY - bug.height;
      ctx.save(); ctx.translate(bx, by);
      ctx.strokeStyle = bug.variant === 0 ? primary : bug.variant === 1 ? accent : cyan;
      ctx.fillStyle = ctx.strokeStyle; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.ellipse(bug.width / 2, bug.height * 0.55, bug.width * 0.42, bug.height * 0.38, 0, 0, Math.PI * 2); ctx.fill();
      ctx.strokeStyle = foreground;
      ctx.beginPath(); ctx.moveTo(bug.width * 0.35, bug.height * 0.2); ctx.lineTo(bug.width * 0.2, 0); ctx.moveTo(bug.width * 0.65, bug.height * 0.2); ctx.lineTo(bug.width * 0.8, 0); ctx.stroke();
      ctx.fillStyle = foreground; ctx.fillRect(bug.width * 0.3, bug.height * 0.46, 3, 3); ctx.fillRect(bug.width * 0.62, bug.height * 0.46, 3, 3);
      const step = running ? Math.sin(time / 90) * 2 : 0;
      ctx.beginPath();
      for (let i = 0; i < 3; i += 1) { const ly = bug.height * (0.48 + i * 0.16); ctx.moveTo(4, ly); ctx.lineTo(-5, ly + (i % 2 ? step : -step)); ctx.moveTo(bug.width - 4, ly); ctx.lineTo(bug.width + 5, ly + (i % 2 ? -step : step)); }
      ctx.stroke(); ctx.restore();
    });
  }, []);

  const finishGame = useCallback(() => {
    cancelLoop();
    const finalScore = Math.floor(worldRef.current.score);
    setScore(finalScore);
    saveBest(finalScore);
    setGameStatus("gameOver");
    draw(performance.now());
  }, [cancelLoop, draw, saveBest, setGameStatus]);

  const runFrame = useCallback((now: number) => {
    if (statusRef.current !== "playing" || pausedRef.current) return;
    const dt = Math.min((now - lastTimeRef.current) / 1000, 0.034);
    lastTimeRef.current = now;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const width = canvas.getBoundingClientRect().width;
    const height = canvas.getBoundingClientRect().height;
    const scale = Math.min(1.1, Math.max(0.8, height / BASE_GAME_HEIGHT));
    const world = worldRef.current;
    world.elapsed += dt;
    world.score += dt * 10;
    world.velocityY += GRAVITY * scale * dt;
    world.y += world.velocityY * dt;
    if (world.y > 0) { world.y = 0; world.velocityY = 0; }
    const speed = Math.min(MAX_SPEED, INITIAL_SPEED + world.score * 0.28) * scale;
    world.spawnIn -= dt;
    if (world.spawnIn <= 0) {
      const variant = Math.floor(Math.random() * 3);
      const sizes = [{ width: 18, height: 18 }, { width: 22, height: 23 }, { width: 27, height: 20 }];
      const size = sizes[variant];
      world.bugs.push({ x: width + 12, width: size.width * scale, height: size.height * scale, variant, passed: false });
      const minimumGapSeconds = 1.1 + Math.max(0, speed / scale - INITIAL_SPEED) / (MAX_SPEED - INITIAL_SPEED) * 0.16;
      world.spawnIn = minimumGapSeconds + Math.random() * 0.75;
    }
    const playerX = Math.max(12, width * 0.08);
    const playerW = 23 * scale; const playerH = 34 * scale; const groundY = height - 12 * scale;
    const px = playerX + 3 * scale; const py = groundY - playerH + world.y + 3 * scale;
    const pw = playerW - 6 * scale; const ph = playerH - 5 * scale;
    let collided = false;
    world.bugs = world.bugs.map((currentBug) => {
      const bug = { ...currentBug, x: currentBug.x - speed * dt };
      if (!bug.passed && bug.x + bug.width < playerX) { bug.passed = true; world.score += 5; }
      const margin = 4 * scale;
      if (px < bug.x + bug.width - margin && px + pw > bug.x + margin && py < groundY - margin && py + ph > groundY - bug.height + margin) {
        collided = true;
      }
      return bug;
    });
    if (collided) { finishGame(); return; }
    world.bugs = world.bugs.filter((bug) => bug.x + bug.width > -10);
    const shownScore = Math.floor(world.score);
    if (shownScore !== score && shownScore % 2 === 0) setScore(shownScore);
    draw(now);
    frameRef.current = requestAnimationFrame(loopRef.current);
  }, [draw, finishGame, score]);
  useEffect(() => {
    loopRef.current = runFrame;
  }, [runFrame]);

  const startGame = useCallback(() => {
    cancelLoop();
    worldRef.current = { y: 0, velocityY: 0, score: 0, elapsed: 0, spawnIn: 1.65, bugs: [] };
    setScore(0); pausedRef.current = false; setIsPaused(false); setGameStatus("playing");
    lastTimeRef.current = performance.now();
    frameRef.current = requestAnimationFrame(loopRef.current);
    canvasRef.current?.focus();
  }, [cancelLoop, setGameStatus]);

  const jump = useCallback(() => {
    if (statusRef.current !== "playing" || pausedRef.current) return;
    const world = worldRef.current;
    const canvasHeight = canvasRef.current?.getBoundingClientRect().height ?? BASE_GAME_HEIGHT;
    const scale = Math.min(1.1, Math.max(0.8, canvasHeight / BASE_GAME_HEIGHT));
    if (world.y >= -0.5 && world.velocityY >= 0) world.velocityY = JUMP_FORCE * scale;
  }, []);

  const resumeGame = useCallback(() => {
    if (statusRef.current !== "playing") return;
    pausedRef.current = false; setIsPaused(false); lastTimeRef.current = performance.now();
    cancelLoop(); frameRef.current = requestAnimationFrame(loopRef.current); canvasRef.current?.focus();
  }, [cancelLoop]);

  const closeGame = useCallback(() => {
    cancelLoop(); pausedRef.current = false; setIsPaused(false); setGameStatus("idle"); setIsOpen(false);
    worldRef.current = { y: 0, velocityY: 0, score: 0, elapsed: 0, spawnIn: 1.65, bugs: [] }; setScore(0);
  }, [cancelLoop, setGameStatus]);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => setPrefersReducedMotion(query.matches);
    const setupFrame = requestAnimationFrame(() => {
      try { const stored = Number.parseInt(localStorage.getItem(STORAGE_KEY) ?? "", 10); if (Number.isFinite(stored) && stored >= 0) setBestScore(stored); } catch { /* Storage is optional. */ }
      updateMotion();
    });
    query.addEventListener("change", updateMotion);
    return () => { cancelAnimationFrame(setupFrame); query.removeEventListener("change", updateMotion); };
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    draw(performance.now());
    const resize = () => draw(performance.now());
    const visibility = () => {
      if (document.hidden && statusRef.current === "playing" && !pausedRef.current) {
        pausedRef.current = true; setIsPaused(true); cancelLoop();
      }
    };
    window.addEventListener("resize", resize); document.addEventListener("visibilitychange", visibility);
    return () => { window.removeEventListener("resize", resize); document.removeEventListener("visibilitychange", visibility); cancelLoop(); };
  }, [cancelLoop, draw, isOpen]);

  useEffect(() => () => cancelLoop(), [cancelLoop]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if ((event.code === "Space" || event.code === "ArrowUp") && status === "playing" && !isPaused) {
      event.preventDefault(); jump();
    }
  };

  return (
    <div className="dev-runner-card" onKeyDown={handleKeyDown}>
      {!isOpen ? <div className="dev-runner-launcher">
        <p className="dev-runner-launcher-title hero-name-gradient">{messages.footerTitle}</p>
        <Button
          type="button"
          className="dev-runner-launcher-button h-10 min-h-10 bg-gradient-to-r from-primary to-accent px-4 whitespace-nowrap"
          aria-expanded={isOpen}
          aria-controls="dev-runner-game-area"
          onClick={() => isOpen ? closeGame() : setIsOpen(true)}
        >
          {messages.footerPlayButton}
        </Button>
      </div> : (
          <div id="dev-runner-game-area" className="dev-runner-compact-game" aria-label={messages.accessibilityLabel}>
            <div className="dev-runner-toolbar">
              <div className="dev-runner-score" aria-label={`${messages.scoreLabel}: ${score}. ${messages.bestScoreLabel}: ${bestScore}.`}>
                <span>{messages.shortScoreLabel} {formatScore(score)} · {messages.shortBestScoreLabel} {formatScore(bestScore)}</span>
              </div>
              <button type="button" className="dev-runner-close" aria-label={messages.closeButton} onClick={closeGame}>×</button>
            </div>
            <div className="dev-runner-stage" onPointerDown={(event) => { if ((event.target as HTMLElement).tagName === "CANVAS") jump(); }}>
              <canvas ref={canvasRef} tabIndex={0} role="img" aria-label={messages.accessibilityLabel} className="dev-runner-canvas">
                {messages.accessibilityLabel}
              </canvas>
              {status === "idle" ? <div className="dev-runner-overlay"><span>{messages.gameDescription}</span><Button type="button" className="dev-runner-compact-button" onClick={startGame}>{messages.startButton}</Button></div> : null}
              {status === "gameOver" ? <div className="dev-runner-overlay" aria-live="polite"><strong>{messages.gameOverTitle}</strong><span>{messages.shortScoreLabel} {formatScore(score)} · {messages.shortBestScoreLabel} {formatScore(Math.max(bestScore, score))}</span><Button type="button" className="dev-runner-compact-button" onClick={startGame}>{messages.restartButton}</Button></div> : null}
              {status === "playing" && isPaused ? <div className="dev-runner-overlay" aria-live="polite"><strong>{messages.pausedTitle}</strong><span className="dev-runner-pause-actions"><Button type="button" className="dev-runner-compact-button" onClick={resumeGame}>{messages.resumeButton}</Button><Button type="button" variant="secondary" className="dev-runner-compact-button" onClick={startGame}>{messages.pausedRestartButton}</Button></span></div> : null}
            </div>
            <div className="dev-runner-controls">
              <p>{messages.jumpInstructions}</p>
              {prefersReducedMotion ? <span className="dev-runner-motion-notice" title={messages.reducedMotionNotice}>{messages.reducedMotionNotice}</span> : null}
            </div>
            <p className="sr-only" aria-live="polite">{status === "gameOver" ? `${messages.gameOverTitle} ${messages.scoreLabel}: ${score}. ${messages.bestScoreLabel}: ${Math.max(bestScore, score)}.` : isPaused ? messages.pausedTitle : ""}</p>
          </div>
      )}
    </div>
  );
}
