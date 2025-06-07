import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http:HttpClient) { }

  getAllProduts() {
    return this.http.get(`https://api.everrest.educata.dev/shop/products/id/`)
  }
}
