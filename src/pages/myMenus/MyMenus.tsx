import React, { useState, useEffect } from 'react';
import AppPage from '../../layouts/appPage/AppPage';
import FoodTable from '../../components/foodTable/FoodTable';
import { store } from '../../redux/store';

export default function MyMenus() {
  const state = store.getState();
  const merchant = state.merchant;
  const auth = state.auth;

  const [menus, setMenus] = useState([]);

  console.log('id', merchant.id);
  console.log('token', auth.token);

  useEffect(() => {
    fetch(`http://localhost:8000/menu/merchant`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${auth.token}`,
      },
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        return Promise.reject(response);
      })
      .then((data) => {
        // console.log('data', data);
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
