import { Units } from './card';

export interface Product {
  id?: number;
  image: string;
  name: string;
  unit: Units;
  price: number;
}
