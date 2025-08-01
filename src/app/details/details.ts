import { Component, OnInit } from '@angular/core';
import { Schecker } from '../schecker';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/Forms';

@Component({
  selector: 'app-details',
  providers:[Schecker],

  imports: [FormsModule,HttpClientModule,CommonModule],
  templateUrl: './details.html',
  styleUrl: './details.scss'
})
export class Details implements OnInit {

  oneDt:any={}
 
     box:any={}

     constructor (private c:Schecker, private r:Router){}



    delete(i:any){
    this.c.del(i).subscribe((s)=>{
      alert('Deleted')
      location.reload()
    })
  }

  modify(i:any){
    
      this.r.navigate(['update',i])

    
  }

  sign(){
    this.c.logout()
    this.r.navigateByUrl('login')
  }

  
  ngOnInit(){
    this.c.Read().subscribe((s)=>{
      this.box=s
    })
 

}

getData(i:any){
  this.c.profile(i).subscribe((l)=>{
    this.oneDt=l
  })
}

}
