import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../admin/users/users.service';
import { Token } from '../models/Token';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public username : string;
  public password : string;
  public passwordConfirm : string;
  public email : string;
  public address : string;
  public phone : string;
  public name : string;

  public error : string

  constructor(private usersService : UsersService, private router : Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('token')) {
        this.router.navigateByUrl('/account')
    }
}

register () {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*/

    this.error = ''

    if (!this.email || !this.email.match(emailRegex)) {
        this.error = "Email is not valid"
        return
    }

    if (this.password != this.passwordConfirm) {
        this.error = "Passwords do not match"
        return
    }

    this.usersService.register(
        this.username, this.password, this.email, this.email, this.address, this.phone).subscribe((token : Token) => {
            localStorage.setItem('token', token.token);
            this.router.navigateByUrl('/account').then(() => window.location.reload())
        }, (error : ErrorEvent) => {
            this.error = error.error
        })
}
}