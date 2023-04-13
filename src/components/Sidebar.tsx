import React from 'react';

const Sidebar = () => {
  return (
    <aside className="bg-gray-800 text-white h-screen w-1/5 flex-shrink-0">
      <nav>
        <ul className="list-none p-0">
          <li className="py-4 px-6 bg-gray-900">
            <a href="#" className="block text-white font-bold">Dashboard</a>
          </li>
          <li className="py-4 px-6">
            <a href="#" className="block text-gray-400 hover:text-white">Usuarios</a>
          </li>
          <li className="py-4 px-6">
            <a href="#" className="block text-gray-400 hover:text-white">Productos</a>
          </li>
          <li className="py-4 px-6">
            <a href="#" className="block text-gray-400 hover:text-white">Ventas</a>
          </li></ul>
  </nav>
</aside>);
};

export default Sidebar;