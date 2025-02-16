"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  // Función para manejar el inicio de sesión
  const handleLogin = () => {
    //Agregar una petición a una API
    setTimeout(() => {
      router.push("/dashboard");
    }, 500);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-white to-blue-100 p-4">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-semibold">
          Bienvenido a <span className="text-green-600">Equilibra</span>
        </h1>
        <p className="text-gray-600">
          Tu plataforma de bienestar y productividad
        </p>
      </div>
      <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-sm">
        <label className="block text-gray-700">Email</label>
        <input
          type="email"
          placeholder="Ingresar"
          className="w-full p-2 border rounded-lg mb-4"
        />

        <label className="block text-gray-700">Password</label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Ingresar"
            className="w-full p-2 border rounded-lg"
          />
        </div>

        <div className="flex items-center mt-2">
          <input
            type="checkbox"
            checked={showPassword}
            onChange={() => setShowPassword(!showPassword)}
            className="mr-2"
          />
          <span className="text-gray-600 text-sm">Mostrar contraseña</span>
        </div>

        <div className="text-sm text-gray-500 mt-2 flex justify-between">
          <Link href="#" className="hover:underline">
            ¿Olvidaste tu contraseña?
          </Link>
          <Link href="#" className="text-green-600 hover:underline">
            Registrate
          </Link>
        </div>

        <button
          onClick={handleLogin} // Llama a la función de login
          className="w-full mt-4 bg-gradient-to-r from-blue-400 to-green-400 text-white p-2 rounded-lg hover:opacity-90"
        >
          Iniciar Sesión
        </button>
      </div>
    </div>
  );
};

export default Login;
