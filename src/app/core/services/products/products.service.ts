import { Injectable } from '@angular/core';

import { Product } from '../../models/product/product.model';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

 private URL_STORE = environment.url_api + '/products/';

  constructor(private http: HttpClient) {
  }

  getAllProducts() {
    return this.http.get<Product[]>(this.URL_STORE);
  }

  getProduct(id: string): Observable<Product> {
    return this.http.get<Product>(this.URL_STORE + id);
  }

  createProduct(product: Product) {
    return this.http.post(this.URL_STORE, product);
  }

  updateProduct(id: string, changes: Partial<Product>) {
    return this.http.put(this.URL_STORE + id, changes);
  }

  deleteProduct(id: string) {
    return this.http.delete(this.URL_STORE + id);
  }
}
