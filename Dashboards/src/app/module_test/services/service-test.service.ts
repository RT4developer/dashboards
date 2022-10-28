import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceTestService {


  constructor( private http:HttpClient) { }


  getRest(url: string):Observable<Response> {
    return this.http.get<Response>(url);
  }

  postRest(url: string, body:JSON): Observable<Response>{
    //let headers = new HttpHeaders;
    //headers = headers.set('Content-Type', 'application/json').set('mode','no-cors') ;
    return this.http.post<Response>(url,body);
  }
  post(url:string, raw:any){
    return this.http.post(url,raw);
  }
}
