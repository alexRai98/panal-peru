import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
 
  addToCard(id: number): void {
    console.log(id);
  }

  constructor(private productService: ProductService) {}

  
  products = this.productService.getAllProducts();
  
  ngOnInit(): void {

  }
}
