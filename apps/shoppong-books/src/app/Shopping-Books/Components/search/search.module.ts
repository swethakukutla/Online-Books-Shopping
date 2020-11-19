import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppMaterialModule } from '../../../material.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { SearchComponent } from './search.component';


const searchRoutes: Routes = [
  { path: '', component: SearchComponent }
];

@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    Ng2SearchPipeModule,
    CommonModule,
    AppMaterialModule,
    RouterModule.forChild(searchRoutes)
  ]
})
export class SearchModule { }
