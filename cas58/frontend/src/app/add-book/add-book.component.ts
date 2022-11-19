import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import alertifyjs from 'alertifyjs'

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  constructor(private knjigeServis: BookService) { }

  ngOnInit(): void {
  }

  naziv: string;
  strane: string;

  dodaj(){
    this.knjigeServis.addBook(this.naziv, this.strane).subscribe(resp=>{
      //alert('Ok');
      if(resp['message']=='book added'){
        alertifyjs.success('Added');
      }
      else{
        alertifyjs.error('Error')
      }
    })
  }

}
