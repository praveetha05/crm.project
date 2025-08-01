import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';


import {signInWithEmailAndPassword, signOut } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class Schecker {

  constructor (private obj:HttpClient){}

  url:string="http://localhost:3000/EmployerDetails"
  customerurl:string="http://localhost:3000/CustomerDetails"

  private auth=inject(Auth)

  log(email:string,password:string){
    return signInWithEmailAndPassword(this.auth,email,password)
  }
  createAccount(email:string,password:string){
    return createUserWithEmailAndPassword(this.auth,email,password)
    
  }
   logout(){
    return signOut(this.auth)
  }
  subcreate(rec:{}){
    return this.obj.post(`${this.url}`,rec)
  }
  Read(){
    return this.obj.get(`${this.url}`)
  }
  del(i:any){
    return this.obj.delete(`${this.url}/${i}`)
  }
  edit(i:any){
    return this.obj.get(`${this.url}/${i}`)
  }
  Update(dt:any){
    return this.obj.put(`${this.url}/${dt.id}`,dt)
  }
  profile(id:any){
    return this.obj.get(`${this.url}?email=${id}`)

  }
 

//customer CRUD
 customcreate(rec:{}){
    return this.obj.post(`${this.customerurl}`,rec)
  }
  customRead(){
    return this.obj.get(`${this.customerurl}`)
  }
  customdel(i:any){
    return this.obj.delete(`${this.customerurl}/${i}`)
  }
  customedit(i:any){
    return this.obj.get(`${this.customerurl}/${i}`)
  }
  customUpdate(dt:any){
    return this.obj.put(`${this.customerurl}/${dt.id}`,dt)
  }
  
  customprofile(id:any){
    return this.obj.get(`${this.customerurl}/${id}`)
  }

  


}
