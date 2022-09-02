
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { ReturnStatement } from '@angular/compiler';


@Injectable({
    providedIn: 'root'
})
export class RegisterService {

    baseURL = environment.baseURL;

    constructor(
        private readonly http: HttpClient
    ) { }

    create(model: any ): Observable<any>{
    return this.http.post(`${this.baseURL}/register/`,`${model}`);
    }

    // addNewUser():Observable<void>{}


}