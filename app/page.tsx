import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/project-card";
import { getFeaturedProjects } from "@/lib/data/projects";
import Link from "next/link";

export default function Home() {
  const featuredProjects = getFeaturedProjects();

  return (
    <div className="pt-16">{/* Offset for fixed header */}

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="mb-8 flex justify-center">
              <Image
                src="/sthc-logo.png"
                alt="삼일공업고등학교 로고"
                width={120}
                height={120}
                className="rounded-2xl shadow-lg"
                priority
              />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              STHC-TEAMS
              <br />
              <span className="text-slate-700 dark:text-slate-300">풀스택 개발팀</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-3xl mx-auto leading-relaxed">
              삼일공업고등학교 풀스택 개발팀이 만든 창의적이고 혁신적인 웹 애플리케이션 프로젝트들을 만나보세요
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 text-lg">
                프로젝트 둘러보기
              </Button>
              <Link href="/projects">
                <Button variant="outline" size="lg" className="px-8 py-3 text-lg">
                  전체 프로젝트 보기
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              주요 프로젝트
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              학생들의 창의성과 기술력이 돋보이는 대표 프로젝트들입니다
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
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

          <div className="text-center mt-12">
            <Link href="/projects">
              <Button size="lg" variant="outline" className="px-8 py-3 text-lg">
                모든 프로젝트 보기
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              개발 팀 소개
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              외부강사 지도하에 8명의 학생들이 한 팀이 되어 다양한 프로젝트를 개발하고 있습니다
            </p>
          </div>

          <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-8 shadow-sm border border-slate-200 dark:border-slate-700">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-24 h-24 bg-slate-200 dark:bg-slate-700 rounded-xl flex items-center justify-center">
                <span className="text-slate-600 dark:text-slate-400 font-bold text-2xl">STHC</span>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-3">
                  풀스택 개발팀
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                  프론트엔드부터 백엔드, 데이터베이스까지 전체 개발 스택을 다루며 
                  실무 중심의 프로젝트를 통해 실력을 키워나가는 통합 개발팀입니다.
                </p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  <span className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-sm">
                    React
                  </span>
                  <span className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-sm">
                    Next.js
                  </span>
                  <span className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-sm">
                    Node.js
                  </span>
                  <span className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-sm">
                    TypeScript
                  </span>
                  <span className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-sm">
                    MongoDB
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-2">
                3+
              </div>
              <div className="text-slate-600 dark:text-slate-400">
                진행 중인 프로젝트
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-2">
                1
              </div>
              <div className="text-slate-600 dark:text-slate-400">
                개발팀
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-2">
                8
              </div>
              <div className="text-slate-600 dark:text-slate-400">
                참여 학생
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-2">
                1
              </div>
              <div className="text-slate-600 dark:text-slate-400">
                외부강사
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                STHC-TEAMS
                <br />
                <span className="text-slate-600 dark:text-slate-400">풀스택 개발팀</span>
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                삼일공업고등학교 풀스택 개발팀 STHC-TEAMS는 외부강사의 지도하에 8명의 학생들이 협력하여 
                실무 중심의 풀스택 개발 프로젝트를 진행하고 있습니다. 이론과 실습을 병행하며 실제 서비스 개발 경험을 통해 실무 역량을 기르고 있습니다.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-slate-600 rounded-full" />
                  <span className="text-slate-700 dark:text-slate-300">실무 중심의 프로젝트 기반 학습</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-slate-600 rounded-full" />
                  <span className="text-slate-700 dark:text-slate-300">최신 웹 개발 기술 스택 교육</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-slate-600 rounded-full" />
                  <span className="text-slate-700 dark:text-slate-300">외부강사와 함께하는 멘토링</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center border border-slate-200 dark:border-slate-700">
                <Image
                  src="/sthc-logo.png"
                  alt="삼일공업고등학교"
                  width={200}
                  height={200}
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
