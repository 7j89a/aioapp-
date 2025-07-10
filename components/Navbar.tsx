
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { isAuthenticated, logout, user } = useAuth();

  const navLinkClass = ({ isActive }: { isActive: boolean }): string =>
    `font-medium transition-all duration-300 px-4 py-2 rounded-full text-sm sm:text-base ${
      isActive ? 'bg-gold-accent text-primary-black' : 'text-primary-white hover:bg-gold-accent/20'
    }`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-glass-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2 text-2xl font-black text-gold-accent">
            🎓
            <span className="hidden sm:inline">منصة التعلم</span>
          </Link>
          <div className="flex items-center gap-2">
            <NavLink to="/" className={navLinkClass}>الرئيسية</NavLink>
            <NavLink to="/courses" className={navLinkClass}>الدورات</NavLink>
            {isAuthenticated ? (
              <>
                <NavLink to="/dashboard" className={navLinkClass}>لوحة التحكم</NavLink>
                <button
                  onClick={logout}
                  className="bg-error-color/80 hover:bg-error-color text-white font-bold py-2 px-4 rounded-full transition-all duration-300 text-sm sm:text-base"
                >
                  تسجيل خروج
                </button>
              </>
            ) : (
              <>
                <NavLink to="/login" className={navLinkClass}>تسجيل دخول</NavLink>
                <NavLink to="/register" className="bg-gold-accent text-primary-black font-bold py-2 px-4 rounded-full hover:bg-yellow-300 transition-all duration-300 text-sm sm:text-base">
                  حساب جديد
                </NavLink>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
