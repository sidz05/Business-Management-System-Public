import React, { useState } from 'react';
import { Plus, Search, CheckCircle, XCircle, UserCog } from 'lucide-react';

interface Employee {
  id: string;
  name: string;
  aadhaar: string;
  department: string;
  isVerified: boolean;
}

const EmployeeManagement: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [employeeName, setEmployeeName] = useState('');
  const [employeeAadhaar, setEmployeeAadhaar] = useState('');
  const [employeeDepartment, setEmployeeDepartment] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddEmployee = () => {
    if (!employeeName.trim() || !employeeAadhaar.trim()) return;

    const newEmployee: Employee = {
      id: Date.now().toString(),
      name: employeeName,
      aadhaar: employeeAadhaar,
      department: employeeDepartment,
      isVerified: false,
    };

    setEmployees([...employees, newEmployee]);
    setEmployeeName('');
    setEmployeeAadhaar('');
    setEmployeeDepartment('');
    setShowModal(false);
  };

  const toggleVerification = (id: string) => {
    setEmployees(
      employees.map((emp) =>
        emp.id === id ? { ...emp, isVerified: !emp.isVerified } : emp
      )
    );
  };

  const filteredEmployees = employees.filter(
    (emp) =>
      emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emp.aadhaar.includes(searchTerm) ||
      emp.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Employee Management</h1>
          <p className="mt-1 text-gray-600">Manage and verify employees</p>
        </div>
        <div className="mt-4 md:mt-0">
          <button
            onClick={() => setShowModal(true)}
            className="btn btn-primary"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Employee
          </button>
        </div>
      </div>

      <div className="card mb-6">
        <div className="card-body">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="input pl-10"
              placeholder="Search employees by name, Aadhaar, or department"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      {employees.length === 0 ? (
        <div className="card animate-slide-up">
          <div className="card-body text-center py-12">
            <UserCog className="h-12 w-12 text-gray-400 mx-auto" />
            <h3 className="mt-4 text-lg font-medium text-gray-900">No employees yet</h3>
            <p className="mt-2 text-gray-500">Get started by adding a new employee</p>
            <div className="mt-6">
              <button
                type="button"
                onClick={() => setShowModal(true)}
                className="btn btn-primary mx-auto"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Employee
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="card shadow animate-slide-up">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Aadhaar
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Department
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredEmployees.map((employee) => (
                  <tr key={employee.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{employee.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{employee.aadhaar}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{employee.department}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {employee.isVerified ? (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-success-100 text-success-800">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Verified
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-warning-100 text-warning-800">
                          <XCircle className="h-3 w-3 mr-1" />
                          Pending
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button
                        onClick={() => toggleVerification(employee.id)}
                        className={`btn ${
                          employee.isVerified
                            ? 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                            : 'bg-success-100 text-success-800 hover:bg-success-200'
                        } py-1 px-3`}
                      >
                        {employee.isVerified ? 'Unverify' : 'Verify'}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Add Employee Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75" onClick={() => setShowModal(false)}></div>
            </div>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Add New Employee</h3>
                <div className="form-group">
                  <label htmlFor="employeeName" className="label">Employee Name *</label>
                  <input
                    type="text"
                    id="employeeName"
                    className="input"
                    value={employeeName}
                    onChange={(e) => setEmployeeName(e.target.value)}
                    placeholder="Full name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="employeeAadhaar" className="label">Aadhaar Number *</label>
                  <input
                    type="text"
                    id="employeeAadhaar"
                    className="input"
                    value={employeeAadhaar}
                    onChange={(e) => setEmployeeAadhaar(e.target.value)}
                    placeholder="12-digit Aadhaar number"
                    maxLength={12}
                    pattern="\d{12}"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="employeeDepartment" className="label">Department</label>
                  <input
                    type="text"
                    id="employeeDepartment"
                    className="input"
                    value={employeeDepartment}
                    onChange={(e) => setEmployeeDepartment(e.target.value)}
                    placeholder="e.g., Human Resources"
                  />
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="btn btn-primary sm:ml-3"
                  onClick={handleAddEmployee}
                >
                  Add Employee
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

export default EmployeeManagement;