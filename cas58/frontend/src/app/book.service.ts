import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  uri = 'http://localhost:4000'

  getBooksByUser(writer){
    const podaci = {
      pisac: writer
    }

    //return this.http.post(`${this.uri}/books/getBooksByUser`, podaci);

    return this.http.get(`${this.uri}/books/getBooksByUser/${writer}`);
  }

  searchBooksByName(name){
    const data={
      name: name
    }

    return this.http.post(`${this.uri}/books/searchBooksByName`, data);
  }

  addComment(bookName, comment){
    
    const data={
      bookName: bookName, 
      comment: comment
    }

    return this.http.post(`${this.uri}/books/addComment`, data);
  }

  addBook(bookName, pages){
    let user = JSON.parse(localStorage.getItem('ulogovan'));
    const data={
      naziv: bookName,
      strane: parseInt(pages),
      pisac: user.korisnicko_ime,
      komentari: []
    }

    return this.http.post(`${this.uri}/books/addBook`, data)
  }
}
