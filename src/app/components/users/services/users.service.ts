import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseURL = environment.baseURL;

  constructor( 
    private readonly http: HttpClient
  ) { }

  findAllUsers(): Observable<any>{
    return this.http.get(`${this.baseURL}/users`);
  }

  // updateById(): Observable<any>{
  //   return this.http.patch(`${this.baseURL}/users/${id}`, editData)
  // }

  deleteById(id: number): Observable<any>{
    return this.http.delete(`${this.baseURL}/users/${id}`);
  }

  

} 
