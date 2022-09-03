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

    updateById(cod: number, nom_producto: string): Observable<any> {
        return this.http.put(`${this.baseURL}/products/${cod}`, `${this.baseURL}/products/${nom_producto}`);
    }

    deleteById(cod: number): Observable<any> {
        return this.http.delete(`${this.baseURL}/products/${cod}`);
    }

    

}