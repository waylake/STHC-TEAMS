import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SmoothScroll } from "@/components/smooth-scroll";
import { ProjectCard } from "@/components/project-card";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <SmoothScroll />
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Image
                src="/sthc-logo.png"
                alt="삼일공업고등학교 로고"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <div className="font-bold text-lg text-slate-900 dark:text-white">
                삼일공업고등학교
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#projects" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                프로젝트
              </a>
              <Link href="/projects" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                전체 프로젝트
              </Link>
              <a href="#about" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                소개
              </a>
            </div>
          </div>
        </div>
      </nav>

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
              풀스택 개발
              <br />
              <span className="text-slate-700 dark:text-slate-300">프로젝트 전시관</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-3xl mx-auto leading-relaxed">
              외부강사 지도하에 8명의 학생들이 한 팀이 되어 개발한 다양한 웹 애플리케이션 프로젝트들을 만나보세요
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
            <ProjectCard
              title="온라인 쇼핑몰 플랫폼"
              description="사용자 인증, 상품 관리, 결제 시스템을 포함한 완전한 전자상거래 솔루션"
              category="웹 애플리케이션"
              projectName="E-Commerce Platform"
              technologies={["React", "Node.js", "MongoDB", "Stripe"]}
              developer="김○○"
              githubUrl="https://github.com/example/ecommerce-platform"
            />
            <ProjectCard
              title="스마트 할일 관리 앱"
              description="실시간 협업과 알림 기능을 갖춘 팀 프로젝트 관리 도구"
              category="협업 도구"
              projectName="Task Management"
              technologies={["Vue.js", "Express", "PostgreSQL", "Socket.io"]}
              developer="이○○"
              githubUrl="https://github.com/example/task-management"
              siteUrl="https://task-app-demo.vercel.app"
            />
            <ProjectCard
              title="실시간 데이터 대시보드"
              description="차트와 그래프를 통한 데이터 시각화 및 분석 플랫폼"
              category="데이터 분석"
              projectName="Analytics Dashboard"
              technologies={["Next.js", "Python", "Redis", "Chart.js"]}
              developer="박○○"
              githubUrl="https://github.com/example/analytics-dashboard"
            />
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
                삼일공업고등학교
                <br />
                <span className="text-slate-600 dark:text-slate-400">풀스택 개발 과정</span>
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                외부강사의 지도하에 8명의 학생들이 협력하여 실무 중심의 풀스택 개발 프로젝트를 진행하고 있습니다. 
                이론과 실습을 병행하며 실제 서비스 개발 경험을 통해 실무 역량을 기르고 있습니다.
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
          <p className="text-slate-400 text-sm mb-2">
            외부강사 지도하에 학생들이 제작한 프로젝트 전시 사이트입니다
          </p>
          <p className="text-slate-500 text-xs">
            &copy; 2025 삼일공업고등학교. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
