import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book';
import { OrderService } from '../order.service';
import aleritifyjs from 'alertifyjs'

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(private servis: OrderService) { }

  ngOnInit(): void {
    this.book = JSON.parse(localStorage.getItem('knjigaZaNarucivanje'));
  }

  book: Book;
  kolicina: string;

  naruci(){
    this.servis.dodajNarudzbinu(this.book.naziv, this.kolicina).subscribe(resp=>{
      aleritifyjs.success(resp['message'])
    })
  }

}
