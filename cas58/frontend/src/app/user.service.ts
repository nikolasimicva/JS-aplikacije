import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  uri='http://localhost:4000'

  prijava(kor_ime, lozinka){
    const podaci={
      korisnicko_ime: kor_ime,
      lozinka: lozinka
    }

    return this.http.post(`${this.uri}/users/login`, podaci);
  }

  registracija(ime, prezime, kor_ime, lozinka){
    const podaci={
      ime: ime,
      prezime: prezime,
      korisnicko_ime: kor_ime,
      lozinka: lozinka
    }
    return this.http.post(`${this.uri}/users/register`, podaci);
  }

}
