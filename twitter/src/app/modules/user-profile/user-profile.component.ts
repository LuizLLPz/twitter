import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  public name: any;
  public username: any;
  public number: any;
  public email: any;

  constructor() {}

  ngOnInit(): void {
    this.name = localStorage.getItem('name');
    this.username = localStorage.getItem('username');
    this.number = localStorage.getItem('number');
    this.email = localStorage.getItem('email');
  }
}
