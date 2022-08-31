import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
    providedIn: 'root'
})
export class productsService {

    baseURL = environment.baseURL;

    constructor(
        private readonly http: HttpClient
    ) { }

    findAllProducts(): Observable<any> {
        return this.http.get(`${this.baseURL}/products`);
    }

    // updateById(): Observable<any> {
    //     return this.http.put(`${this.baseURL}/products/${cod}`);
    // }

    deleteById(cod: number): Observable<any> {
        return this.http.delete(`${this.baseURL}/products/${cod}`);
    }

}