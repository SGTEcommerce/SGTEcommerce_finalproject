import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Token } from '../../models/Token';
import { User } from '../../models/User';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  user : User;
  editMode : boolean = false;

  name : string;
  username : string;
  email : string;
  address : string;
  phone : string;

  constructor(private usersService : UsersService, private router : Router) { }

  ngOnInit(): void {
    if (!localStorage.getItem('token')) {
        this.router.navigateByUrl('/login')
        return
    }

    this.usersService.getUserByToken().subscribe((user : User) => {
        this.user = user
        
        this.name = user.name;
        this.username = user.username;
        this.email = user.email;
        this.address = user.address;
        this.phone = user.phone;
    }, (error : ErrorEvent) => {
        console.log(error)
    })
}

logOut () {
    localStorage.removeItem('token')
    this.router.navigateByUrl('/login').then(() => window.location.reload())
}

updateUser () {
    this.usersService.updateUser(this.user.id.toString(), this.username, this.user.password, this.email, this.name, this.address, this.phone).subscribe((user : User) => {
        this.usersService.createToken(user.username).subscribe((token : Token) => {
            localStorage.removeItem('token')
            console.log(localStorage.getItem('token'));
            localStorage.setItem('token', token.token)
            console.log(localStorage.getItem('token'));
            window.location.reload()
        })
    })
}

deleteUser () {
    if (window.confirm("Are you sure you want to delete?")) {
        this.usersService.deleteUser(this.user.id.toString()).subscribe(res => {
            this.logOut()
        })
    }
}
}