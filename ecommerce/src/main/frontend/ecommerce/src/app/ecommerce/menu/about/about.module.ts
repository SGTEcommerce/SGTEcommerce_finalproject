import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutRoutes } from './about.routes';
import { AboutComponent } from './about.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AboutRoutes),
  ],
  declarations: [AboutComponent]
})
export class AboutModule {
}