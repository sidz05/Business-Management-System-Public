import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Building, Upload, CheckCircle } from 'lucide-react';

interface BusinessFormData {
  businessName: string;
  gstNumber: string;
  ownerAadhaar: string;
}

const BusinessRegistration: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const { register, handleSubmit, formState: { errors } } = useForm<BusinessFormData>();
  
  const onSubmit = (data: BusinessFormData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form data:', data);
      console.log('Selected file:', selectedFile);
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    }, 1500);
  };
  
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    setSelectedFile(file);
  };

  return (
    <div className="animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Business Registration</h1>
          <p className="mt-1 text-gray-600">Register your business details and upload required documents</p>
        </div>
      </div>
      
      <div className="card max-w-2xl mx-auto">
        <div className="card-header border-b border-gray-200">
          <div className="flex items-center">
            <Building className="h-5 w-5 text-primary-600 mr-2" />
            <h2 className="text-lg font-semibold">Business Information</h2>
          </div>
        </div>
        
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          {isSuccess && (
            <div className="bg-success-50 border border-success-200 text-success-800 rounded-md p-4 mb-6 flex items-center animate-fade-in">
              <CheckCircle className="h-5 w-5 text-success-500 mr-2" />
              <span>Business registration submitted successfully!</span>
            </div>
          )}
          
          <div className="form-group">
            <label htmlFor="businessName" className="label">Business Name *</label>
            <input
              id="businessName"
              type="text"
              className={`input ${errors.businessName ? 'border-error-500 focus:ring-error-500' : ''}`}
              placeholder="Enter business name"
              {...register('businessName', { required: 'Business name is required' })}
            />
            {errors.businessName && (
              <p className="mt-1 text-sm text-error-600">{errors.businessName.message}</p>
            )}
          </div>
          
          <div className="form-group">
            <label htmlFor="gstNumber" className="label">GST Number *</label>
            <input
              id="gstNumber"
              type="text"
              className={`input ${errors.gstNumber ? 'border-error-500 focus:ring-error-500' : ''}`}
              placeholder="e.g., 22AAAAA0000A1Z5"
              {...register('gstNumber', { 
                required: 'GST number is required',
                pattern: {
                  value: /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/,
                  message: 'Please enter a valid GST number'
                }
              })}
            />
            {errors.gstNumber && (
              <p className="mt-1 text-sm text-error-600">{errors.gstNumber.message}</p>
            )}
          </div>
          
          <div className="form-group">
            <label htmlFor="ownerAadhaar" className="label">Owner Aadhaar Number *</label>
            <input
              id="ownerAadhaar"
              type="text"
              className={`input ${errors.ownerAadhaar ? 'border-error-500 focus:ring-error-500' : ''}`}
              placeholder="12-digit Aadhaar number"
              {...register('ownerAadhaar', { 
                required: 'Aadhaar number is required',
                pattern: {
                  value: /^\d{12}$/,
                  message: 'Please enter a valid 12-digit Aadhaar number'
                }
              })}
            />
            {errors.ownerAadhaar && (
              <p className="mt-1 text-sm text-error-600">{errors.ownerAadhaar.message}</p>
            )}
          </div>
          
          <div className="form-group">
            <label htmlFor="document" className="label">Business Documents *</label>
            <div className="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                <div className="flex text-sm text-gray-600">
                  <label htmlFor="document" className="relative cursor-pointer bg-white rounded-md font-medium text-primary-600 hover:text-primary-500 focus-within:outline-none">
                    <span>Upload a file</span>
                    <input 
                      id="document" 
                      name="document" 
                      type="file" 
                      className="sr-only" 
                      onChange={handleFileChange}
                      accept=".pdf,.jpg,.jpeg,.png"
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">PDF, PNG, JPG up to 10MB</p>
              </div>
            </div>
            {selectedFile && (
              <p className="mt-2 text-sm text-gray-600">
                Selected file: <span className="font-medium">{selectedFile.name}</span>
              </p>
            )}
          </div>
          
          <div className="mt-6">
            <button
              type="submit"
              className="btn btn-primary w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Register Business'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BusinessRegistration;