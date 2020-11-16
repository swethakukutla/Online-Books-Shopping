import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartComponent } from './cart.component';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
// import { Router } from '@angular/router';
import { BooksFacade } from '../../../store/books.fascade';
// import { reducers } from '../../../store/books.reducer';
import * as booksreducer from '../../../store/books.reducer';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;
  let store: MockStore;
  const initialState = { booksreducer };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CartComponent],
      imports: [BrowserModule, MatButtonModule, MatInputModule, MatCardModule, MatIconModule, RouterTestingModule.withRoutes([])],
      providers: [ provideMockStore({ initialState }), BooksFacade]
    })
      .compileComponents();
      store = TestBed.inject(MockStore);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    // router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeDefined();
  });

  it('clicking on cancel should navigate to customer search page', async () => {
    const spy = jasmine.createSpy('navigate').and.callThrough();
    component.goToBillingPage();
    expect(spy).toHaveBeenCalledWith(['/billingpage']);
  });
});
