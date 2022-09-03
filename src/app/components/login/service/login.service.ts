
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { ReturnStatement, ThisReceiver } from '@angular/compiler';
import { AtrUser } from 'src/app/interfaces/register-form.interface';
import { catchError } from 'rxjs';
import { throwError as observableThrowError } from 'rxjs';
import { AtrLogin } from 'src/app/interfaces/interface-login.interface';


@Injectable({
    providedIn: 'root'
})

export class LoginService {

    baseURL = environment.baseURL;

    constructor(
        private readonly http: HttpClient

    ) { }

    login(formData: AtrLogin ) {

        return this.http.post(`${this.baseURL}/login`, formData)


    }



}