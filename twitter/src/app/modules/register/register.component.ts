import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterServiceService } from './_services/register-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private registerService: RegisterServiceService
  ){

  }

  ngOnInit() {
   this.loadForm();
   this.registerService.postRegister("aaa")
  }

  loadForm() {
    this.form = this.fb.group({
      name:['',[Validators.required]],
      user:['',[Validators.required]],
      email:['',[Validators.required]],
      cellphone:['',[Validators.required]],
      password:['',[Validators.required]],
      confirm_password:['',[Validators.required]],
    })
  }

  post(){
    this.registerService.postRegister(this.form)
  }
}
