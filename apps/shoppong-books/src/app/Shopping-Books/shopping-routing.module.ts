import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './Components/cart/cart.component';
import { BillingpageComponent } from './Components/billingpage/billingpage.component';
import { MycollectionComponent } from './Components/mycollection/mycollection.component';
import { SearchComponent } from './Components/search/search.component';
import { BookdetailsComponent } from './Components/bookdetails/bookdetails.component';

const routes: Routes = [
  {
    path: 'search-component',
    component: SearchComponent
  },
  {
    path: 'cart-component',
    component: CartComponent
  },
  {
    path: 'collection-component',
    component: MycollectionComponent
  },
  {
    path: 'billingpage',
    component: BillingpageComponent
  },
  {
    path: 'bookdetails/:id',
    component: BookdetailsComponent
  },
  { path: '',redirectTo: "/search-component",pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ShoppingRoutingModule { }
