
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {  Router, RouterModule, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterModule,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'project1';

  constructor(public router:Router){}
  isInRoute(route:string):boolean{
    return this.router.url.includes(route); 
    
  
}}
