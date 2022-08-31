import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.css']
})
export class DetailUserComponent implements OnInit, OnDestroy {

  @Input() user: any = null;

  constructor() { }
  
  ngOnDestroy(): void {
    console.log(this.user);
  }

  ngOnInit(): void {
  }

}
