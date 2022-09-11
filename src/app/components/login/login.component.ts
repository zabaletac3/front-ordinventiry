import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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


  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  login() {

    const { username, contrasena } = this.loginForm.value;

    // const atrLogin: AtrLogin = { username, contrasena }

    this.loginService.login({ username, contrasena })
      .subscribe({
        next: (res: any) => {
          console.log(res);
          if (!res.ok) {
            Swal.fire({
              icon: 'error',
              text: res.msg
            });
            return;
          }
          localStorage.setItem('token', res.token)
          Swal.fire({
            icon: 'success',
            text: res.msg
          })
          console.log(res);
          this.router.navigateByUrl('/inicio') // navegar a home luego del inicio correcto
        }, error: Error => {
          console.log(Error.error.msg);
          Swal.fire({
            icon: 'error',
            text: Error.error.msg
          })
        }
      })


    // console.log(this.loginForm.value);

  }

}
