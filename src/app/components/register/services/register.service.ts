
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { ReturnStatement, ThisReceiver } from '@angular/compiler';
import { AtrUser } from 'src/app/interfaces/register-form.interface';



@Injectable({
    providedIn: 'root'
})
export class RegisterService {

    baseURL = environment.baseURL;

    constructor(
        private readonly http: HttpClient

    ) { }
    // form1
    // create(model: any ): Observable<any>{
    // return this.http.post(`${this.baseURL}/register/`,`${model}`);
    // }

    // addNewUser():Observable<void>{}


    crearUser( formData: AtrUser ) {

    return this.http.post(`${this.baseURL}/register`, formData);

    }

}