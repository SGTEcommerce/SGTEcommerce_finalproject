import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './ecommerce/about/about.component';
import { ProductsComponent } from './ecommerce/products/products.component';
import { ProductDetailsComponent } from './ecommerce/product-details/product-details.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { ShoppingCartComponent } from './ecommerce/shopping-cart/shopping-cart.component';
import { LoginComponent } from './ecommerce/login/login.component';
import { SignupComponent } from './ecommerce/signup/signup.component';
import { UsersComponent } from './ecommerce/admin/users/users.component';
import { PaymentComponent } from './ecommerce/payment/payment.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: EcommerceComponent },
  { path: 'products', component: EcommerceComponent},
  { path: 'about', component: AboutComponent },
  { path: 'products/:id', component: ProductDetailsComponent },
  { path: 'cart', component: ShoppingCartComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'account', component: UsersComponent},
  { path: 'payment', component: PaymentComponent},
 /* { path: 'faq', component: FaqComponent },
  { path: 'policies', component: PoliciesComponent },*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
