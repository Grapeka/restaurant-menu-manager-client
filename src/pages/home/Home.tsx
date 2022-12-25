import React, { useState, useEffect } from 'react';
import AppPage from '../../layouts/appPage/AppPage';
import { IMenu } from '../../types/menu';
import { menu } from '../../mocks/menu';
import FoodTable from '../../components/foodTable/FoodTable';
import store from '../../redux/store';

type Props = {};

const body = (menu: IMenu, index: number) => {
  return (
    <tr
      className="border-b bg-white dark:border-gray-700 dark:bg-gray-800"
      key={index}
    >
      <th
        scope="row"
        className="whitespace-nowrap py-4 px-6 font-medium text-gray-900 dark:text-white"
      >
        {menu.name}
      </th>
      <td className="py-4 px-6">{menu.ownerId}</td>
      <td className="py-4 px-6">{menu.category}</td>
      <td className="py-4 px-6">{menu.price}$</td>
      <td className="cursor-pointer py-4 px-6">
        <img
          className="h-10 w-10 rounded"
          src={
            menu.image !== ''
              ? menu.image
              : 'https://www.eatthis.com/wp-content/uploads/sites/4/2020/12/unhealthiest-foods-planet.jpg?quality=82&strip=1'
          }
          alt="Food"
        />
      </td>
    </tr>
  );
};

export default function Home(props: Props) {
  const state = store.getState();

  const merchant = state.merchant;
  const token = state.auth;

  // console.log(merchant);
  // console.log(token);

  const [menus, setMenus] = useState<IMenu[]>([]);

  useEffect(() => {
    fetch(`http://localhost:8000/menu`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          // handle other status codes
        }
      })
      .then((data) => {
        setMenus(data);
      })
      .catch((error) => {
        // handle fetch error
      });
  }, []);

  return (
    <AppPage>
      <FoodTable menus={menus} />
    </AppPage>
  );
}
