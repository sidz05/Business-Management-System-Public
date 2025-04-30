import React, { ReactNode } from 'react';

interface StatsCardProps {
  title: string;
  value: string;
  icon: ReactNode;
  bgColor: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value, icon, bgColor }) => {
  return (
    <div className="card shadow-md overflow-hidden animate-slide-up">
      <div className="p-5">
        <div className="flex items-center">
          <div className={`rounded-lg p-3 ${bgColor} text-white`}>
            {icon}
          </div>
          <div className="ml-5">
            <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
            <div className="flex items-end mt-1">
              <p className="text-2xl font-semibold">{value}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;