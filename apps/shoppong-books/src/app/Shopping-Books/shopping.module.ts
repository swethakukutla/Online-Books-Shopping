import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { SearchComponent } from './Components/search/search.component';
import { CartComponent } from './Components/cart/cart.component';
import { MycollectionComponent } from './Components/mycollection/mycollection.component';
import { BookdetailsComponent } from './Components/bookdetails/bookdetails.component';
import { BillingpageComponent } from './Components/billingpage/billingpage.component';
import { ShoppingRoutingModule } from './shopping-routing.module';
import { PurchasedialogueboxComponent } from './Components/purchasedialoguebox/purchasedialoguebox.component';

@NgModule({
  declarations: [SearchComponent, CartComponent, MycollectionComponent, BookdetailsComponent, BillingpageComponent, PurchasedialogueboxComponent],
  imports: [BrowserModule, FlexLayoutModule, NoopAnimationsModule, FormsModule, ReactiveFormsModule,
    MatButtonModule, MatInputModule, MatIconModule, MatCardModule, MatDialogModule,
    MatSidenavModule, MatToolbarModule, Ng2SearchPipeModule, ShoppingRoutingModule],
})
export class ShoppingModule {}
