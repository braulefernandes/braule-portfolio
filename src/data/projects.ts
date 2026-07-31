import type { Project } from "@/types";

export const projects = [
  {
    id: "gotrip-ai",
    title: "GoTrip.AI",
    status: "WIP",
    category: { pt: "Full Stack", en: "Full Stack" },
    description: {
      pt: "Plataforma web para planejamento e gerenciamento de viagens, centralizando busca de voos, seleção de assentos, dados de passageiros, gastos e acompanhamento das viagens.",
      en: "A web platform for planning and managing trips, bringing flight search, seat selection, passenger details, expenses, and trip tracking into one place.",
    },
    problem: {
      pt: "Reduz a fragmentação do planejamento de viagens ao reunir diferentes etapas da jornada em uma única plataforma.",
      en: "Reduces fragmentation in travel planning by bringing the different stages of a journey together in a single platform.",
    },
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Python", "FastAPI", "PostgreSQL", "Supabase", "Duffel API", "Brevo"],
    repositories: [
      { label: "Frontend", url: "https://github.com/unifor-dev-crew/frontend-gotrip-ai" },
      { label: "Backend", url: "https://github.com/unifor-dev-crew/backend-gotrip-ai" },
    ],
    visual: "route",
  },
  {
    id: "taskflow",
    title: "TaskFlow",
    status: "WIP",
    category: { pt: "Full Stack", en: "Full Stack" },
    description: {
      pt: "Sistema web para gerenciamento de tarefas, equipes, categorias e solicitações, com histórico de atividades, comentários e indicadores de acompanhamento.",
      en: "A web system for managing tasks, teams, categories, and requests, with activity history, comments, and tracking indicators.",
    },
    problem: {
      pt: "Facilita a organização de demandas e a colaboração entre equipes, centralizando informações e o acompanhamento das atividades.",
      en: "Makes it easier to organize requests and collaborate across teams by centralizing information and activity tracking.",
    },
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Python", "FastAPI", "PostgreSQL"],
    repositories: [
      { label: "Frontend", url: "https://github.com/braulefernandes/taskflow-frontend" },
      { label: "Backend", url: "https://github.com/braulefernandes/taskflow-backend" },
    ],
    visual: "tasks",
  },
  {
    id: "p2p-search",
    title: "Busca em Redes P2P",
    status: "DONE",
    category: { pt: "Algoritmos e Redes", en: "Algorithms and Networks" },
    description: {
      pt: "Projeto acadêmico para implementação, visualização e comparação de algoritmos de busca em redes Peer-to-Peer.",
      en: "An academic project focused on implementing, visualizing, and comparing search algorithms in Peer-to-Peer networks.",
    },
    problem: {
      pt: "Permite analisar o comportamento e a eficiência de diferentes estratégias de busca distribuída em redes com múltiplos nós.",
      en: "Supports the analysis of how different distributed search strategies behave and perform across networks with multiple nodes.",
    },
    technologies: ["Python", "NetworkX", "Matplotlib", "YAML", "Algoritmos distribuídos", "Redes P2P"],
    repositories: [{ label: "GitHub", url: "https://github.com/braulefernandes/p2p-search" }],
    visual: "network",
  },
  {
    id: "yolov8-cones",
    title: "Detecção de Cones com YOLOv8",
    status: "DONE",
    category: { pt: "Inteligência Artificial", en: "Artificial Intelligence" },
    description: {
      pt: "Projeto de visão computacional para treinamento e avaliação de um modelo capaz de identificar cones de trânsito em imagens.",
      en: "A computer vision project for training and evaluating a model capable of identifying traffic cones in images.",
    },
    problem: {
      pt: "Automatiza a identificação de cones de trânsito, demonstrando uma possível aplicação em monitoramento viário, segurança e sistemas inteligentes.",
      en: "Automates traffic cone detection, demonstrating a potential application in road monitoring, safety, and intelligent systems.",
    },
    technologies: ["Python", "YOLOv8", "Roboflow", "Visão computacional", "Machine Learning"],
    repositories: [{ label: "GitHub", url: "https://github.com/braulefernandes/yolo-cones-transito" }],
    visual: "detection",
  },
] satisfies Project[];
