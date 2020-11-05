import { Injectable } from '@angular/core';
import { Units } from '../interfaces/card';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [
    {
      id: 1,
      name: 'Rocoto',
      image: 'assets/images_products/rocoto.jpg',
      price: 0.5,
      unit: Units.unidad,
    },
    {
      id: 2,
      name: 'Beterraga',
      image: 'assets/images_products/beterraga.jpg',
      price: 1.5,
      unit: Units.kilogramo,
    },
    {
      id: 3,
      name: 'Caygua',
      image: 'assets/images_products/caigua.jpg',
      price: 0.5,
      unit: Units.unidad,
    },
    {
      id: 4,
      name: 'Cebolla china',
      image: 'assets/images_products/cebolla_china.png',
      price: 2,
      unit: Units.ato,
    },
    {
      id: 5,
      name: 'Fresa',
      image: 'assets/images_products/fresa.jpg',
      price: 6,
      unit: Units.kilogramo,
    },
    {
      id: 6,
      name: 'Huacatay',
      image: 'assets/images_products/huacatay.jpg',
      price: 2,
      unit: Units.ato,
    },
    {
      id: 7,
      name: 'Oyuco',
      image: 'assets/images_products/oyuco.png',
      price: 4,
      unit: Units.kilogramo,
    },
    {
      id: 8,
      name: 'Uva Verde',
      image: 'assets/images_products/uva_verde.png',
      price: 3,
      unit: Units.kilogramo,
    },
    {
      id: 9,
      name: 'Pepinillo',
      image: 'assets/images_products/pepinillo.jpg',
      price: 1,
      unit: Units.unidad,
    }
  ];
  constructor() { }

  getAllProducts() {
    return this.products;
  }

  getProduct(id: number){
    return this.products.find(product => product.id === id);
  }

}
