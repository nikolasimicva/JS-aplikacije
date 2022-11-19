import { Component, OnInit } from '@angular/core';
import { Order } from '../models/order';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private orderServis: OrderService) { }

  ngOnInit(): void {
    this.orderServis.getAllOrders().subscribe((orders: Order[])=>{
      this.allOrders = orders;
    })
  }

  allOrders: Order[]

  prihvati(order){
    this.orderServis.prihvati(order.kupac, order.knjiga).subscribe(resp=>{
      alert(resp['message'])
    })
  }

}
