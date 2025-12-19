import { ArrowRight, Eye } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const moneyMakingItems = [
  {
    id: 1,
    title: 'TikTok Influencer Uses AI Rap + Animal Science to...',
    image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=400&h=300&fit=crop',
    categories: ['Content Creation', 'Professional'],
    views: '12.9K',
  },
  {
    id: 2,
    title: '3 Months Gained 1 Million Fans! This Young Man Writ...',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop',
    categories: ['Content Creation', 'Professional'],
    views: '14.6K',
  },
  {
    id: 3,
    title: "Blogger Creates 'Mashu Cat X' with AI and Goes Viral,...",
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=300&fit=crop',
    categories: ['Content Creation', 'Professional'],
    views: '16.1K',
  },
  {
    id: 4,
    title: 'Douyin AI Video E-commerce Large Size...',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
    categories: ['Content Creation', 'Professional'],
    views: '21.6K',
  },
  {
    id: 5,
    title: 'Thinking Outside the Box: TikTok Influenc...',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
    categories: ['Content Creation', 'Professional'],
    views: '22.2K',
  },
  {
    id: 6,
    title: 'AI-Powered Content Strategy for Social Media Growth',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
    categories: ['Content Creation', 'Marketing'],
    views: '18.3K',
  },
];

export function MoneyMakingSection() {
  return (
    <section className="py-8">
      <div className="container-main">
        <div className="flex items-center justify-between mb-6">
          <h2 className="section-title">Ways to Make Money with AI</h2>
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
            {moneyMakingItems.map((item) => (
              <CarouselItem key={item.id} className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <a
                  href="#"
                  className="group block rounded-lg overflow-hidden bg-card border border-border shadow-card hover:shadow-md transition-shadow"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-3">
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {item.categories.map((cat, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-2 py-0.5 rounded border border-primary/30 text-primary"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-sm font-medium text-foreground line-clamp-2 group-hover:text-primary transition-colors mb-3">
                      {item.title}
                    </h3>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Eye className="h-3.5 w-3.5" />
                        <span>{item.views}</span>
                      </div>
                      <span className="text-primary font-medium hover:underline">Get Tips</span>
                    </div>
                  </div>
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
