import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UsersService } from '../admin/users/users.service';
import { EcommerceServiceService } from '../ecommerce-service.service';
import { ProductOrders } from '../models/ProductOrders';
import { User } from '../models/User';


@Component({
    selector: 'app-orders',
    templateUrl: './orders.component.html',
    styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

    user : User;

    orders: ProductOrders;
    total!: number;
    paid!: boolean;
    sub!: Subscription;

    constructor(
        private ecommerceService: EcommerceServiceService,
        private usersService : UsersService,
        private router : Router) {

        this.orders = this.ecommerceService.ProductOrders || {};
    }

    ngOnInit(): void {
        if (!localStorage.getItem('token')) {
            this.router.navigateByUrl('/login')
            return
        }

        this.usersService.getUserByToken().subscribe((user : User) => {
            this.user = user;
            this.loadTotal()
        }, (error : ErrorEvent) => {
            console.log(error)
        })

        this.paid = false;
        this.sub = this.ecommerceService.OrdersChanged.subscribe(() => {
            this.orders = this.ecommerceService.ProductOrders;
        });
        this.loadTotal();
    }

    pay() {
        this.paid = true;
        this.ecommerceService.saveOrder(this.orders).subscribe();
    }

    loadTotal() {
        this.sub = this.ecommerceService.TotalChanged.subscribe(() => {
            this.total = this.ecommerceService.Total;
        });
    }
    
  }