import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AppMaterialModule } from '../../../material.module';
import { MycollectionComponent } from './mycollection.component';

const myCollectionRoutes: Routes = [
  { path: '', component: MycollectionComponent }
];

@NgModule({
  declarations: [
    MycollectionComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    RouterModule.forChild(myCollectionRoutes)
  ]
})
export class MyCollectionModule { }
