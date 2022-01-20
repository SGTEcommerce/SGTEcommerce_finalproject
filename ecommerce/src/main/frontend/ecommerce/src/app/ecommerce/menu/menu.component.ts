import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public term!: string;
  public isTokenThere : boolean

  constructor(private router: Router) { 
    console.log("Token:  " + localStorage.getItem('token'));
    this.isTokenThere = localStorage.getItem('token') != null
}
  ngOnInit(): void {
  }

  search () {
    this.router.navigate(["/shop", this.term]).then(() => window.location.reload())
}

}
