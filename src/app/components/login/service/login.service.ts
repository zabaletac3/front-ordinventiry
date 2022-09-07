
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { LocalizedString, ReturnStatement, ThisReceiver, Token } from '@angular/compiler';
import { AtrUser } from 'src/app/interfaces/register-form.interface';
import { catchError } from 'rxjs';
import { throwError as observableThrowError } from 'rxjs';
import { AtrLogin } from 'src/app/interfaces/interface-login.interface';
import { tap } from 'rxjs';
import { UsersService } from '../../users/services/users.service';
import { Router } from '@angular/router';


@Injectable({
    providedIn: 'root'
})

export class LoginService {

    baseURL = environment.baseURL;

    // private token: string = null;



    constructor(
        private readonly http: HttpClient,
        private router: Router

    ) { }



    login(formData: AtrLogin) {

        return this.http.post(`${this.baseURL}/login`, formData)
        // .pipe(
        //     tap((res: any) => {
        //         localStorage.setItem('token', res.token)
        //     })
        // )
    }

    logout() {
        localStorage.removeItem('token');
        this.router.navigateByUrl('/login')
    }




    isLogged(): boolean {
        return !!localStorage.getItem('token')
    }






}