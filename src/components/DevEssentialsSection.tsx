import { ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const devTools = [{
  id: 1,
  slug: 'qoder',
  name: 'Qoder',
  icon: '🔴',
  iconBg: 'bg-gradient-to-br from-orange-500 to-red-500',
  description: 'Qoder is an agent coding platform that seamlessly...',
  isPaid: true,
  externalUrl: 'https://qoder.ai'
}, {
  id: 2,
  slug: 'trae',
  name: 'Trae',
  icon: '🟥',
  iconBg: 'bg-red-500',
  description: 'Trae is an AI-driven integrated development environment (IDE)...',
  isPaid: true,
  externalUrl: 'https://trae.ai'
}, {
  id: 3,
  slug: 'augment-code',
  name: 'Augment Code',
  icon: '⚡',
  iconBg: 'bg-purple-100',
  description: 'Augment Code is an AI development assistant for...',
  isPaid: true,
  externalUrl: 'https://augmentcode.com'
}, {
  id: 4,
  slug: 'cursor',
  name: 'Cursor.com',
  icon: '📝',
  iconBg: 'bg-cyan-100',
  description: 'Cursor is an AI-driven code editor designed to help developers wri...',
  isPaid: true,
  externalUrl: 'https://cursor.com'
}, {
  id: 5,
  slug: 'warp',
  name: 'Warp',
  icon: '🟢',
  iconBg: 'bg-green-100',
  description: 'Warp is a terminal written in Rust, wh...',
  isPaid: true,
  externalUrl: 'https://warp.dev'
}, {
  id: 6,
  slug: 'github-copilot',
  name: 'GitHub Copilot',
  icon: '🐙',
  iconBg: 'bg-gray-100',
  description: 'AI pair programmer that helps you write code faster...',
  isPaid: true,
  externalUrl: 'https://github.com/features/copilot'
}];

export function DevEssentialsSection() {
  return <section className="py-8">
      <div className="container-main">
        <div className="flex items-center justify-between mb-6">
          <h2 className="section-title">Today's Hot Deals</h2>
          <a href="#" className="text-primary text-sm font-medium flex items-center gap-1 hover:underline">
            View All <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <Carousel opts={{
        align: 'start',
        loop: true
      }} className="w-full">
          <CarouselContent className="-ml-4">
            {devTools.map(tool => <CarouselItem key={tool.id} className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <Link to={`/tool/${tool.slug}`} className="group block rounded-xl p-4 bg-card border border-border shadow-card hover:shadow-md transition-shadow h-full">
                  <div className="flex items-center gap-2 mb-3">
                    <div className={`w-10 h-10 rounded-xl ${tool.iconBg} flex items-center justify-center text-base`}>
                      {tool.icon}
                    </div>
                    <span className="font-medium text-foreground">{tool.name}</span>
                    {tool.isPaid && <span className="text-xs px-1.5 py-0.5 rounded border-0 text-white font-medium bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-[length:200%_100%] animate-[gradient-shift_3s_ease-in-out_infinite]">
                        Active
                      </span>}
                    <a 
                      href={tool.externalUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-1 hover:bg-muted rounded transition-colors ml-auto" 
                      title="Visit website"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="h-4 w-4 text-muted-foreground" />
                    </a>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {tool.description}
                  </p>
                </Link>
              </CarouselItem>)}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-4" />
          <CarouselNext className="hidden md:flex -right-4" />
        </Carousel>
      </div>
    </section>;
}