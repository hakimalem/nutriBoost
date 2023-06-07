import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { Link } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { Loading } from './Loading';

const UserMenu = ({ name }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };
  const [userData = apiData, isLoading, error] = useFetch('/api/users/getMe');

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const { auth, setAuth } = useAuth();

  const logout = () => {
    setAuth(null);
    localStorage.removeItem('auth');
  };

  return (
    <div className="relative inline-block" ref={menuRef}>
      <button
        className="text-gray-800 font-semibold py-2 px-4 rounded inline-flex items-center"
        onClick={toggleMenu}
      >
        {isLoading ? <Loading /> : <span>{userData?.data?.name}</span>}
        <svg
          className="fill-current h-4 w-4 ml-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            d="M6 9l4 4 4-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-lg">
          <Link
            to="/wishlist"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            Wishlist
          </Link>
          <Link
            to="/settings"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            Settings
          </Link>
          <Link
            onClick={logout}
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            Logout
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
