import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
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
              STHC-TEAMS
            </div>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link 
              href="/" 
              className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              홈
            </Link>
            <Link 
              href="/projects" 
              className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              프로젝트
            </Link>
            <a 
              href="/#about" 
              className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              소개
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
