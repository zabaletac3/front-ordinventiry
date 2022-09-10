import { HttpBackend, HttpClient } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, NgForm, Validators } from "@angular/forms"
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { AtrUser } from 'src/app/interfaces/register-form.interface';
import { __values } from 'tslib';
import { RegisterService } from './services/register.service';
import Swal from 'sweetalert2'
import { ActivatedRoute, Router } from '@angular/router';

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


  registerForm = this.fb.group({
    username: ['', Validators.required],
    identificacion: ['', Validators.required],
    contrasena: ['', Validators.required],
    role: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private registerServices: RegisterService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }



  crearUser() {

    const { username, identificacion, contrasena, role } = this.registerForm.value;

    // const atrUser: AtrUser = { username, identificacion, contrasena, role }

    console.log(this.registerForm.value);
    this.registerServices.crearUser({ username, identificacion, contrasena, role })
      .subscribe({
        next: (res:any) => {
          console.log(res);
          if(res.ok){
            localStorage.setItem('token', res.data.token);
            Swal.fire({
              icon: 'success',
              title: 'Registro exitoso',
              text: `${username}: ${res.message}`
            })
            this.router.navigateByUrl('/login')
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Registro no exitoso',
              text: `${username}: ${res.message}`
            })
          }
          
        }, error: Error => {
          console.log(Error.error.message);
          Swal.fire({
            icon: 'error',
            text: Error.error.message
          })
        }
      })
  }





}
