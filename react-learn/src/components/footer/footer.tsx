import React, {useState} from "react";


export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white body-font w-screen">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
          <span className="ml-3 text-xl">Nombre de la Empresa</span>
        </a>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © {new Date().getFullYear()} Nombre de la Empresa —
          <a href="https://twitter.com/nombre_empresa" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@nombre_empresa</a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a className="text-gray-500" href="https://facebook.com/nombre_empresa">
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M9 8h-3v4h3v12h5v-12h3.5l.5-4h-4l.1-2c0-1.1.2-1.7 1.6-2h2.8v4h-2c-.1 0-.2.1-.2.2l-.1 1h2.6l-.3 4h-2.3v12h4v-12c0-2.9-2.2-5.1-5-5.1l-5 .1z"></path>
            </svg>
          </a>
          <a className="ml-3 text-gray-500" href="https://twitter.com/nombre_empresa">
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a>
          <a className="ml-3 text-gray-500" href="https://instagram.com/nombre_empresa">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path>
              <path d="M17.5 6.5"></path>
            </svg>
          </a>
        </span>
      </div>
    </footer>
  );
};
