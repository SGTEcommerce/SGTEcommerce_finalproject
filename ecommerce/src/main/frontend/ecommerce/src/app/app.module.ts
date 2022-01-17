import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { ProductsComponent } from './ecommerce/products/products.component';
import { OrdersComponent } from './ecommerce/orders/orders.component';
import { ShoppingCartComponent } from './ecommerce/shopping-cart/shopping-cart.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './ecommerce/menu/menu.component';
import { FooterComponent } from './ecommerce/footer/footer.component';
import { ProductDetailsComponent } from './ecommerce/product-details/product-details.component';
import { AboutComponent } from './ecommerce/about/about.component';
import { SignupComponent } from './ecommerce/signup/signup.component';
import { SuccessComponent } from './ecommerce/success/success.component';
//import { LoginComponent } from './ecommerce/login/login.component';
//import { LogoutComponent } from './ecommerce/logout/logout.component';
// import { UsersComponent } from './ecommerce/users/users.component';


@NgModule({
  declarations: [
    AppComponent,
    EcommerceComponent,
    ProductsComponent,
    OrdersComponent,
    ShoppingCartComponent,
    MenuComponent,
    FooterComponent,
    ProductDetailsComponent,
    AboutComponent,
    SignupComponent
    //SuccessComponent
   // LoginComponent,
    //LogoutComponent
    //UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

