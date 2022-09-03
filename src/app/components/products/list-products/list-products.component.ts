import { Component, OnInit } from '@angular/core';
import { productsService } from '../services/products.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  productsList: any[] = [];

  selectedProduct: any = {};

  productsInComprobante: any[] = [];

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

  detailProduct(product: any) {
    console.log(product);
    this.selectedProduct = product;
  }

  showAlertDeleteProduct(productCod: number) {
    Swal.fire({
      title: 'Está seguro de borrar el Producto',
      showDenyButton: true,
      confirmButtonText: 'Sí',
      denyButtonText: `Cancelar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.deleteProduct(productCod);
      }
    });
  }

  deleteProduct(cod: number) {
    this.productsService.deleteById(cod).subscribe({
      next: res => {
        console.log(res.data);
        Swal.fire(`${res.message}`, '', 'info');
        this.findAll();
      }
    });
  }

  onSelectProduct($event, product: any){
    const isCheck = $event.currentTarget.checked;
    if(isCheck) this.productsInComprobante.push(product);
    else {
      this.productsInComprobante = this.productsInComprobante.filter(prd => prd.cod != product.cod);
    }
  }

  onSolicitar(){
    console.log(this.productsInComprobante);

    // condición o función que guarde un comprobante en la base de datos, llamando a el service 

  }

}
