import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit, OnDestroy {

@Input() product: any = null;

  constructor() { }

  ngOnDestroy(): void {
    console.log(this.product);
  }

  ngOnInit(): void {
  }

}
