import React, { useState } from 'react';
import logo from "./../../assets/img/llamada-telefonica.svg"
import './header.css'
export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isUserAuthenticated, setUserAuthenticated] = useState(false);
  const currentUser = { name: 'Usuario' };

  return (
    <header>
      <nav className="flex items-center justify-between flex-wrap p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <img src={logo} className="h-10 w-auto" alt="Logo" />APV
        </div>
        <div className="block lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white">
            Menú
          </button>
        </div>
        <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? 'block' : 'hidden'}`}>
          <div className="text-sm lg:flex-grow">
            <a href="/home" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-4">
              Inicio
            </a>
            <a href="/acerca-de" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4">
              Acerca de
            </a>
            <a href="/contacto" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white">
              Contacto
            </a>
          </div>
          <div>
            {isUserAuthenticated ? (
              <>
                <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
                  {currentUser.name}
                </a>
                <a href="#" onClick={() => setUserAuthenticated(false)} className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
                  Cerrar sesión
                </a>
              </>
            ) : (
              <>
                <a href="/login" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
                  Iniciar sesión
                </a>
                <a href="/signup" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
                  Registrarse
                </a>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};
