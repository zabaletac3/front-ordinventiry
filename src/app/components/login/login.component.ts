import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Routes } from '@angular/router';
import { AtrLogin } from 'src/app/interfaces/interface-login.interface';
import { AtrUser } from 'src/app/interfaces/register-form.interface';
import Swal from 'sweetalert2';
import { LoginService } from './service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    username: ['', Validators.required],
    contrasena: ['', Validators.required],
  });
  Routes: any;

  constructor( 
      private route:ActivatedRoute,
      private fb: FormBuilder,
      private loginService: LoginService
      ) { }

  ngOnInit(): void {
  }

  login() {

    const { username, contrasena } = this.loginForm.value;

    const atrLogin: AtrLogin = { username, contrasena }

    this.loginService.login({ username, contrasena })
      .subscribe({
        next: res => {
          console.log(res);
        }, error: Error => {
          console.log(Error.error.msg);
          Swal.fire({
            icon: 'error',
            text: Error.error.msg
          })
        }
      })


    // console.log(this.loginForm.value);

    // this.Routes.navigatorByUrl('/')
  }

}
