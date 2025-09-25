import React , { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const toRotate = ["Criação de Sites e Apps", "Gerenciamento de Projetos UI/UX com IA", "Integrações com Blockchain", "Soluções Completas de Tecnologia"];

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % toRotate.length;
      const fullText = toRotate[i];

      setText(current => isDeleting ? fullText.substring(0, current.length - 1) : fullText.substring(0, current.length + 1));
      
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
    <section className="text-center py-20 md:py-32">
      <img 
        src="st_A1_1024.png" 
        alt="Studio A1 Media Dev Logo" 
        className="mx-auto mb-8 w-48 h-48 rounded-full object-cover transition-all duration-300 [filter:drop-shadow(0_0_20px_rgba(57,255,20,0.8))] hover:[filter:drop-shadow(0_0_30px_rgba(57,255,20,1))]"
      />
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-stencil">
        Studio A1 Media Dev
      </h1>
      <p className="text-xl md:text-2xl text-green-400 h-8 mb-8 font-8bit">
        {text}
        <span className="border-r-4 border-green-400 animate-ping"></span>
      </p>
      <p className="max-w-3xl mx-auto text-lg text-gray-300">
        Desenvolvimento Web de ponta a ponta. Da concepção à hospedagem e gerenciamento, criamos soluções digitais inovadoras que impulsionam o seu negócio.
      </p>
    </section>
  );
};

export default Hero;
