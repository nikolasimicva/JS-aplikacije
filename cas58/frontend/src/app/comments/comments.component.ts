import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../models/book';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  constructor(private servis: BookService) { }

  ngOnInit(): void {
    this.book = JSON.parse(localStorage.getItem('knjiga'));
  }

  book: Book = {} as Book;

  komentar: string;

  komentarisi(){
    this.servis.addComment(this.book.naziv, this.komentar).subscribe(resp=>{
      alert(resp['message'])
    });
  }

}
