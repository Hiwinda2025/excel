import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="text-xl font-bold text-primary">
            <Link to="/">Excel Chart Maker</Link>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link
                  to="/"
                  className={`hover:text-blue-600 transition-colors ${location.pathname === '/' ? 'font-bold text-blue-600' : 'text-gray-700'}`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/chart-maker"
                  className={`hover:text-blue-600 transition-colors ${location.pathname === '/chart-maker' ? 'font-bold text-blue-600' : 'text-gray-700'}`}
                >
                  Chart Maker
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
export default Header; 