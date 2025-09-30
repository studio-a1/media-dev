import React from 'react';

const Header: React.FC = () => {
  return (
    <header
      id="header"
      className="auto top-0 left-0 w-half bg-900 bg-opacity-90 z-20 shadow-md py-6 px-6"
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo / terminal effect */}
        <div className="text-xl md:text-2xl font-bold tracking-widest flex items-center">
          <span className="text-green-400">root@studioa1</span>
          <span className="text-gray-400">:</span>
          <span className="text-blue-400">~</span>
          <span className="text-gray-400">$</span>
          <span className="ml-2 text-white">cd /web3/clientes.txt</span>
          <span className="bg-green-400 w-2 h-5 ml-2 animate-ping"></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
     


