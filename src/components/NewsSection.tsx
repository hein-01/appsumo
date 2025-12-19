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

const newsHeadlines = [
  'British Actor Votes Against Digital Scanning, Opposes Abuse of AI Technology',
  'Swedish startup Lovable raises $330 million, valuation surges to $6.6 billion',
  'Google Gemini App Launches New AI Detection Feature for Video Generation',
  'OpenAI releases GPT-5.2-Codex: The strongest intelligent agent programming model',
  'Meta announces breakthrough in multimodal AI with new Llama 4 architecture',
];

const mostPopular = [
  { rank: 1, title: 'Ant Group Open Sources LLaDA2.0, the Industry\'s First 100B-Parameter Diffusion Model' },
  { rank: 2, title: 'Domestic Large Models Compete for a Spot in the Hong Kong Stock Market' },
  { rank: 3, title: 'Skywork APP 5.0 Launch: One Sentence AI Instantly Generates Mind Map + PPT' },
  { rank: 4, title: 'Harness Successfully Raises $240 Million to Advance AI Software Delivery' },
  { rank: 5, title: 'New GPT-5 Model Shows Unprecedented Reasoning Capabilities in Benchmarks' },
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

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Main content area */}
          <div className="lg:col-span-3">
            {/* Featured cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
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

            {/* Text headlines */}
            <div className="space-y-3">
              {newsHeadlines.map((headline, index) => (
                <a
                  key={index}
                  href="#"
                  className="block py-2 px-3 rounded-lg hover:bg-muted/50 transition-colors group"
                >
                  <span className="text-sm text-foreground group-hover:text-primary transition-colors">
                    {headline}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Most Popular sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-muted/30 rounded-xl p-4 border border-border">
              <h3 className="font-bold text-foreground mb-4">Most Popular</h3>
              <div className="space-y-4">
                {mostPopular.map((item) => (
                  <a key={item.rank} href="#" className="flex gap-3 group">
                    <span className={`ranking-badge flex-shrink-0 ${
                      item.rank === 1 ? 'ranking-badge-1' :
                      item.rank === 2 ? 'ranking-badge-2' :
                      item.rank === 3 ? 'ranking-badge-3' :
                      'ranking-badge-default'
                    }`}>
                      {item.rank}
                    </span>
                    <span className="text-sm text-foreground/80 group-hover:text-primary transition-colors line-clamp-2">
                      {item.title}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
