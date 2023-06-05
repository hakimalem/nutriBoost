import logo from '../../assets/logoNavbar.svg';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useContext, useEffect, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';

export function Navbar2() {
  const [navbar, setNavbar] = useState(false);
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState('');
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== '/products/search') {
      setSearchValue('');
    }
  }, [location]);
  return (
    <nav className="w-full bg-whte sticky shadow-xl top-0 z-10 bg-transparent backdrop-blur">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link to="/">
              <img src={logo} className="w-40" />
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0  ${
              navbar ? 'block' : 'hidden'
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (searchValue)
                      navigate(`/products/search?query=${searchValue}`);
                  }}
                >
                  <input
                    type="search"
                    id="default-search"
                    class="block focus:outline-none  w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary focus:border-primary "
                    placeholder="Search ..."
                    value={searchValue}
                    onChange={(e) => {
                      setSearchValue(e.target.value);
                    }}
                    required
                  />
                  <button
                    type="submit"
                    className="text-white absolute right-2.5 bottom-2.5 bg-primary bg-opacity-85 hover:bg-opacity-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Search
                  </button>
                </form>
              </div>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? 'text-white block bg-gray-700 duration-200 px-2 py-2  rounded-md  scale-105'
                    : 'text-gray-600 block hover:text-white hover:bg-gray-700 rounded-md duration-200 px-2 py-2   hover:scale-105'
                }
                to="/"
              >
                <li>Home</li>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? 'text-white block bg-gray-700 duration-200 px-2 py-2  rounded-md  scale-105'
                    : 'text-gray-600 block hover:text-white hover:bg-gray-700 rounded-md duration-200 px-2 py-2   hover:scale-105'
                }
                to="/products"
              >
                <li>Shop</li>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? 'text-white block bg-gray-700 duration-200 px-2 py-2  rounded-md  scale-105'
                    : 'text-gray-600 block hover:text-white hover:bg-gray-700 rounded-md duration-200 px-2 py-2   hover:scale-105'
                }
                to="/about"
              >
                <li>About US</li>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? 'text-white block bg-gray-700 duration-200 px-2 py-2  rounded-md  scale-105'
                    : 'text-gray-600 block hover:text-white hover:bg-gray-700 rounded-md duration-200 px-2 py-2   hover:scale-105'
                }
                to="/contact"
              >
                <li>Contact US</li>
              </NavLink>
              <Link
                to="/login"
                className="px-3 py-2 rounded-md font-semibold hover:text-white hover:bg-primary duration-200 border border-primary text-primary"
              >
                Log in
              </Link>

              <Link to="/cart">
                <div className="text-2xl bg-primary bg-opacity-90 p-2 rounded-lg text-white hover:scale-110 duration-150 hover:rotate-12 cursor-pointer">
                  <AiOutlineShoppingCart />
                </div>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
