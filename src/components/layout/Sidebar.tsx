import React from 'react';
import { NavLink } from 'react-router-dom';
import { X, Home, Building, Users, LayoutGrid } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  closeSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, closeSidebar }) => {
  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `flex items-center space-x-3 px-3 py-2 rounded-md ${
      isActive
        ? 'bg-primary-50 text-primary-800 font-medium'
        : 'text-gray-700 hover:bg-gray-100'
    }`;

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-gray-600 bg-opacity-75 md:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed md:sticky top-0 left-0 z-50 md:z-0 h-full w-64 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 bg-white border-r border-gray-200 overflow-y-auto transition-transform duration-300 ease-in-out flex-shrink-0`}
      >
        <div className="p-4 flex items-center justify-between md:hidden">
          <span className="text-primary-800 font-bold text-xl">BizFlow</span>
          <button
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
            onClick={closeSidebar}
          >
            <span className="sr-only">Close sidebar</span>
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="pt-5 pb-4 px-4 md:pt-4">
          <nav className="space-y-1">
            <NavLink to="/" className={navLinkClass} onClick={closeSidebar}>
              <Home className="h-5 w-5" />
              <span>Dashboard</span>
            </NavLink>
            <NavLink to="/business/register" className={navLinkClass} onClick={closeSidebar}>
              <Building className="h-5 w-5" />
              <span>Business Registration</span>
            </NavLink>
            <NavLink to="/departments" className={navLinkClass} onClick={closeSidebar}>
              <LayoutGrid className="h-5 w-5" />
              <span>Departments</span>
            </NavLink>
            <NavLink to="/employees" className={navLinkClass} onClick={closeSidebar}>
              <Users className="h-5 w-5" />
              <span>Employees</span>
            </NavLink>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;