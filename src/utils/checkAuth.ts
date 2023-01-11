import axios from 'axios';
import { API_URL } from '../config';

export const checkAuth = async (token: string): Promise<Boolean> => {
  try {
    axios({
      method: 'POST',
      url: `${API_URL}/auth/user`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return true;
  } catch (error) {
    console.log('err', error);
    return false;
  }
};
