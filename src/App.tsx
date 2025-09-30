import React from 'react';
import ParticleBackground from './components/ParticleBackground';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SEO from './components/SEO'; // Meta tags, Open Graph, Twitter Cards

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Background animado */}
      <div className="absolute inset-0 -z-10">
        <ParticleBackground />
      </div>

      {/* Conteúdo principal */}
      <div className="relative z-10">
        {/* SEO meta tags */}
        <SEO 
          title="Studio A1 Media Dev - Web, UI/UX e Blockchain em Florianópolis"
          description="Criação de sites, apps, UI/UX com IA, integração Web3 e blockchain. Soluções completas de tecnologia digital em Florianópolis."
          url="https://www.studioa1.com.br"
          image="https://www.studioa1.com.br/st_A1_1024.png"
        />

        {/* Header + Topbar extra */}
        <header className="relative">
          <Header />
          {/* Topbar alinhada à direita */}
          <nav className="absolute top-4 right-6 flex gap-6 text-green font-medium z-20">
            <a href="#hero" className="hover:text-blue-300 transition">Home</a>
            <a href="#services" className="hover:text-blue-300 transition">Serviços</a>
            <a href="#faq" className="hover:text-blue-300 transition">FAQ</a>
            <a href="#contact" className="hover:text-red-300 transition">Contato</a>
          </nav>
        </header>

        {/* Seções principais */}
        <main>
          <section id="hero">
            <Hero />
          </section>
          <section id="services">
            <Services />
          </section>
          <section id="faq">
            <FAQ />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </main>

        {/* Rodapé */}
        <Footer />
      </div>
    </div>
  );
};

export default App;



