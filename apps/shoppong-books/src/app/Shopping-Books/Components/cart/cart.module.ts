import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AppMaterialModule } from '../../../material.module';
import { CartComponent } from './cart.component';

const cartRoutes: Routes = [
  { path: '', component: CartComponent }
];

@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    RouterModule.forChild(cartRoutes)
  ]
})
export class CartModule { }
