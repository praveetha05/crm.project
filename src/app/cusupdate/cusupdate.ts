import { Component, OnInit } from '@angular/core';
import { Schecker } from '../schecker';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/Forms';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cusupdate',
   providers:[Schecker],
  imports: [CommonModule,HttpClientModule,FormsModule],
  templateUrl: './cusupdate.html',
  styleUrl: './cusupdate.scss'
})
export class Cusupdate  implements OnInit {
  
  Data:any={}

  constructor (private c:Schecker,private r:Router,private a:ActivatedRoute){}

  up(){

    this.c.customUpdate(this.Data).subscribe((s)=>{

      alert("Record Saved")
    
      this.r.navigateByUrl('cusdetails')

    })



  

  }
  ngOnInit(){

    this.c.customedit(this.a.snapshot.paramMap.get('id')).subscribe((s)=>{
      this.Data=s
    })
   
  }

}
