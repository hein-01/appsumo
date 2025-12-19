import { ArrowRight } from 'lucide-react';

const featuredNews = [
  {
    id: 1,
    title: 'ElevenLabs Integrates with WhatsApp! AI Voice Assistant Can Make and Receive Calls',
    image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&h=260&fit=crop',
    category: 'Voice AI',
  },
  {
    id: 2,
    title: 'The Era of AI Portraits! DeepSeek Selected as the Annual Domestic Word of 2025',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=260&fit=crop',
    category: 'AI News',
  },
  {
    id: 3,
    title: 'Meituan Launches SOTA-Level Virtual Human Video Generation Model LongCat',
    image: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=400&h=260&fit=crop',
    category: 'Video AI',
  },
  {
    id: 4,
    title: 'Mythic Raises $125 Million in Funding to Challenge NVIDIA with High-Efficiency AI Chips',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=260&fit=crop',
    category: 'Hardware',
  },
];


export function NewsSection() {
  return (
    <section id="news" className="py-8">
      <div className="container-main">
        <div className="flex items-center justify-between mb-6">
          <h2 className="section-title">AI Daily News</h2>
          <a href="#" className="text-primary text-sm font-medium flex items-center gap-1 hover:underline">
            View All <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {featuredNews.map((news, index) => (
            <a
              key={news.id}
              href="#"
              className="group card-hover block rounded-lg overflow-hidden bg-card border border-border shadow-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-3">
                <span className="text-xs text-primary font-medium">{news.category}</span>
                <h3 className="text-sm font-medium text-foreground mt-1 line-clamp-2 group-hover:text-primary transition-colors">
                  {news.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
