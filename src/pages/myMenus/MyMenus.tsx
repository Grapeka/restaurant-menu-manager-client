import React, { useState, useEffect } from 'react';
import AppPage from '../../layouts/appPage/AppPage';
import FoodTable from '../../components/foodTable/FoodTable';
import { store } from '../../redux/store';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../../config';
import axios from 'axios';

export default function MyMenus() {
  const navigate = useNavigate();
  const state = store.getState();
  const auth = state.auth;

  const [menus, setMenus] = useState([]);

  useEffect(() => {
    if (auth.token === '') {
      navigate('/signin');
    }
    try {
      axios({
        method: 'POST',
        url: `${API_URL}/menu/merchant`,
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      }).then((response) => {
        if (response.status === 200) {
          setMenus(response.data);
        } else {
          // handle error
        }
      });
    } catch (error) {
      // handle error
    }
  }, []);

  return (
    <AppPage>
      <FoodTable menus={menus} />
    </AppPage>
  );
}
