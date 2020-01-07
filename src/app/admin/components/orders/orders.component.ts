import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/core/models/order/order.module';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  orders = [];
  displayedColumns: string[] = ['id', 'user', 'amount', 'actions'];

  ELEMENT_DATA: Order[] = [
    {id: 1, user: 'agili', amount:10},
  ];

  constructor() { }

  ngOnInit() {
    this.orders = this.ELEMENT_DATA;
  }

}
