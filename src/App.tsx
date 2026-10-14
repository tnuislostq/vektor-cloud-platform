import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Dashboard } from './components/Dashboard';
import { ArchitectureBento } from './components/ArchitectureBento';
import { InteractiveTopology } from './components/InteractiveTopology';
import { CaseStudies } from './components/CaseStudies';
import { PricingCalculator } from './components/PricingCalculator';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';
import { DemoModal } from './components/DemoModal';
import { HexagonalVault } from './components/HexagonalVault';

export default function App() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState<string>('Enterprise Mesh');
  const [activeSection, setActiveSection] = useState('hero');

  const scrollToDashboard = () => {
    const el = document.getElementById('dashboard');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectTier = (tier: string) => {
    setSelectedTier(tier);
    setIsDemoOpen(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['dashboard', 'architecture', 'solutions', 'benefits', 'calculator'];
      const scrollY = window.scrollY;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop - 120;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(sectionId);
            return;
          }
        }
      }
      if (scrollY < 400) {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#060A17] text-slate-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200 relative">
      <HexagonalVault
        cellSize={36}
        lightRadius={260}
        glowColor="#06B6D4"
        accentColor="#8B5CF6"
        baseColor="rgba(255, 255, 255, 0.05)"
        idleSpeed={0.0008}
        enableSparks={true}
      />

      <div className="flex-1 flex flex-col relative z-10 w-full">
        <Navbar
          onOpenDemo={() => setIsDemoOpen(true)}
          activeSection={activeSection}
        />

        <main className="flex-1">
          <Hero
            onExploreDashboard={scrollToDashboard}
            onOpenDemo={() => setIsDemoOpen(true)}
          />
          <Dashboard />
          <ArchitectureBento />
          <InteractiveTopology />
          <CaseStudies />
          <PricingCalculator onSelectTier={handleSelectTier} />
          <CallToAction
            onOpenDemo={() => setIsDemoOpen(true)}
            onExploreDashboard={scrollToDashboard}
          />
        </main>

        <Footer onOpenDemo={() => setIsDemoOpen(true)} />
      </div>

      <DemoModal
        isOpen={isDemoOpen}
        onClose={() => setIsDemoOpen(false)}
        selectedTier={selectedTier}
      />
    </div>
  );
}