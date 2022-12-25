import React, { useState, useEffect } from 'react';
import AppPage from '../../layouts/appPage/AppPage';
import FoodTable from '../../components/foodTable/FoodTable';
import store from '../../redux/store';

export default function MyMenus() {
  const state = store.getState();
  const merchant = state.merchant;
  const token = state.auth;

  const [menus, setMenus] = useState([]);

  console.log(merchant);

  useEffect(() => {
    // post and pass token
    fetch(`http://localhost:8000/menu/merchant`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        merchantId: merchant.id,
      }),
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
      })
      .then((data) => {
        console.log(data);

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
