"use client";
import React, { useState } from "react";

const ConfiguracionPerfil: React.FC = () => {
  // Datos del perfil
  const [nombre] = useState("@nombre");
  const [correo] = useState("@correo");
  const [empresaDepartamento] = useState("@empresa/departamento");

  // Estado para las preferencias
  const [preferencias, setPreferencias] = useState({
    noMolestar: false,
    recordatorios: false,
    recordatoriosPausas: false,
    alertasBienestar: false,
  });

  // Manejo de cambios en las preferencias (checkboxes)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPreferencias({
      ...preferencias,
      [e.target.name]: e.target.checked,
    });
  };

  const daysOfWeek = [
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
    "Domingo",
  ];

  // Estados para selección dinámica de días y horas en inicio y final de jornada
  const [inicioDias, setInicioDias] = useState<string[]>([]);
  const [horaInicio, setHoraInicio] = useState("");
  const [finalDias, setFinalDias] = useState<string[]>([]);
  const [horaFinal, setHoraFinal] = useState("");

  // Estados para controlar dropdown de días
  const [isInicioDropdownOpen, setIsInicioDropdownOpen] = useState(false);
  const [isFinalDropdownOpen, setIsFinalDropdownOpen] = useState(false);

  const toggleInicioDia = (day: string) => {
    if (inicioDias.includes(day)) {
      setInicioDias(inicioDias.filter((d) => d !== day));
    } else {
      setInicioDias([...inicioDias, day]);
    }
  };

  const toggleFinalDia = (day: string) => {
    if (finalDias.includes(day)) {
      setFinalDias(finalDias.filter((d) => d !== day));
    } else {
      setFinalDias([...finalDias, day]);
    }
  };

  // Función para guardar cambios (simula el envío de datos a una API)
  const handleGuardarCambios = () => {
    const datosPerfil = {
      nombre,
      correo,
      empresaDepartamento,
      preferencias,
      inicioJornada: {
        dias: inicioDias,
        hora: horaInicio,
      },
      finalJornada: {
        dias: finalDias,
        hora: horaFinal,
      },
    };
    console.log("Guardando cambios:", datosPerfil);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow rounded-lg space-y-6">
      <h2 className="text-2xl font-bold text-center mb-6">
        Configuración de Perfil
      </h2>

      {/* Datos del perfil */}
      <div className="space-y-4">
        <div>
          <label htmlFor="nombre" className="block text-gray-700 mb-1">
            Nombre:
          </label>
          <input
            id="nombre"
            type="text"
            value={nombre}
            readOnly
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div>
          <label htmlFor="correo" className="block text-gray-700 mb-1">
            Correo:
          </label>
          <input
            id="correo"
            type="email"
            value={correo}
            readOnly
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div>
          <label
            htmlFor="empresaDepartamento"
            className="block text-gray-700 mb-1"
          >
            Empresa/Departamento:
          </label>
          <input
            id="empresaDepartamento"
            type="text"
            value={empresaDepartamento}
            readOnly
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
      </div>

      {/* Preferencias generales */}
      <div className="space-y-4">
        <div className="flex flex-col space-y-2">
          <label htmlFor="noMolestar" className="flex items-center space-x-2">
            <input
              id="noMolestar"
              type="checkbox"
              name="noMolestar"
              checked={preferencias.noMolestar}
              onChange={handleChange}
              className="form-checkbox h-5 w-5 text-blue-500 rounded-full"
            />
            <span className="text-gray-700">No molestar en las noches</span>
          </label>
          <label
            htmlFor="recordatorios"
            className="flex items-center space-x-2"
          >
            <input
              id="recordatorios"
              type="checkbox"
              name="recordatorios"
              checked={preferencias.recordatorios}
              onChange={handleChange}
              className="form-checkbox h-5 w-5 text-blue-500 rounded-full"
            />
            <span className="text-gray-700">Activar recordatorios</span>
          </label>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-center text-gray-700">
            Preferencias de Bienestar
          </h3>
          <div className="flex flex-col space-y-2">
            <label
              htmlFor="recordatoriosPausas"
              className="flex items-center space-x-2"
            >
              <input
                id="recordatoriosPausas"
                type="checkbox"
                name="recordatoriosPausas"
                checked={preferencias.recordatoriosPausas}
                onChange={handleChange}
                className="form-checkbox h-5 w-5 text-blue-500 rounded-full"
              />
              <span className="text-gray-700">
                Recibir recordatorios de pausas activas
              </span>
            </label>
            <label
              htmlFor="alertasBienestar"
              className="flex items-center space-x-2"
            >
              <input
                id="alertasBienestar"
                type="checkbox"
                name="alertasBienestar"
                checked={preferencias.alertasBienestar}
                onChange={handleChange}
                className="form-checkbox h-5 w-5 text-blue-500 rounded-full"
              />
              <span className="text-gray-700">
                Recibir alertas de bienestar general
              </span>
            </label>
          </div>
        </div>
      </div>

      {/* Horario laboral */}
      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-center text-gray-700">
          Inicio de jornada laboral
        </h3>
        <div className="flex justify-between gap-4">
          {/* Selección de días: botón con dropdown */}
          <div className="w-1/2">
            <p className="font-medium">Día</p>
            <button
              onClick={() => setIsInicioDropdownOpen(!isInicioDropdownOpen)}
              id="inicio-dias-button"
              className="mt-2 p-2 border border-gray-300 rounded-full text-center w-full"
            >
              {inicioDias.length > 0
                ? inicioDias.join(", ")
                : "Selecciona días"}
            </button>
            {isInicioDropdownOpen && (
              <div className="mt-2 border border-gray-300 rounded-md p-2">
                {daysOfWeek.map((day) => (
                  <button
                    key={"inicio-" + day}
                    onClick={() => toggleInicioDia(day)}
                    className={`block w-full text-left p-1 rounded ${
                      inicioDias.includes(day)
                        ? "bg-blue-500 text-white"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    {day}
                  </button>
                ))}
              </div>
            )}
          </div>
          {/* Selección de hora */}
          <div className="w-1/2">
            <p className="font-medium">Hora</p>
            <input
              id="horaInicio"
              type="time"
              value={horaInicio}
              onChange={(e) => setHoraInicio(e.target.value)}
              className="mt-2 p-2 border border-gray-300 rounded-full text-center w-full"
            />
          </div>
        </div>

        <h3 className="text-lg font-semibold text-center text-gray-700">
          Final de jornada laboral
        </h3>
        <div className="flex justify-between gap-4">
          {/* Selección de días: botón con dropdown */}
          <div className="w-1/2">
            <p className="font-medium">Día</p>
            <button
              onClick={() => setIsFinalDropdownOpen(!isFinalDropdownOpen)}
              id="final-dias-button"
              className="mt-2 p-2 border border-gray-300 rounded-full text-center w-full"
            >
              {finalDias.length > 0 ? finalDias.join(", ") : "Selecciona días"}
            </button>
            {isFinalDropdownOpen && (
              <div className="mt-2 border border-gray-300 rounded-md p-2">
                {daysOfWeek.map((day) => (
                  <button
                    key={"final-" + day}
                    onClick={() => toggleFinalDia(day)}
                    className={`block w-full text-left p-1 rounded ${
                      finalDias.includes(day)
                        ? "bg-blue-500 text-white"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    {day}
                  </button>
                ))}
              </div>
            )}
          </div>
          {/* Selección de hora */}
          <div className="w-1/2">
            <p className="font-medium">Hora</p>
            <input
              id="horaFinal"
              type="time"
              value={horaFinal}
              onChange={(e) => setHoraFinal(e.target.value)}
              className="mt-2 p-2 border border-gray-300 rounded-full text-center w-full"
            />
          </div>
        </div>
      </div>

      {/* Botones de acción */}
      <div className="space-y-4 mt-6">
        <button className="w-full py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition">
          Cambiar contraseña
        </button>
        <button
          onClick={handleGuardarCambios}
          className="w-full py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition"
        >
          Guardar cambios
        </button>
      </div>
    </div>
  );
};

export default ConfiguracionPerfil;
