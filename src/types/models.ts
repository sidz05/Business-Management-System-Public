export interface Business {
  id: string;
  name: string;
  gstNumber: string;
  ownerAadhaar: string;
  createdAt: Date;
}

export interface BusinessDocument {
  id: string;
  businessId: string;
  fileName: string;
  fileType: string;
  fileUrl: string;
  uploadedAt: Date;
}

export interface Department {
  id: string;
  businessId: string;
  name: string;
  description?: string;
  createdAt: Date;
}

export interface Employee {
  id: string;
  name: string;
  aadhaar: string;
  departmentId?: string;
  isVerified: boolean;
  createdAt: Date;
}