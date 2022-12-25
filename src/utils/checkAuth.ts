import { store } from '../redux/store';

const state = store.getState();

export function checkAuth(): boolean {
  if (state.auth) {
    return true;
  }
  return false;
}
