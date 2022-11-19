import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userServis: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  kor_ime: string;
  lozinka: string;

  prijava(){
    this.userServis.prijava(this.kor_ime, this.lozinka).subscribe((user: User)=>{
      if(user){
        //alert('ok');
        localStorage.setItem('ulogovan', JSON.stringify(user));
        if(user.korisnicko_ime=='admin'){
          this.router.navigate(['/admin']);
        }
        else this.router.navigate(['/user'])
      }
      else{
        alert('bad data')
      }
    })
  }

}
