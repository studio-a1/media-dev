import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-6 text-center text-gray-500 border-t border-gray-800">
      <p>&copy; {currentYear} Studio A1 Media Dev. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;
