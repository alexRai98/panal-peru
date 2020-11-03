import { Units } from './card';

export interface Product {
  $key?: string;
  name: string;
  unit: Units;
  price: number;
}
