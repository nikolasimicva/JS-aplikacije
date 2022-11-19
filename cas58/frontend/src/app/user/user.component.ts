import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book.service';
import { Book } from '../models/book';
import { Order } from '../models/order';
import { User } from '../models/user';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private servis: BookService, private router: Router,
    private orderServis: OrderService) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('ulogovan'));
    this.servis.getBooksByUser(this.user.korisnicko_ime).subscribe((books: Book[])=>{
      this.books = books;
      this.books.sort((a: Book, b:Book)=>{
        return b.strane-a.strane
      })
      
    })
    this.orderServis.dohvatiNarudzbine().subscribe((orders: Order[])=>{
      this.myorders = orders;
    })

  }

  myorders: Order[] = []

  books: Book[] = []

  searchParam: string;
  searchBooks: Book[] = []
  searchActivated: boolean;
  user: User = {} as User;

  trazi(){
    this.searchActivated=true;
    this.servis.searchBooksByName(this.searchParam).subscribe((books: Book[])=>{
      this.searchBooks=books;
    })
  }

  dodaj(book){
    localStorage.setItem('knjiga', JSON.stringify(book));
    this.router.navigate(['/komentari'])
  }

  dodajKnjigu(){
    this.router.navigate(['/dodajknjigu']);
  }

  naruci(book){
    localStorage.setItem('knjigaZaNarucivanje', JSON.stringify(book));
    this.router.navigate(['/narucivanje']);
  }

  cancelOrder(order){
    this.orderServis.cancelOrder(order.kupac, order.knjiga).subscribe(resp=>{
      alert(resp['message'])
      this.orderServis.dohvatiNarudzbine().subscribe((orders: Order[])=>{
        this.myorders = orders;
      })
    })
  }

}
