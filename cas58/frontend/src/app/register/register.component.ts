import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private servis: UserService) { }

  ngOnInit(): void {
  }

  ime: string;
  prezime: string;
  kor_ime: string;
  lozinka: string;

  dodaj(){
    this.servis.registracija(this.ime, this.prezime, this.kor_ime, this.lozinka).subscribe(resp=>{
      if(resp['message']='ok'){
        alert('ok')
      }
    })
  }

}
