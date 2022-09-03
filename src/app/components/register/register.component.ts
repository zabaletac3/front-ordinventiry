import { HttpClient } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, NgForm } from "@angular/forms"
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { AtrUser } from 'src/app/interfaces/register-form.interface';
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


   

  // Form1
  // model = {
  // username: '',
  // identificacion: '',
  // contrasena: '',
  // role: ''
  // }

  registerForm = this.fb.group({
    username: [''],
    identificacion: [''],
    contrasena: [''],
    role: [''],
  });

  constructor(
    private fb: FormBuilder,
    private registerServices: RegisterService,
  ) { }

  ngOnInit(): void {
  }




  crearUser() {

    const { username, identificacion, contrasena, role } = this.registerForm.value; 

    const atrUser: AtrUser = { username, identificacion, contrasena, role }

    console.log(this.registerForm.value);

    this.registerServices.crearUser( { username, identificacion, contrasena, role } )
      .subscribe({
        next: res => {
            console.log('Usuario creado');
            console.log(res);
          }, error: error => {
            console.log(error);
          }
      })
      // .subscribe(res => {
      //   console.log('Usuario creado');
      //   console.log(res);
      // }, (err) => (err) )
  }




  // form1
  // createUser(model: any): void {
  //   this.registerServices.create(model).subscribe({
  //     next: res => {
  //       console.log(res.data);
  //       console.log(this.model);
  //     }
  //   })
    
  // }

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
