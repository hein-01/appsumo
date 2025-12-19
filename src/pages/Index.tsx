import { Header } from '@/components/Header';
import { NewsSection } from '@/components/NewsSection';
import { ToolsSection } from '@/components/ToolsSection';
import { RankingsSection } from '@/components/RankingsSection';
import { CategoriesSection } from '@/components/CategoriesSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        <NewsSection />
        <ToolsSection />
        <RankingsSection />
        <CategoriesSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
