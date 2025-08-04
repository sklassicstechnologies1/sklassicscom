import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[85vh] flex items-end justify-center bg-white pt-[140px] pb-[40px]">

      <div className="w-full max-w-md space-y-6 px-6">
        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-700">
            Username or E-mail
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 px-4 py-2 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <label className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            className="w-full border border-gray-300 px-4 py-2 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="flex items-center space-x-2">
          <input type="checkbox" id="remember" className="h-4 w-4" />
          <label htmlFor="remember" className="text-sm text-gray-600">
            Keep me signed in
          </label>
        </div>

        <div className="flex gap-4 mt-4">
          <button className="bg-blue-400 text-white px-18 py-2 rounded-sm hover:bg-blue-600 transition-all">
            Login
          </button>
          <button
            onClick={() => navigate('/register')}
            className="bg-gray-200 text-gray-700 px-18 py-2 rounded-sm hover:bg-gray-300 transition-all shadow"
          >
            Register
          </button>
        </div>

        <div className="text-center mt-4">
          <a href="#" className="text-sm text-gray-500 hover:text-gray-700">
            Forgot your password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;

