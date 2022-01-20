import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';
import { UsersService } from '../users/users.service';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

users: User[] = [];
usersService: UsersService | undefined;
  
  constructor() { }

  ngOnInit(): void {
  
  }
  }



