import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss']
})
export class LoginComponentComponent implements OnInit {

  public loading: boolean;

  constructor() {
    this.loading = false;
  }

  ngOnInit() {
  }

  login() {
    this.loading = true;
  }
}
