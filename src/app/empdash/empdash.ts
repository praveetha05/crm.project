import { Component, OnInit } from '@angular/core';
import { Schecker } from '../schecker';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/Forms';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-empdash',
  providers:[Schecker],
  imports: [FormsModule,HttpClientModule,CommonModule],
  templateUrl: './empdash.html',
  styleUrl: './empdash.scss'
})
export class Empdash {
e: string | null = null;

  constructor(private c:Schecker,private r:Router,private k:ActivatedRoute){}

oneDt:any={}


  


prf(){

this.e=this.k.snapshot.paramMap.get('email')

  this.c.profile(this.e).subscribe((l) => {
      this.oneDt = l;;
})
  }




//  prof(i:any){
//   this.r.navigateByUrl('profile')
//   this.c.Update(i).subscribe((l)=>{
//     this.oneDt=l
//   })

//  }


  lead(){
    this.r.navigateByUrl('customer')
  }
  // pf(email:string){
  //  this.r.navigate(['/profile', email]);
  // }

  sigin(){
    this.c.logout()
    this.r.navigateByUrl('empsign')
  }
  
  
}

