import { Component, OnInit } from '@angular/core';
import { Schecker } from '../schecker';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/Forms';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-profile',
   providers:[Schecker],
 imports: [CommonModule,FormsModule,HttpClientModule],

  templateUrl: './profile.html',
  styleUrl: './profile.scss'
})
export class Profile implements OnInit {
  
oneDt:any={}

e: string | null = null;

   constructor (private c:Schecker,private r:Router,private route:ActivatedRoute){}
ngOnInit(){

this.e=this.route.snapshot.paramMap.get('email')

  this.c.profile(this.e).subscribe((l) => {
      this.oneDt = l;;
})


 

   
  }}


  


  



