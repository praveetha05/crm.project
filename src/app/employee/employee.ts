
import { Component, OnInit } from '@angular/core';
import { Schecker } from '../schecker';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface emp{
  name:string;
  age:number;
  gender:string;

  email:string;
  phone:string;
  city:string;
  password:string;

}



@Component({
  selector: 'app-employee',
  providers:[Schecker],
  imports: [FormsModule ,HttpClientModule,CommonModule],
  templateUrl: './employee.html',
  styleUrl: './employee.scss'
})
export class Employee{



  Data:emp={name:"",age:0,gender:"",email:"",phone:"",city:"",password:""}

//   name:string=""
//   age:number=0
// gender:string=""
//   email:string=""
//   password:string=""
errorMessage:string=""
successMessage:string=""

  constructor (private c:Schecker,private r:Router){}
  

   create(){

    this.c.createAccount(this.Data.email,this.Data.password).then(()=>{

    this.successMessage="create Successfully"

      this.c.subcreate(this.Data).subscribe(()=>{

      alert('Record saved')
       this.r.navigateByUrl('/details')
          
      
  
   
   

    })
 
        this.errorMessage=""

    }).catch(()=>{
        this.errorMessage="create Failed"
        this.successMessage=""

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
