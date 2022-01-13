import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './ecommerce/admin/users/users.component';
<<<<<<< HEAD
import { AboutComponent } from './ecommerce/about/about.component';
=======
import { AboutComponent } from './ecommerce/menu/about/about.component';
>>>>>>> origin/nav_menu_routing

const routes: Routes = [
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
