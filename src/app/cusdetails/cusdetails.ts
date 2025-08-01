import { Component, OnInit } from '@angular/core';
import { Schecker } from '../schecker';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/Forms';




@Component({
  selector: 'app-cusdetails',
   providers:[Schecker],
  imports: [FormsModule,HttpClientModule,CommonModule],
  templateUrl: './cusdetails.html',
  styleUrl: './cusdetails.scss'
})
export class Cusdetails implements OnInit  {

 status:string=""

 

     box:any={}

     constructor (private c:Schecker, private r:Router){}



    delete(i:any){
    this.c.customdel(i).subscribe((s)=>{
      alert('Deleted')
      location.reload()
    })
  }

  modify(i:any){
    
      this.r.navigate(['cusupdate',i])

    
  }

    sign(){
    this.c.logout()
    this.r.navigateByUrl('login')
  }

  
  ngOnInit(){
    this.c.customRead().subscribe((s)=>{
      this.box=s
    })
 

}


 


close(i: number) {
  this.box[i].status = 'Closed';
  this.c.customUpdate(this.box[i]).subscribe(() => {
    alert('Record Saved');
    location.reload();
  });
}

open(i: number) {
  this.box[i].status = 'Open';
  this.c.customUpdate(this.box[i]).subscribe(() => {
    alert('Record Saved');
      location.reload();
  });
}

}


