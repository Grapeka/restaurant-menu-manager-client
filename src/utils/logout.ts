import { store } from '../redux/store';
import { setToken } from '../redux/auth';
import { setMerchant } from '../redux/merchant';
import { IMerchant } from '../types/merchant';

export const logout = (): void => {
  store.dispatch(setToken(''));
  store.dispatch(
    setMerchant({
      id: '',
      name: '',
      email: '',
      password: '',
      facebook: '',
      instagram: '',
    } as IMerchant)
  );
};
