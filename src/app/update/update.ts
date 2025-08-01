import { Component, OnInit } from '@angular/core';
import { Schecker } from '../schecker';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  providers:[Schecker],
  imports: [FormsModule,CommonModule,HttpClientModule],
  templateUrl: './update.html',
  styleUrl: './update.scss'
})
export class Update implements OnInit {

  Data:any={}

  constructor (private c:Schecker,private r:Router,private a:ActivatedRoute){}

  up(){

    this.c.Update(this.Data).subscribe((s)=>{

      alert("Record Saved")
    
      this.r.navigateByUrl('details')

    })



  

  }
  ngOnInit(){

    this.c.edit(this.a.snapshot.paramMap.get('id')).subscribe((s)=>{
      this.Data=s
    })
   
  }

}
