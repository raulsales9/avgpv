import React from "react";

type FormData = {
  id_user: string;
  password: string;
};

export const Login = () => {
  return (
    <main className="flex justify-center items-center h-screen bg-gray-200">
      <section className="w-1/2 max-w-md bg-white rounded p-8 m-4">
        <form className="mb-4">
          <h2 className="block text-gray-700 text-sm font-bold mb-2">Iniciar sesion</h2>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="inputId_user">
              Nombre
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="inputId_user"
              required
              autoFocus
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Contraseña
            </label>
            <input
              type="password"
              name="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="inputPassword"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Iniciar Sesion
          </button>
        </form>
      </section>
      <section className="w-1/2 container-left"></section>
    </main>
  );
};
