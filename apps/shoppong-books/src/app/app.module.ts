import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import * as BooksReducer  from './store/books.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ShopEffects } from './store/books.effects';
import { BooksFacade } from './store/books.fascade';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing';
import { ShoppingModule } from './Shopping-Books/shopping.module';
import { HttpClientModule } from '@angular/common/http';
import { PurchasedialogueboxComponent } from './Shopping-Books/Components/purchasedialoguebox/purchasedialoguebox.component';

@NgModule({
  declarations: [AppComponent, PurchasedialogueboxComponent],
  imports: [BrowserModule, FlexLayoutModule, StoreModule.forRoot({books: BooksReducer.reducer}),
    EffectsModule.forRoot([ShopEffects]),StoreDevtoolsModule.instrument({ name: 'mybook' }),
    NoopAnimationsModule, AppRoutingModule, MatSidenavModule, MatListModule, HttpClientModule,
    MatToolbarModule, MatIconModule, FormsModule, ShoppingModule],
  providers: [BooksFacade],
  bootstrap: [AppComponent],
})
export class AppModule {}
