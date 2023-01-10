import axios from 'axios';
import { API_URL } from '../config';

export const uploadImage = async (file: File | null): Promise<string> => {
  if (file) {
    const formData = new FormData();
    formData.append('file', file);
    try {
      const response = await axios({
        method: 'POST',
        url: `${API_URL}/file/upload`,
        data: formData,
      });
      return response.data.path;
    } catch (error) {
      return Promise.reject(error);
    }
  }
  return '';
};
