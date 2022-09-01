import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder} from "@angular/forms"

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registroForm !: FormGroup;


  constructor(
    private formBuilder : FormBuilder
  ) { }

  ngOnInit(): void {
    this.registroForm = this.formBuilder.group({
      username:[], 
      identificacion:[],
      contrasena:[],
      role: []
    })
  }



}
