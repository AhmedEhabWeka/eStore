import {HttpClient}  from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
Observable

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _HttpClient:HttpClient) { }
  getProducts(parameter:string):Observable<any>{
    return this._HttpClient.get(`https://test-7bba2-default-rtdb.firebaseio.com/${parameter}.json`)
  }
  getProductDetails(gender:string,id:number):Observable<any>{
    return this._HttpClient.get(`https://test-7bba2-default-rtdb.firebaseio.com/${gender}/${id}.json`)
  }
  
}
