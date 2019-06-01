import { Component, OnInit } from '@angular/core';
import { User } from '@model/user';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {

  public user: User;
  public loading: boolean;
  public error: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.user = new User();
    this.loading = false;
  }

  createUser() {
    this.loading = true;
    this.http.post('/user', this.user).subscribe(() => {
      this.loading = false;
      document.location.assign('/login/login.html');
    }, (error: HttpErrorResponse) => {
      this.error = error.message;
      this.loading = false;
    });
  }

}
