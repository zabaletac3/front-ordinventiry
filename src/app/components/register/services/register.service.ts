
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { ReturnStatement, ThisReceiver } from '@angular/compiler';
import { AtrUser } from 'src/app/interfaces/register-form.interface';
import { catchError } from 'rxjs';
import { throwError as observableThrowError } from 'rxjs';
import { tap } from 'rxjs';



@Injectable({
    providedIn: 'root'
})
export class RegisterService {

    baseURL = environment.baseURL;

    constructor(
        private readonly http: HttpClient

    ) { }

    crearUser(formData: AtrUser) {

        return this.http.post(`${this.baseURL}/register`, formData)
        // .pipe(
        //     tap( ( resp: any ) => {
        //         console.log(resp);
        //         localStorage.setItem('token', resp.token)
        //     })
        // );
    }

    isRegister(): boolean {
        return !!localStorage.getItem('token')
    }

}