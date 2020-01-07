import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products = [];
  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];

  constructor(private prodcutService: ProductsService) { }

  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts() {
    this.prodcutService.getAllProducts().
    subscribe(products => {
      this.products = products;
    });
  }

  deleteProduct(id: string) {
    this.prodcutService.deleteProduct(id).
    subscribe(
      result => {
        this.products = this.products.
        filter(p =>
          p.id !== id
        );
      },
      error => {
        console.log(error);
      }
    );
  }
}
