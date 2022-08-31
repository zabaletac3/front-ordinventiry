import { Component, OnInit } from '@angular/core';
import { productsService } from '../../users/services/products.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  productsList: any[] = [];

  selectedProduct: any = {};

  constructor(
    private readonly productsService: productsService
  ) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.productsService.findAllProducts().subscribe({
      next: res => {
        console.log(res.data);
        this.productsList = res.data || [];
      }
    });
  }

}
