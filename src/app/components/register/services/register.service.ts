
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FormsModule }   from '@angular/forms';


@Injectable({
    providedIn: 'root'
})
export class RegisterService {

    baseURL = environment.baseURL;

    constructor(
        private http:HttpClient
    ) { }

        createUser(body: any){
            return this.http.post(`${this.baseURL}/register`, `${body}`);
        }


}