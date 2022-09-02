import { HttpClient } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, NgForm } from "@angular/forms"
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { __values } from 'tslib';
import { RegisterService } from './services/register.service';

interface registerForm {
  "username": string,
  "identificacion": number,
  "contrasena": string,
  "role": string
}


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  userList: any[] = [];

  model = {
  username: '',
  identificacion: '',
  contrasena: '',
  role: ''
  }

  constructor(
    private readonly registerServices: RegisterService
  ) { }

  ngOnInit(): void {
  }

  createUser(model: any): void {
    this.registerServices.create(model).subscribe({
      next: res => {
        console.log(res.data);
        console.log(this.model);
      }
    })
    
  }

  // createUser(registerForm: any) {
  //   this.registerServices.create(registerForm).subscribe({
  //     next: res => {
  //       console.log(res.data);
  //       console.log(registerForm);
  //     }
  //   })
  //   this.registerServices.create(registerForm)
  // }



}
