import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class PostService {
  _url = 'https://jsonplaceholder.typicode.com/posts'

  constructor(
    private http: HttpClient
  ) {

    console.log('Servicio de Post')
  }
  getPost() {
    console.log("eSTOY ACA")
    let header = new HttpHeaders()
    .set('Type-content', 'aplication/json')
    return this.http.get(this._url,{
      headers: header
    });
  }
}
