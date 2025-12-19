import { ArrowRight } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const devTools = [
  {
    id: 1,
    name: 'Qoder',
    icon: '🔴',
    iconBg: 'bg-gradient-to-br from-orange-500 to-red-500',
    description: 'Qoder is an agent coding platform that seamlessly...',
    isPaid: true,
  },
  {
    id: 2,
    name: 'Trae',
    icon: '🟥',
    iconBg: 'bg-red-500',
    description: 'Trae is an AI-driven integrated development environment (IDE)...',
    isPaid: true,
  },
  {
    id: 3,
    name: 'Augment Code',
    icon: '⚡',
    iconBg: 'bg-purple-100',
    description: 'Augment Code is an AI development assistant for...',
    isPaid: true,
  },
  {
    id: 4,
    name: 'Cursor.com',
    icon: '📝',
    iconBg: 'bg-cyan-100',
    description: 'Cursor is an AI-driven code editor designed to help developers wri...',
    isPaid: true,
  },
  {
    id: 5,
    name: 'Warp',
    icon: '🟢',
    iconBg: 'bg-green-100',
    description: 'Warp is a terminal written in Rust, wh...',
    isPaid: true,
  },
  {
    id: 6,
    name: 'GitHub Copilot',
    icon: '🐙',
    iconBg: 'bg-gray-100',
    description: 'AI pair programmer that helps you write code faster...',
    isPaid: true,
  },
];

export function DevEssentialsSection() {
  return (
    <section className="py-8">
      <div className="container-main">
        <div className="flex items-center justify-between mb-6">
          <h2 className="section-title">Dev Essentials</h2>
          <a href="#" className="text-primary text-sm font-medium flex items-center gap-1 hover:underline">
            View All <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {devTools.map((tool) => (
              <CarouselItem key={tool.id} className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <a
                  href="#"
                  className="group block rounded-lg p-4 bg-card border border-border shadow-card hover:shadow-md transition-shadow h-full"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className={`w-8 h-8 rounded-lg ${tool.iconBg} flex items-center justify-center text-sm`}>
                      {tool.icon}
                    </div>
                    <span className="font-medium text-foreground">{tool.name}</span>
                    {tool.isPaid && (
                      <span className="text-xs px-1.5 py-0.5 rounded border border-primary/30 text-primary bg-primary/5">
                        Paid
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {tool.description}
                  </p>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-4" />
          <CarouselNext className="hidden md:flex -right-4" />
        </Carousel>
      </div>
    </section>
  );
}
