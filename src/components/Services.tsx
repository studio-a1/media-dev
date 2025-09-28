import React from 'react';
import CodeIcon from './icons/CodeIcon';
import ServerIcon from './icons/ServerIcon';
import PenToolIcon from './icons/PenToolIcon';
import CubeIcon from './icons/CubeIcon';

const services = [
  {
    icon: <CodeIcon />,
    title: "Criação de Sites e Apps",
    description: "Desenvolvemos websites e aplicativos responsivos, modernos e otimizados para a melhor performance e segurança."
  },
  {
    icon: <ServerIcon />,
    title: "Gerenciamento e Hospedagem",
    description: "Oferecemos soluções completas no gerenciamento de sites, incluindo hospedagem segura e manutenção contínua."
  },
  {
    icon: <PenToolIcon />,
    title: "UI/UX com IA",
    description: "Criamos interfaces intuitivas e experiências de usuário envolventes, com foco em SEO e potencializadas por inteligência artificial."
  },
  {
    icon: <CubeIcon />,
    title: "Integrações com Blockchain",
    description: "Integramos aplicações com a tecnologia blockchain para garantir segurança, transparência e inovação."
  }
];

const ServiceCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="border border-green-700 p-6 bg-black bg-opacity-30 hover:bg-green-900 hover:bg-opacity-20 transition-colors duration-300">
    <div className="flex items-center mb-4">
      <div className="text-green-400 mr-4">{icon}</div>
      <h3 className="text-xl font-bold text-white">{title}</h3>
    </div>
    <p className="text-gray-400">{description}</p>
  </div>
);

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20">
      <h2 className="text-3xl font-bold text-center text-white mb-2 font-8bit">
        <span className="text-green-400">$</span> cat ./nossos_servicos.txt
      </h2>
      <p className="text-center text-gray-400 mb-12">Criação e tecnologia para transformar sua ideia em realidade.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {services.map(service => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
