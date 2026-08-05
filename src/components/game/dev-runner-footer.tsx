import { useTranslations } from "next-intl";

import { DevRunnerGame, type DevRunnerMessages } from "./dev-runner-game";

export function DevRunnerFooter() {
  const t = useTranslations("DevRunner");
  const messages: DevRunnerMessages = {
    footerTitle: t("footerTitle"),
    footerPlayButton: t("footerPlayButton"),
    shortScoreLabel: t("shortScoreLabel"),
    shortBestScoreLabel: t("shortBestScoreLabel"),
    closeButton: t("closeButton"),
    startButton: t("startButton"),
    restartButton: t("restartButton"),
    jumpButton: t("jumpButton"),
    jumpInstructions: t("jumpInstructions"),
    gameDescription: t("gameDescription"),
    gameOverTitle: t("gameOverTitle"),
    scoreLabel: t("scoreLabel"),
    bestScoreLabel: t("bestScoreLabel"),
    accessibilityLabel: t("accessibilityLabel"),
    reducedMotionNotice: t("reducedMotionNotice"),
    pausedTitle: t("pausedTitle"),
    resumeButton: t("resumeButton"),
    pausedRestartButton: t("pausedRestartButton"),
  };

  return <DevRunnerGame messages={messages} />;
}
