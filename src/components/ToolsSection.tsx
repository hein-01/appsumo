import { 
  BarChart3, 
  Globe2, 
  Wrench, 
  Calculator, 
  GitCompare, 
  Gamepad2,
  ArrowRight 
} from 'lucide-react';

const tools = [
  { 
    icon: BarChart3, 
    label: 'AI Brand Monitoring',
    description: 'Track your brand across AI platforms',
    color: 'text-primary',
    bgColor: 'bg-primary/10'
  },
  { 
    icon: Globe2, 
    label: 'AI Visibility Tracking',
    description: 'Monitor AI search visibility',
    color: 'text-cyan-500',
    bgColor: 'bg-cyan-500/10'
  },
  { 
    icon: Wrench, 
    label: 'AI Tools Directory',
    description: 'Discover 10,000+ AI tools',
    color: 'text-amber-500',
    bgColor: 'bg-amber-500/10'
  },
  { 
    icon: Calculator, 
    label: 'LLM Cost Calculator',
    description: 'Calculate API costs easily',
    color: 'text-green-500',
    bgColor: 'bg-green-500/10'
  },
  { 
    icon: GitCompare, 
    label: 'Model Comparator',
    description: 'Compare AI model performance',
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/10'
  },
  { 
    icon: Gamepad2, 
    label: 'MCP Playground',
    description: 'Test models interactively',
    color: 'text-rose-500',
    bgColor: 'bg-rose-500/10'
  },
];

export function ToolsSection() {
  return (
    <section id="tools" className="py-8 bg-muted/20">
      <div className="container-main">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="section-title">Tools</h2>
            <p className="text-muted-foreground text-sm mt-2">Experience our AI solution assistant</p>
          </div>
          <a href="#" className="text-primary text-sm font-medium flex items-center gap-1 hover:underline">
            All Tools <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {tools.map((tool, index) => (
            <a
              key={tool.label}
              href="#"
              className="group card-hover flex flex-col items-center p-5 rounded-xl bg-card border border-border shadow-card text-center"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className={`w-14 h-14 rounded-xl ${tool.bgColor} flex items-center justify-center mb-3 transition-transform group-hover:scale-110`}>
                <tool.icon className={`h-7 w-7 ${tool.color}`} />
              </div>
              <span className="font-medium text-sm text-foreground group-hover:text-primary transition-colors">
                {tool.label}
              </span>
              <span className="text-xs text-muted-foreground mt-1 line-clamp-2">
                {tool.description}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
