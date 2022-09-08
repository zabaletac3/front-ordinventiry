import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/service/login.service';
import { RegisterService } from '../register/services/register.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    public loginService: LoginService,
    public registerService: RegisterService
  ) { }

  ngOnInit(): void {
  }

}
