import { Header } from '@/components/Header';
import { DevEssentialsSection } from '@/components/DevEssentialsSection';
import { AIForEveryoneSection } from '@/components/AIForEveryoneSection';
import { NewsSection } from '@/components/NewsSection';
import { MoneyMakingSection } from '@/components/MoneyMakingSection';
import { RankingsSection } from '@/components/RankingsSection';
import { CategoriesSection } from '@/components/CategoriesSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        <DevEssentialsSection />
        <AIForEveryoneSection />
        <NewsSection />
        <MoneyMakingSection />
        <RankingsSection />
        <CategoriesSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
