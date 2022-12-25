import React, { useState, useEffect } from 'react';
import { IMenu } from '../../types/menu';
import { store } from '../../redux/store';

type Props = {
  menus: IMenu[];
};

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

export default function FoodTable(props: Props) {
  return (
    <div className="relative mt-6 w-5/6 overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
        <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-6">
              Menu name
            </th>
            <th scope="col" className="py-3 px-6">
              owner id
            </th>
            <th scope="col" className="py-3 px-6">
              Category
            </th>
            <th scope="col" className="py-3 px-6">
              Price
            </th>
            <th scope="col" className="py-3 px-6">
              Image
            </th>
          </tr>
        </thead>
        <tbody>
          {props.menus.map((menu, index) => {
            return body(menu, index);
          })}
        </tbody>
      </table>
    </div>
  );
}
