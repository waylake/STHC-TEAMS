import Image from "next/image";

export function Footer() {
  return (
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
          <span className="font-semibold text-lg">STHC-TEAMS</span>
        </div>
        <p className="text-slate-400 text-sm mb-2">
          삼일공업고등학교 풀스택 개발팀 프로젝트 전시관
        </p>
        <p className="text-slate-500 text-xs">
          &copy; 2025 STHC-TEAMS. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
