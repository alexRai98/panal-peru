import { Component, Input, Output,EventEmitter } from '@angular/core';
import { Product } from '../interfaces/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product: Product;
  @Output() productAddCard: EventEmitter<any> = new EventEmitter();

  addCard() {
    console.log('añadir al carrito');
    this.productAddCard.emit(this.product.id);

  }
}
