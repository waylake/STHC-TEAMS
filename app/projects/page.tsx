import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/project-card";
import Link from "next/link";

export default function ProjectsPage() {
  const projects = [
    {
      title: "온라인 쇼핑몰 플랫폼",
      description: "사용자 인증, 상품 관리, 결제 시스템을 포함한 완전한 전자상거래 솔루션",
      category: "웹 애플리케이션",
      projectName: "E-Commerce Platform",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      developer: "김○○",
      githubUrl: "https://github.com/example/ecommerce-platform",
    },
    {
      title: "스마트 할일 관리 앱",
      description: "실시간 협업과 알림 기능을 갖춘 팀 프로젝트 관리 도구",
      category: "협업 도구",
      projectName: "Task Management",
      technologies: ["Vue.js", "Express", "PostgreSQL", "Socket.io"],
      developer: "이○○",
      githubUrl: "https://github.com/example/task-management",
      siteUrl: "https://task-app-demo.vercel.app",
    },
    {
      title: "실시간 데이터 대시보드",
      description: "차트와 그래프를 통한 데이터 시각화 및 분석 플랫폼",
      category: "데이터 분석",
      projectName: "Analytics Dashboard",
      technologies: ["Next.js", "Python", "Redis", "Chart.js"],
      developer: "박○○",
      githubUrl: "https://github.com/example/analytics-dashboard",
    },
    {
      title: "소셜 미디어 플랫폼",
      description: "실시간 채팅과 피드 기능을 갖춘 소셜 네트워킹 서비스",
      category: "소셜 플랫폼",
      projectName: "Social Connect",
      technologies: ["React", "Express", "MySQL", "Socket.io"],
      developer: "최○○",
      githubUrl: "https://github.com/example/social-platform",
    },
    {
      title: "학습 관리 시스템",
      description: "온라인 강의와 과제 관리를 위한 교육 플랫폼",
      category: "교육 도구",
      projectName: "EduManage",
      technologies: ["Next.js", "NestJS", "PostgreSQL"],
      developer: "정○○",
      githubUrl: "https://github.com/example/edu-manage",
      siteUrl: "https://edu-manage-demo.vercel.app",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm border-b border-slate-200 dark:border-slate-700 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/sthc-logo.png"
                alt="삼일공업고등학교 로고"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <div className="font-semibold text-lg text-slate-900 dark:text-white">
                삼일공업고등학교
              </div>
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                홈
              </Link>
              <Link href="/projects" className="text-slate-900 dark:text-white font-medium">
                프로젝트
              </Link>
              <a href="/#about" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                소개
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              학생 프로젝트 전시
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-8">
              삼일공업고등학교 학생들이 개발한 다양한 풀스택 프로젝트들을 확인해보세요
            </p>
            <Link href="https://github.com/your-repo/sthc" target="_blank" rel="noopener noreferrer">
              <Button className="bg-slate-900 hover:bg-slate-800 text-white">
                GitHub에서 프로젝트 추가하기
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                category={project.category}
                projectName={project.projectName}
                technologies={project.technologies}
                developer={project.developer}
                githubUrl={project.githubUrl}
                siteUrl={project.siteUrl}
              />
            ))}
          </div>
        </div>
      </section>

      {/* GitHub PR 안내 */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              프로젝트 추가 방법
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              여러분의 프로젝트를 전시관에 추가하려면 GitHub Pull Request를 생성해주세요
            </p>
          </div>

          <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-slate-200 dark:bg-slate-700 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-slate-600 dark:text-slate-400 font-semibold text-sm">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">저장소 Fork하기</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    GitHub 저장소를 Fork하여 본인 계정으로 복사합니다
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-slate-200 dark:bg-slate-700 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-slate-600 dark:text-slate-400 font-semibold text-sm">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">프로젝트 정보 추가</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-2">
                    <code className="bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded text-xs">app/projects/page.tsx</code> 파일의 projects 배열에 다음 정보를 추가:
                  </p>
                  <ul className="text-xs text-slate-500 dark:text-slate-400 space-y-1 ml-4">
                    <li>• 프로젝트 제목, 설명, 카테고리</li>
                    <li>• 사용 기술 스택</li>
                    <li>• GitHub 저장소 URL</li>
                    <li>• 라이브 사이트 URL (선택)</li>
                    <li>• 대표 이미지 URL (선택)</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-slate-200 dark:bg-slate-700 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-slate-600 dark:text-slate-400 font-semibold text-sm">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Pull Request 생성</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    변경사항을 커밋하고 Pull Request를 생성하여 프로젝트 추가를 요청합니다
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700 text-center">
              <Link href="https://github.com/your-repo/sthc" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="mr-4">
                  GitHub 저장소 보기
                </Button>
              </Link>
              <Link href="https://github.com/your-repo/sthc/blob/main/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer">
                <Button variant="outline">
                  기여 가이드 보기
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 dark:bg-slate-950 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Image
              src="/sthc-logo.png"
              alt="삼일공업고등학교 로고"
              width={32}
              height={32}
              className="rounded-lg"
            />
            <span className="font-semibold text-lg">삼일공업고등학교 프로젝트 전시관</span>
          </div>
          <p className="text-slate-400 text-sm">
            &copy; 2025 삼일공업고등학교. 외부강사 지도하에 학생들이 제작한 프로젝트 전시 사이트입니다.
          </p>
        </div>
      </footer>
    </div>
  );
}
