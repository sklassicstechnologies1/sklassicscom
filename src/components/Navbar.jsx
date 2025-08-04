// import React from 'react';
// import { NavLink } from 'react-router-dom';

// export const Navbar = () => {
//   const baseStyle = 'hover:text-purple-800';
//   const activeStyle = 'text-purple-900 font-semibold underline';

//   return (
//     <header className="fixed top-0 left-0 w-full z-50">
//       {/* Top Bar (fixed along with nav) */}
//       <div className="bg-purple-900 text-white text-xs sm:text-sm px-2 sm:px-4 py-1 flex justify-between items-center">
//         <div className="flex flex-col sm:flex-row gap-1 sm:gap-4">
//           <span>📞 +91 9392732581</span>
//           <span>📧 sklassicsclub@gmail.com</span>
//         </div>
//       </div>

//       {/* Main Navbar */}
//       <nav className="bg-white shadow-md">
//         <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36 py-3 sm:py-4 flex items-center justify-between">
//           {/* Logo */}
//           <NavLink to="/" className="flex items-center space-x-4 sm:space-x-9">
//             <img
//               src="https://sklassics.com/wp-content/uploads/2024/06/Sklassics.png"
//               alt="Sklassics Logo"
//               className="h-8 md:h-10"
//             />
//           </NavLink>

//           {/* Desktop Menu */}
//           <ul className="hidden md:flex items-center gap-4 lg:gap-6 text-gray-600 font-semibold text-xs sm:text-sm">
//             {[
//               { to: '/', label: 'Home' },
//               { to: '/about', label: 'About Us' },
//               { to: '/courses', label: 'Courses' },
//               { to: '/workshops', label: 'Workshops' },
//               { to: '/blog', label: 'Blog' },
//               { to: '/projects', label: 'Projects' },
//               { to: '/contact', label: 'Contact Us' },
//               { to: '/login', label: 'Login/Signup' },
//             ].map(({ to, label }) => (
//               <li key={to}>
//                 <NavLink
//                   to={to}
//                   className={({ isActive }) =>
//                     isActive ? activeStyle : baseStyle
//                   }
//                 >
//                   {label}
//                 </NavLink>
//               </li>
//             ))}
//           </ul>

//           {/* Mobile Hamburger */}
//           <div className="md:hidden">
//             <button className="text-purple-800 text-2xl">☰</button>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const baseStyle = 'hover:text-purple-800';
  const activeStyle = 'text-purple-900 font-semibold underline';

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Top Bar (fixed along with nav) */}
      <div className="bg-purple-900 text-white text-xs sm:text-sm px-2 sm:px-4 py-1 flex justify-between items-center">
        <div className="flex flex-col sm:flex-row gap-1 sm:gap-4">
          <span>📞 +91 9392732581</span>
          <span>📧 sklassicsclub@gmail.com</span>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36 py-3 sm:py-4 flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-4 sm:space-x-9">
            <img
              src="https://sklassics.com/wp-content/uploads/2024/06/Sklassics.png"
              alt="Sklassics Logo"
              className="h-8 md:h-10"
            />
          </NavLink>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-4 lg:gap-6 text-gray-600 font-semibold text-xs sm:text-sm">
            {[
              { to: '/', label: 'Home' },
              { to: '/about', label: 'About Us' },
              { to: '/courses', label: 'Courses' },
              { to: '/workshops', label: 'Workshops' },
              { to: '/blog', label: 'Blog' },
              { to: '/projects', label: 'Projects' },
              { to: '/contact', label: 'Contact Us' },
              { to: '/login', label: 'Login/Signup' },
            ].map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    isActive ? activeStyle : baseStyle
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button 
              className="text-purple-800 text-2xl focus:outline-none"
              onClick={toggleMenu}
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Menu with space on sides and smooth animation */}
        <div className={`md:hidden bg-white overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-8 py-4"> {/* Increased side padding to px-8 */}
            <ul className="flex flex-col space-y-4">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About Us' },
                { to: '/courses', label: 'Courses' },
                { to: '/workshops', label: 'Workshops' },
                { to: '/blog', label: 'Blog' },
                { to: '/projects', label: 'Projects' },
                { to: '/contact', label: 'Contact Us' },
                { to: '/login', label: 'Login/Signup' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    className={({ isActive }) =>
                      isActive ? activeStyle : baseStyle
                    }
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;