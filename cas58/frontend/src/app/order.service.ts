import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  uri = 'http://localhost:4000'

  dodajNarudzbinu(nazivKnjige, kolicina){
    let user = JSON.parse(localStorage.getItem('ulogovan'));
    const data={
      knjiga: nazivKnjige,
      kolicina: parseInt(kolicina),
      kupac: user.korisnicko_ime,
      status: 'kreirana'
    }

    return this.http.post(`${this.uri}/orders/addOrder`, data);
  }

  dohvatiNarudzbine(){
    let user = JSON.parse(localStorage.getItem('ulogovan'));
    const data={
      korisnicko_ime: user.korisnicko_ime
    }

    return this.http.post(`${this.uri}/orders/getAllOrdersByUser`, data)
  }

  cancelOrder(kupac, knjiga){
    const data={
      kupac: kupac,
      knjiga: knjiga
    }
    return this.http.post(`${this.uri}/orders/cancelOrder`, data)
  }

  getAllOrders(){
    return this.http.get(`${this.uri}/orders/getAllOrders`);
  }

  prihvati(kupac, knjiga){
    const data={
      kupac: kupac,
      knjiga: knjiga
    }
    return this.http.post(`${this.uri}/orders/approveOrder`, data)
  }
}
