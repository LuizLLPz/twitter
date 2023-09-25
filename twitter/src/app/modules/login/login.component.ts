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
          if (res.data !== false) {
            localStorage.setItem('username', res.data.username);
            localStorage.setItem('name', res.data.name);
            localStorage.setItem('number', res.data.number);
            localStorage.setItem('email', res.data.email);
            window.location.href = 'http://localhost:4200/userProfile';
          }
        },
        (err) => {
          console.log(err);
        }
      );
  }
}
