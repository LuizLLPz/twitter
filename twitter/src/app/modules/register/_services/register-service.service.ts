import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {

  constructor() { }


  postRegister(form: any){
    console.log(form)
  }
}
