import React, { useState } from 'react';
import { Plus, Trash2, User, Users, Building } from 'lucide-react';

interface Department {
  id: string;
  name: string;
  description: string;
  employeeCount: number;
}

const DepartmentManagement: React.FC = () => {
  const [departments, setDepartments] = useState<Department[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [departmentName, setDepartmentName] = useState('');
  const [departmentDescription, setDepartmentDescription] = useState('');

  const handleAddDepartment = () => {
    if (!departmentName.trim()) return;

    const newDepartment: Department = {
      id: Date.now().toString(),
      name: departmentName,
      description: departmentDescription,
      employeeCount: 0,
    };

    setDepartments([...departments, newDepartment]);
    setDepartmentName('');
    setDepartmentDescription('');
    setShowModal(false);
  };

  const handleDeleteDepartment = (id: string) => {
    setDepartments(departments.filter(dept => dept.id !== id));
  };

  return (
    <div className="animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Department Management</h1>
          <p className="mt-1 text-gray-600">Create and manage departments for your business</p>
        </div>
        <div className="mt-4 md:mt-0">
          <button
            onClick={() => setShowModal(true)}
            className="btn btn-primary"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Department
          </button>
        </div>
      </div>

      {departments.length === 0 ? (
        <div className="card animate-slide-up">
          <div className="card-body text-center py-12">
            <Building className="h-12 w-12 text-gray-400 mx-auto" />
            <h3 className="mt-4 text-lg font-medium text-gray-900">No departments yet</h3>
            <p className="mt-2 text-gray-500">Get started by creating a new department</p>
            <div className="mt-6">
              <button
                type="button"
                onClick={() => setShowModal(true)}
                className="btn btn-primary mx-auto"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Department
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {departments.map(department => (
            <div key={department.id} className="card animate-slide-up">
              <div className="card-header border-b border-gray-200 flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-900 truncate">{department.name}</h3>
                <button
                  onClick={() => handleDeleteDepartment(department.id)}
                  className="text-gray-400 hover:text-error-500"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
              <div className="card-body">
                <p className="text-gray-600 mb-4 line-clamp-2">{department.description}</p>
                <div className="flex items-center text-gray-500">
                  <Users className="h-5 w-5 mr-2" />
                  <span>{department.employeeCount} Employees</span>
                </div>
              </div>
              <div className="card-footer bg-gray-50">
                <button className="btn btn-ghost text-primary-600 hover:text-primary-700 text-sm">
                  <User className="h-4 w-4 mr-2" />
                  Assign Employees
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Add Department Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75" onClick={() => setShowModal(false)}></div>
            </div>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Add New Department</h3>
                <div className="form-group">
                  <label htmlFor="departmentName" className="label">Department Name *</label>
                  <input
                    type="text"
                    id="departmentName"
                    className="input"
                    value={departmentName}
                    onChange={(e) => setDepartmentName(e.target.value)}
                    placeholder="e.g., Human Resources"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="departmentDescription" className="label">Description</label>
                  <textarea
                    id="departmentDescription"
                    className="input min-h-[100px]"
                    value={departmentDescription}
                    onChange={(e) => setDepartmentDescription(e.target.value)}
                    placeholder="Describe the department's function"
                  />
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="btn btn-primary sm:ml-3"
                  onClick={handleAddDepartment}
                >
                  Add Department
                </button>
                <button
                  type="button"
                  className="btn btn-ghost mt-3 sm:mt-0"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DepartmentManagement;