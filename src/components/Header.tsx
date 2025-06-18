import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();
  return (
    <header className="bg-white shadow-lg border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">📊</span>
              </div>
              <div>
                <div className="text-xl font-bold text-blue-600">
                  Excel Chart Maker
                </div>
                <div className="text-xs text-gray-500">Professional Charts</div>
              </div>
            </Link>
          </div>
          <nav>
            <ul className="flex items-center space-x-8">
              <li>
                <Link
                  to="/"
                  className={`px-4 py-2 rounded-lg ${
                    location.pathname === '/' 
                      ? 'bg-blue-600 text-white font-semibold' 
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/chart-maker"
                  className={`px-4 py-2 rounded-lg ${
                    location.pathname === '/chart-maker' 
                      ? 'bg-blue-600 text-white font-semibold' 
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
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