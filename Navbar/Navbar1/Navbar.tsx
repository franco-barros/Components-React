"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // No mostrar el navbar en la página de login
  if (pathname === "/login") {
    return null;
  }

  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo: no interactivo */}
        <div className="text-2xl font-bold text-blue-500 select-none">
          Equilibra
        </div>

        {/* Menú de escritorio */}
        <ul className="hidden md:flex space-x-4">
          <li>
            <a
              href="/dashboard"
              className="px-4 py-2 text-gray-700 hover:text-blue-500"
            >
              Inicio
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="px-4 py-2 text-gray-700 hover:text-blue-500"
            >
              Acerca de
            </a>
          </li>
          <li>
            <a
              href="/perfil"
              className="px-4 py-2 text-gray-700 hover:text-blue-500"
            >
              Perfil
            </a>
          </li>
          <li>
            <a
              href="/login"
              className="px-4 py-2 text-gray-700 hover:text-blue-500"
            >
              Iniciar Sesión
            </a>
          </li>
        </ul>

        {/* Ícono hamburguesa para móviles */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 hover:text-blue-500 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      {isOpen && (
        <div className="md:hidden px-4 pt-2 pb-4 bg-white">
          <ul className="flex flex-col items-start w-full space-y-2">
            <li>
              <a
                href="/dashboard"
                onClick={() => setIsOpen(false)}
                className="block w-full px-4 py-2 text-gray-700 hover:text-blue-500"
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                href="/about"
                onClick={() => setIsOpen(false)}
                className="block w-full px-4 py-2 text-gray-700 hover:text-blue-500"
              >
                Acerca de
              </a>
            </li>
            <li>
              <a
                href="/perfil"
                onClick={() => setIsOpen(false)}
                className="block w-full px-4 py-2 text-gray-700 hover:text-blue-500"
              >
                Perfil
              </a>
            </li>
            <li>
              <a
                href="/login"
                onClick={() => setIsOpen(false)}
                className="block w-full px-4 py-2 text-gray-700 hover:text-blue-500"
              >
                Iniciar Sesión
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
