import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const toRotate = [
    "Criação de Sites e Apps",
    "Gerenciamento de Projetos UI/UX com IA",
    "Integrações com Blockchain",
    "Soluções Customizadas para o seu Negócio"
  ];

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % toRotate.length;
      const fullText = toRotate[i];

      setText(current =>
        isDeleting
          ? fullText.substring(0, current.length - 1)
          : fullText.substring(0, current.length + 1)
      );

      setTypingSpeed(isDeleting ? 75 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, typingSpeed, loopNum, toRotate]);

  return (
    <section
      id="hero"
      className="relative text-center py-20 md:py-32 bg-gradient-to-b from-black via-black/80 to-transparent"
    >
      {/* Logo com efeito hover */}
      <img
        src="st_A1_1024.png"
        alt="Logo Studio A1 Media Dev - Desenvolvimento Web, UI/UX e Blockchain em Florianópolis"
        className="mx-auto mb-8 w-48 h-48 rounded-full object-cover transition-all duration-300 [filter:drop-shadow(0_0_20px_rgba(57,255,20,0.8))] hover:[filter:drop-shadow(0_0_30px_rgba(57,255,20,1))]"
      />

      {/* Título principal (SEO H1) */}
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-stencil">
        Studio A1 Media Dev
      </h1>

      {/* Texto animado */}
      <p className="text-xl md:text-2xl text-green-400 h-8 mb-8 font-teletype">
        {text}
        <span className="border-r-4 border-green-400 animate-pulse"></span>
      </p>

      {/* Descrição otimizada SEO */}
      <p className="max-w-3xl mx-auto text-lg text-gray-300">
        Desenvolvimento Web completo em Florianópolis: sites, apps, UI/UX com IA, Web3 e integrações blockchain. Criamos soluções digitais inovadoras que impulsionam o seu negócio.
      </p>
    </section>
  );
};

export default Hero;

