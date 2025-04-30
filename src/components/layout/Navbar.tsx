import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Bell, User } from 'lucide-react';

interface NavbarProps {
  toggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar }) => {
  return (
    <header className="sticky top-0 z-30 bg-white shadow-sm">
      <nav className="flex items-center justify-between px-4 md:px-6 h-16">
        <div className="flex items-center">
          <button
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 md:hidden"
            onClick={toggleSidebar}
          >
            <span className="sr-only">Open sidebar</span>
            <Menu className="h-6 w-6" />
          </button>
          <Link to="/" className="flex items-center space-x-2 ml-2 md:ml-0">
            <span className="text-primary-800 font-bold text-xl">BizFlow</span>
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <button
            type="button"
            className="p-1 rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <span className="sr-only">View notifications</span>
            <Bell className="h-6 w-6" />
          </button>
          <div className="relative">
            <button
              type="button"
              className="flex items-center justify-center rounded-full w-8 h-8 bg-primary-800 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <span className="sr-only">Open user menu</span>
              <User className="h-5 w-5" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;