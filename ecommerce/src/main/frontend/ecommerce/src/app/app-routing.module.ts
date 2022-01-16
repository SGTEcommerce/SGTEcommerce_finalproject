import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './ecommerce/about/about.component';
import { ProductsComponent } from './ecommerce/products/products.component';
import { ProductDetailsComponent } from './ecommerce/product-details/product-details.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { ShoppingCartComponent } from './ecommerce/shopping-cart/shopping-cart.component';
import { SignupComponent } from './ecommerce/signup/signup.component';
import { SuccessComponent } from './ecommerce/success/success.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: ProductsComponent },
  { path: 'yewelery', component: EcommerceComponent},
  { path: 'about', component: AboutComponent },
  { path: 'details', component: ProductDetailsComponent },
  { path: 'cart', component: ShoppingCartComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'success', component: SuccessComponent }
 /* { path: 'faq', component: FaqComponent },
  { path: 'policies', component: PoliciesComponent },
  { path: 'login', component: LoginComponent },*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
