import React from 'react';
import { Link } from 'react-router-dom';
import { Building, Users, LayoutGrid, Plus } from 'lucide-react';
import StatsCard from '../components/dashboard/StatsCard';

const Dashboard: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="mt-1 text-gray-600">Overview of your business management system</p>
        </div>
        <div className="mt-4 md:mt-0">
          <Link to="/business/register" className="btn btn-primary">
            <Plus className="h-4 w-4 mr-2" />
            Register Business
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        <StatsCard
          title="Total Businesses"
          value="0"
          icon={<Building className="h-6 w-6" />}
          bgColor="bg-primary-500"
        />
        <StatsCard
          title="Departments"
          value="0"
          icon={<LayoutGrid className="h-6 w-6" />}
          bgColor="bg-secondary-500"
        />
        <StatsCard
          title="Employees"
          value="0"
          icon={<Users className="h-6 w-6" />}
          bgColor="bg-accent-500"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card animate-slide-up">
          <div className="card-header">
            <h3 className="text-lg font-semibold">Recent Businesses</h3>
          </div>
          <div className="card-body divide-y divide-gray-200">
            <div className="py-4 text-center text-gray-500">
              No businesses registered yet
            </div>
          </div>
          <div className="card-footer bg-gray-50">
            <Link to="/business/register" className="text-primary-600 text-sm font-medium hover:text-primary-700">
              Register a new business →
            </Link>
          </div>
        </div>

        <div className="card animate-slide-up">
          <div className="card-header">
            <h3 className="text-lg font-semibold">Recent Employee Verifications</h3>
          </div>
          <div className="card-body divide-y divide-gray-200">
            <div className="py-4 text-center text-gray-500">
              No employee verifications yet
            </div>
          </div>
          <div className="card-footer bg-gray-50">
            <Link to="/employees" className="text-primary-600 text-sm font-medium hover:text-primary-700">
              Manage employees →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;