import { useEffect, useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import axios from 'axios';
import { wilayas } from '../data/data';
import { useFetch } from '../hooks/useFetch';

export const Settings = () => {
  const { auth, setAuth } = useAuth();

  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [address, setAddress] = useState(null);
  const [city, setCity] = useState(null);
  const [state, setState] = useState(null);
  const [password, setPassword] = useState('2123231213');
  const [profilePicture, setProfilePicture] = useState(null);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios('/api/users/getMe', {
          headers: {
            Authorization: 'Bearer ' + auth?.token, //the token is a variable which holds the token
            'Content-Type': 'application/json',
          },
        });

        setName(data?.data?.name);
        setAddress(data?.data?.address);
        setCity(data?.data?.city);
        setEmail(data?.data?.email);
        setProfilePicture(data?.profileImg);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        '/api/users/updateMe',
        {
          name,
          address,
          city,
          state,
          email,
          profileImg: profilePicture,
        },
        {
          headers: {
            Authorization: 'Bearer ' + auth?.token, //the token is a variable which holds the token
            'Content-Type': 'application/json',
          },
          // withCredentials: true,
        }
      );

      console.log(response?.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="mx-auto flex min-h-screen items-center px-52">
      <div className="flex items-center flex- justify-center w-full bg-gray-">
        <label className="text-sm text-text-gray" htmlFor="profilePicture">
          <img
            src={profilePicture}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover cursor-pointer"
          />
        </label>
        <input
          type="file"
          id="profilePicture"
          className="sr-only"
          onChange={(e) => setProfilePicture(e.target.files[0])}
        />
      </div>
      <div>
        <div className="flex justify-between">
          <h1 className="text-xl font-bold mt-4 mb-2">Settings</h1>
          <button
            onClick={() => {
              setDisabled(!disabled);
            }}
          >
            Edit
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="text-sm text-text-gray" htmlFor="name">
              Name
            </label>
            <input
              disabled={disabled}
              className={`${
                disabled ? 'bg-card-gray text-text-gray' : ''
              } focus:outline-none border-text-gray border p-3 rounded-sm w-full`}
              id="name"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="text-sm text-text-gray" htmlFor="email">
              Email
            </label>
            <input
              disabled={disabled}
              className={`${
                disabled ? 'bg-card-gray text-text-gray' : ''
              } focus:outline-none border-text-gray border p-3 rounded-sm w-full`}
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="text-sm text-text-gray" htmlFor="address">
              Address
            </label>
            <input
              disabled={disabled}
              className={`${
                disabled ? 'bg-card-gray text-text-gray' : ''
              } focus:outline-none border-text-gray border p-3 rounded-sm w-full`}
              id="address"
              type="text"
              placeholder="Enter your address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="flex mb-4 -mx-2">
            <div className="w-1/2 px-2">
              <label className=" text-sm text-text-gray" htmlFor="city">
                City
              </label>
              <input
                disabled={disabled}
                className={`${
                  disabled ? 'bg-card-gray text-text-gray' : ''
                } focus:outline-none border-text-gray border p-3 rounded-sm w-full`}
                id="city"
                type="text"
                placeholder="Enter your city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div className="w-1/2 px-2">
              <label className=" text-sm text-text-gray" htmlFor="state">
                State
              </label>
              <select
                className={`${
                  disabled ? 'bg-card-gray text-text-gray' : ''
                } focus:outline-none border-text-gray border p-3 rounded-sm w-full`}
                id="state"
                value={state}
                onChange={(e) => setState(e.target.value)}
                disabled={disabled}
              >
                {wilayas.map((wilaya) => (
                  <option value={wilaya.label}>{wilaya.label}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="w-full md:w-1/2 px-2 mb-6 md:mb-0">
              <label className="text-sm text-text-gray" htmlFor="password">
                Password
              </label>
              <input
                disabled={disabled}
                className={`${
                  disabled ? 'bg-card-gray text-text-gray' : ''
                } focus:outline-none border-text-gray border p-3 rounded-sm w-full`}
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="flex items-center justify-between mt-6">
            <button
              className="h-full  bg-primary hover:bg-green-400 active:bg-green-500 text-white font-poppinsBold py-2 px-4 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="submit"
              onClick={handleSubmit}
            >
              Save Changes
            </button>
            {/* {message && <p className="text-gray-700 font-bold">{message}</p>} */}
          </div>
        </form>
      </div>
    </div>
  );
};
