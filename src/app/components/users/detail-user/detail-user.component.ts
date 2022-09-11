import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.css']
})
export class DetailUserComponent implements OnInit, OnDestroy {

  @Input() user: any = null;

  constructor(private readonly userService: UsersService) { }
  
  ngOnDestroy(): void {
    console.log(this.user); 
  }

  ngOnInit(): void {
  }

}
