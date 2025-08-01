import { Component } from '@angular/core';
import { Schecker } from '../schecker';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-empsign',
  providers:[Schecker],
 imports: [FormsModule,CommonModule,HttpClientModule],
  templateUrl: './empsign.html',
  styleUrl: './empsign.scss'
})
export class Empsign {

  
  email:string=""
  password:string=""
  errorMessage:string=""
  successMessage:string=""

  constructor (private c:Schecker,private r:Router){}
  
oneDt:any={}
getData(){
  this.c.log(this.email, this.password).then(() => {
    this.successMessage = "Login successful";
    this.errorMessage = "";

     //this.r.navigateByUrl('empdash');

      	this.r.navigate(['/empdash', this.email])

  
  }).catch(() => {
    this.errorMessage = "Login failed";
    this.successMessage = "";
  });
}





}
