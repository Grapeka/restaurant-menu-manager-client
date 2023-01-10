import React, { useState } from 'react';
import AppPage from '../../layouts/appPage/AppPage';
import { API_URL } from '../../config';
import { store } from '../../redux/store';
import axios from 'axios';
import { uploadImage } from '../../utils/uploadImage';

export default function Create() {
  const state = store.getState();
  const auth = state.auth;
  const merchant = state.merchant;
  const [image, setImage] = useState('');
  const [uploadFile, setUploadFile] = useState<File | null>(null);
  const MAX_FILE_SIZE = 5 * 1024 * 1024;

  const handleFileChange = (event: any): Boolean => {
    const file = event.target.files[0];
    console.log(file);

    if (file.type !== 'image/png' && file.type !== 'image/jpeg') {
      alert('Only PNG and JPG files are allowed');
      return false;
    }
    if (file.size > MAX_FILE_SIZE) {
      alert('File size should be less than or equal to 5 MB');
      return false;
    }
    const img = document.createElement('img');
    img.src = URL.createObjectURL(file);
    setImage(img.src);
    return true;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;

    const nameVal = (form[1] as HTMLInputElement).value;
    const priceVal = (form[2] as HTMLInputElement).value;
    const categoryVal = (form[3] as HTMLInputElement).value;
    const descriptionVal = (form[4] as HTMLInputElement).value;

    const imageFilename = await uploadImage(uploadFile);

    axios({
      method: 'POST',
      url: `${API_URL}/menu`,
      headers: {
        authorization: `Bearer ${auth.token}`,
      },
      data: {
        name: nameVal,
        price: parseInt(priceVal),
        category: categoryVal,
        description: descriptionVal,
        ownerId: merchant.id,
        image: imageFilename,
      },
    })
      .then((res) => {
        console.log(res.data);
        alert('Menu created successfully');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <AppPage>
      <div className="relative mt-10 h-full w-full overflow-x-auto">
        <div className="flex w-full items-center justify-center ">
          <form className="w-2/4 pb-8" onSubmit={handleSubmit}>
            <div
              style={{ height: '300px' }}
              className={`flex w-full items-center justify-center pb-5 ${
                image === '' ? 'hidden' : ''
              }`}
            >
              <img
                className={`flex h-full max-w-lg items-center justify-center`}
                src={image}
                alt="Image description"
              />
            </div>
            <div
              style={{ height: '300px' }}
              className={`w-full items-center justify-center ${
                image !== '' ? 'hidden' : ''
              }`}
            >
              <label
                htmlFor="dropzone-file"
                className="dark:hover:bg-bray-800 flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    aria-hidden="true"
                    className="mb-3 h-10 w-10 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">
                      Click to upload menu image
                    </span>
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    PNG, or JPG max size of 5MB
                  </p>
                </div>
                <input
                  id="dropzone-file"
                  type="file"
                  className="hidden"
                  onChange={(e) => {
                    const isPass = handleFileChange(e);
                    if (isPass && e.target.files !== null) {
                      setUploadFile(e.target.files[0]);
                    }
                  }}
                />
              </label>
            </div>

            <div className="mb-6">
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Menu name
              </label>
              <input
                type="text"
                id="name"
                className="dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="Name..."
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="price"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Price
              </label>
              <input
                type="text"
                id="price"
                className="dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="Price..."
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="Category"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Category
              </label>
              <select
                id="Category"
                required
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              >
                <option value="Main dishes">Main dishes</option>
                <option value="Appetizers">Appetizers</option>
                <option value="Desserts">Desserts</option>
                <option value="Beverages">Beverages</option>
                <option value="Vegetarian">Vegetarian</option>
                <option value="Kids">Kids</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="description"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Description
              </label>
              <textarea
                id="description"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="Description..."
              />
            </div>
            <button
              type="submit"
              className="mt-6 rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Create new menu
            </button>
          </form>
        </div>
      </div>
    </AppPage>
  );
}
