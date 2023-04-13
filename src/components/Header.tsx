import React from 'react';

const Header = () => {
  const user = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    avatarUrl: 'https://via.placeholder.com/150',
  };

  const handleLogout = () => {
    // Aquí pondríamos la lógica para cerrar sesión del usuario
  };

  return (
    <header className="bg-gray-900 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Mi aplicación</h1>
        <div className="relative">
          <button className="flex items-center">
            <img
              src={user.avatarUrl}
              alt="Avatar"
              className="h-8 w-8 rounded-full mr-2"
            />
            <span>{user.name}</span>
            <svg
              className="h-4 w-4 ml-2 fill-current text-gray-400"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M4 6a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM4 10a1 1 0 011-1h6a1 1 0 110 2H5a1 1 0 01-1-1zM5 13a1 1 0 100 2h6a1 1 0 100-2H5z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <ul className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-10 hidden">
            <li className="py-1 px-4 hover:bg-gray-100 cursor-pointer">
              <span className="block text-gray-800">Perfil</span>
            </li>
            <li className="py-1 px-4 hover:bg-gray-100 cursor-pointer">
              <span className="block text-gray-800">Configuración</span>
            </li>
            <li className="py-1 px-4 hover:bg-gray-100 cursor-pointer" onClick={handleLogout}>
              <span className="block text-gray-800">Cerrar sesión</span>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;

