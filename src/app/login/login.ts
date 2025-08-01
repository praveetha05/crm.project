import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/Forms';
import { Schecker } from '../schecker';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  providers:[Schecker],
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {

  email:string=""
  password:string=""
  errorMessage:string=""
  successMessage:string=""

  constructor (private c:Schecker,private r:Router){}

  loginUser(){
    this.c.log(this.email,this.password).then(()=>{

      this.successMessage="login Success"

      this.r.navigateByUrl('/employee')

    }).catch(()=>{
      this.errorMessage="login Failed"

    })
  }


 

}
