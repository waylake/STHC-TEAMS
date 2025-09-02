export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  projectName: string;
  technologies: string[];
  developer: string;
  githubUrl?: string;
  siteUrl?: string;
  imageUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "ecommerce-platform",
    title: "온라인 쇼핑몰 플랫폼",
    description: "사용자 인증, 상품 관리, 결제 시스템을 포함한 완전한 전자상거래 솔루션",
    category: "웹 애플리케이션",
    projectName: "E-Commerce Platform",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    developer: "김○○",
    githubUrl: "https://github.com/waylake/STHC-TEAMS",
    featured: true,
  },
  {
    id: "task-management",
    title: "스마트 할일 관리 앱",
    description: "실시간 협업과 알림 기능을 갖춘 팀 프로젝트 관리 도구",
    category: "협업 도구",
    projectName: "Task Management",
    technologies: ["Vue.js", "Express", "PostgreSQL", "Socket.io"],
    developer: "이○○",
    githubUrl: "https://github.com/waylake/STHC-TEAMS",
    siteUrl: "https://task-app-demo.vercel.app",
    featured: true,
  },
  {
    id: "analytics-dashboard",
    title: "실시간 데이터 대시보드",
    description: "차트와 그래프를 통한 데이터 시각화 및 분석 플랫폼",
    category: "데이터 분석",
    projectName: "Analytics Dashboard",
    technologies: ["Next.js", "Python", "Redis", "Chart.js"],
    developer: "박○○",
    githubUrl: "https://github.com/waylake/STHC-TEAMS",
    featured: true,
  },
  {
    id: "social-platform",
    title: "소셜 미디어 플랫폼",
    description: "실시간 채팅과 피드 기능을 갖춘 소셜 네트워킹 서비스",
    category: "소셜 플랫폼",
    projectName: "Social Connect",
    technologies: ["React", "Express", "MySQL", "Socket.io"],
    developer: "최○○",
    githubUrl: "https://github.com/waylake/STHC-TEAMS",
  },
  {
    id: "edu-manage",
    title: "학습 관리 시스템",
    description: "온라인 강의와 과제 관리를 위한 교육 플랫폼",
    category: "교육 도구",
    projectName: "EduManage",
    technologies: ["Next.js", "NestJS", "PostgreSQL"],
    developer: "정○○",
    githubUrl: "https://github.com/waylake/STHC-TEAMS",
    siteUrl: "https://edu-manage-demo.vercel.app",
  },
];

export function getFeaturedProjects(): Project[] {
  return projects.filter(project => project.featured);
}

export function getAllProjects(): Project[] {
  return projects;
}
