import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="text-center bg-white border-t">
      <div className="container mx-auto px-4 py-4">
        <p className="text-gray-600">
          © {new Date().getFullYear()} Excel Chart Maker. All rights reserved.
        </p>
        <p className="text-sm text-gray-500 mt-2">
          Create beautiful charts from your Excel data with ease
        </p>
      </div>
    </footer>
  );
};

export default Footer; 