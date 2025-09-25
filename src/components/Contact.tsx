import React from 'react';
import WhatsappIcon from './icons/WhatsappIcon';
import MailIcon from './icons/MailIcon';
import FacebookIcon from './icons/FacebookIcon';
import InstagramIcon from './icons/InstagramIcon';
import PinterestIcon from './icons/PinterestIcon';
import HistoryIcon from './icons/HistoryIcon';

const SocialLink: React.FC<{ href: string; children: React.ReactNode; 'aria-label': string }> = ({ href, children, 'aria-label': ariaLabel }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors duration-300" aria-label={ariaLabel}>
    {children}
  </a>
);

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 text-center">
      <h2 className="text-3xl font-bold text-center text-white mb-2 font-8bit">
        <span className="text-green-400">$</span> contact --all
      </h2>
      <p className="text-center text-gray-400 mb-12">Vamos construir algo incrível juntos. Entre em contato.</p>
      
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-12">
        <a href="https://wa.me/5548988373300" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full md:w-auto bg-green-600 text-black font-bold py-3 px-6 border-2 border-green-600 hover:bg-black hover:text-green-400 transition-all duration-300 text-lg">
          <WhatsappIcon /> <span className="ml-3">WhatsApp</span>
        </a>
        <a href="mailto:j.webmass@gmail.com" className="flex items-center justify-center w-full md:w-auto bg-transparent text-green-400 font-bold py-3 px-6 border-2 border-green-600 hover:bg-green-600 hover:text-black transition-all duration-300 text-lg">
          <MailIcon /> <span className="ml-3">Email</span>
        </a>
      </div>

      <div className="my-16">
        <a href="http://studioa1.com.br" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-gray-800 text-blue-400 font-bold py-3 px-8 border border-blue-500 hover:bg-blue-500 hover:text-black transition-all duration-300 text-lg">
          <HistoryIcon /> <span className="ml-3">Histórico Web de Projetos</span>
        </a>
      </div>

      <div className="flex justify-center items-center gap-8">
        <SocialLink href="https://facebook.com/studioa1-media" aria-label="Siga-nos no Facebook">
          <FacebookIcon />
        </SocialLink>
        <SocialLink href="https://instagram.com/studioa1.dev" aria-label="Siga-nos no Instagram">
          <InstagramIcon />
        </SocialLink>
        <SocialLink href="https://pinterest.com/" aria-label="Siga-nos no Pinterest">
          <PinterestIcon />
        </SocialLink>
      </div>
    </section>
  );
};

export default Contact;