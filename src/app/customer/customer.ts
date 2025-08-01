import { Component } from '@angular/core';
import { Schecker } from '../schecker';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

interface emp{
  name:string;
  age:number;
  gender:string;
  email:string;
  phone:string;
  city:string;
  status:string;

}

@Component({
  selector: 'app-customer',
  providers:[Schecker],
  imports: [FormsModule,CommonModule,HttpClientModule],
  templateUrl: './customer.html',
  styleUrl: './customer.scss'
})
export class Customer {

  Data:emp={name:"",age:0,gender:"",email:"",phone:"",city:"",status:""}

  name:string=""
  age:number=0
gender:string=""
  email:string=""
  
   errorMessage:string=""
  successMessage:string=""

  constructor (private c:Schecker,private r:Router){}
  

   create(){

    

  

      this.c.customcreate(this.Data).subscribe(()=>{

      alert('Record saved')
       this.r.navigateByUrl('cusdetails')
          
      
  
   
   

    })
 

  

    



  

  }
 


  

  /*delete(i:any){
    this.c.del(i).subscribe((s)=>{
      alert('Deleted')
      location.reload()
    })
  }

  modify(i:any){
    
      this.r.navigate(['update',i])

    
  }

  
  ngOnInit(){
    this.c.Read().subscribe((s)=>{
      this.box=s
    })
    
  }*/

 

  


 



}



