import { IMerchant } from './merchant';

export interface IMenu {
  ownerId: IMerchant;
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
}
