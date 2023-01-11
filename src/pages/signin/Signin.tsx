import React from 'react';
import AppPage from '../../layouts/page/Page';
import { store } from '../../redux/store';
import { setToken } from '../../redux/auth';
import { setMerchant } from '../../redux/merchant';
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../../config';
import axios from 'axios';

export default function Signin() {
  const navigate = useNavigate();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;

    const email = (form[0] as HTMLInputElement).value;
    const password = (form[1] as HTMLInputElement).value;
    try {
      axios({
        method: 'POST',
        url: `${API_URL}/auth/signin`,
        data: {
          email,
          password,
        },
      }).then((response) => {
        if (response.status === 200) {
          alert('Login successful');
          store.dispatch(setMerchant(response.data.merchant));
          store.dispatch(setToken(response.data.accessToken));
          navigate('/');
        } else if (response.status === 403) {
          alert('Wrong email or password');
        }
      });
    } catch (error) {
      // handle error
    }
  };
  return (
    <AppPage>
      <div className="flex  flex-col items-center justify-center">
        <h1 className="p-8 text-xl">Signin</h1>
        <form
          onSubmit={(event) => {
            handleSubmit(event);
          }}
        >
          <div className="mb-6">
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              autoComplete="off"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="john.doe@company.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              autoComplete="password"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="•••••••••"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
          >
            Signin
          </button>
        </form>
        <div className="mt-3 flex w-full cursor-pointer flex-col items-start">
          <Link to={'/signup'}>
            <span className="text-xs hover:text-neutral-500">Signup</span>
          </Link>
        </div>
      </div>
    </AppPage>
  );
}
