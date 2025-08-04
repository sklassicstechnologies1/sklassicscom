import React from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[90vh] flex items-end justify-center bg-white pt-[140px] pb-[40px]">

      <div className="w-full max-w-md px-4 sm:px-6 space-y-5">
        {/* Input Fields */}
        {[
          { label: 'Username', type: 'text' },
          { label: 'First Name', type: 'text' },
          { label: 'Last Name', type: 'text' },
          { label: 'E-mail Address', type: 'email' },
          { label: 'Password', type: 'password' },
        ].map((field, index) => (
          <div key={index}>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {field.label}
            </label>
            <input
              type={field.type}
              className="w-full border border-gray-300 px-4 py-2 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        ))}

        {/* Confirm Password */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Confirm Password
          </label>
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full border border-gray-300 px-4 py-2 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <button className="w-full sm:w-1/2 bg-blue-500 text-white py-2 rounded-sm hover:bg-blue-600 transition-all">
            Register
          </button>
          <button
            onClick={() => navigate('/login')}
            className="w-full sm:w-1/2 bg-gray-100 text-gray-700 py-2 rounded-sm hover:bg-gray-200 transition-all shadow"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
