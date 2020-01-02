import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/internal/operators/map';
import { Observable } from 'rxjs';

import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  queryUrl: string = '?search=';
  baseUrl:string = "http://localhost:3000";
  constructor(private http:HttpClient) { }
  getProductList(){
    return this.http.get(this.baseUrl + '/product');
  }


  AddProductList(body) {

    const httpOptions1 = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
        'Accept': '*/*',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers' : '*', 
        'responseType': 'json',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
       
        
      }), 
   
    };
  
    return this.http.post( this.baseUrl + '/product',body, httpOptions1)
      .pipe(map((response => {
        return response;
      })));
  }

  AddToCart(body) {

    const httpOptions1 = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
        'Accept': '*/*',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers' : '*', 
        'responseType': 'json',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
       
        
      }), 
   
    };
  
    return this.http.post( this.baseUrl + '/cart',body, httpOptions1)
      .pipe(map((response => {
        return response;
      })));
  }
  getCartList(){
    return this.http.get(this.baseUrl + '/cart');
  }
}
