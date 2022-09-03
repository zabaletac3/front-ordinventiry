import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit, OnDestroy {

  @Input() user: any = null;

  constructor() { }

  ngOnDestroy(): void {
    console.log(this.user);
  }

  ngOnInit(): void {
  }

}
