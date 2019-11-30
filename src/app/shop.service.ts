import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  url = '../assets/productDetail.json'
  constructor(private http:HttpClient) { }

  get_product(){
    return this.http.get(this.url)
  }

}
