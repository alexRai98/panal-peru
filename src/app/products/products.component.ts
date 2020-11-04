import { Component, OnInit } from '@angular/core';
import { Units } from '../interfaces/card';
import { Product } from '../interfaces/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
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
  ];

  addToCard(id: number): void {
    console.log(id);
  }

  constructor() {}

  ngOnInit(): void {}
}
