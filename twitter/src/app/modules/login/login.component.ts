import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public form: FormGroup;

  constructor(private fb: FormBuilder, public loginTypeService: LoginService) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  login() {
    this.loginTypeService
      .loginServece(this.form.value.email, this.form.value.password)
      .subscribe(
        (res) => {
          // coloar isso na tela por meio desse service e esse metodo. Aguadar a informação no local storage e realizar o mesmo metodo para pegar as informações do usuario
          console.log(res.data.username);
          console.log(res.data.name);
          console.log(res.data.number);
          console.log(res.data.email);
        },
        (err) => {
          console.log(err);
        }
      );
  }
}
