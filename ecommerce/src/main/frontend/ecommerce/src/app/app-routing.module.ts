import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './ecommerce/about/about.component';
import { ProductsComponent } from './ecommerce/products/products.component';
import { ProductDetailsComponent } from './ecommerce/product-details/product-details.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { ShoppingCartComponent } from './ecommerce/shopping-cart/shopping-cart.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: ProductsComponent },
  { path: 'products', component: EcommerceComponent},
  { path: 'about', component: AboutComponent },
  { path: 'products/:id', component: ProductDetailsComponent },
  { path: 'cart', component: ShoppingCartComponent },
 /* { path: 'faq', component: FaqComponent },
  { path: 'policies', component: PoliciesComponent },
  { path: 'login', component: LoginComponent },*/

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
