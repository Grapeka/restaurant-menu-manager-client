import React from 'react';
import { IMenu } from '../../types/menu';

type Props = {
  menu: IMenu | null;
  setMenu: React.Dispatch<React.SetStateAction<IMenu | null>>;
};

export default function FoodImageModal(props: Props) {
  return (
    <div
      id="popup-modal"
      tabIndex={-1}
      className={`absolute flex h-full w-full justify-center overflow-y-auto overflow-x-hidden p-4 md:inset-0 md:h-full ${
        props.menu !== null ? 'flex' : 'hidden'
      }`}
    >
      <div className="fixed h-full w-full max-w-md md:h-auto">
        <div className="relative rounded-lg bg-white shadow dark:bg-gray-700">
          <figure className="max-w-lg">
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://www.eatthis.com/wp-content/uploads/sites/4/2020/12/unhealthiest-foods-planet.jpg?quality=82&strip=1"
              alt="image description"
            />
            <figcaption className="mt-2 text-center text-sm text-gray-500 dark:text-gray-400">
              Image caption
            </figcaption>
          </figure>
          <button
            type="button"
            className="absolute top-3 right-2.5 ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white"
            data-modal-toggle="popup-modal"
          >
            <span className="sr-only">Close modal</span>
          </button>
          <div className="p-6 text-center">
            <button
              onClick={() => {
                props.setMenu(null);
              }}
              data-modal-toggle="popup-modal"
              type="button"
              className="mr-2 inline-flex items-center rounded-lg bg-red-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:focus:ring-red-800"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
