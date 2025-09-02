import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/data/projects";

interface ProjectCardProps extends Omit<Project, 'id' | 'featured'> {}

export function ProjectCard({
  title,
  description,
  category,
  projectName,
  technologies,
  imageUrl,
  siteUrl,
  githubUrl,
  developer,
}: ProjectCardProps) {
  return (
    <div className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-slate-200 dark:border-slate-700">
      <div className="aspect-video relative overflow-hidden bg-slate-100 dark:bg-slate-700">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="flex items-center justify-center h-full bg-slate-200 dark:bg-slate-700">
            <div className="text-center text-slate-500 dark:text-slate-400">
              <div className="text-sm font-medium mb-1">{category}</div>
              <div className="text-lg font-semibold">{projectName}</div>
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            {title}
          </h3>
          {developer && (
            <span className="text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded">
              {developer}
            </span>
          )}
        </div>
        
        <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm leading-relaxed">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-2">
          {siteUrl && (
            <Link href={siteUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
              <Button variant="default" size="sm" className="w-full text-xs bg-slate-900 hover:bg-slate-800">
                사이트 보기
              </Button>
            </Link>
          )}
          {githubUrl && (
            <Link href={githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
              <Button variant="outline" size="sm" className="w-full text-xs">
                GitHub
              </Button>
            </Link>
          )}
          {!siteUrl && !githubUrl && (
            <Button variant="outline" size="sm" className="w-full text-xs" disabled>
              준비 중
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
