import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/project-card";
import { getAllProjects } from "@/lib/data/projects";
import Link from "next/link";

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <div className="pt-16">{/* Offset for fixed header */}

      {/* Header */}
      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              STHC-TEAMS 프로젝트 전시
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-8">
              STHC-TEAMS가 개발한 다양한 풀스택 프로젝트들을 확인해보세요
            </p>
            <Link href="https://github.com/waylake/STHC-TEAMS" target="_blank" rel="noopener noreferrer">
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
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                category={project.category}
                projectName={project.projectName}
                technologies={project.technologies}
                developer={project.developer}
                githubUrl={project.githubUrl}
                siteUrl={project.siteUrl}
                imageUrl={project.imageUrl}
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
              <Link href="https://github.com/waylake/STHC-TEAMS" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="mr-4">
                  GitHub 저장소 보기
                </Button>
              </Link>
              <Link href="https://github.com/waylake/STHC-TEAMS/blob/main/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer">
                <Button variant="outline">
                  기여 가이드 보기
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
