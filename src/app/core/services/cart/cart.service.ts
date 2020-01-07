import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';
import { Product } from '../../models/product/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private products: Product[] = [];
  private cart = new BehaviorSubject<Product[]>([]);

  cart$ = this.cart.asObservable();

  constructor() { }

  addCart(product: Product) {
    let productFound = this.products.find(p => p.id === product.id);
    if(productFound === undefined) {
      product.amount = 1;
      this.products = [...this.products, product];
    }else {
      productFound.amount = productFound.amount +1;
    }
    
    this.cart.next(this.products);
  }
}
