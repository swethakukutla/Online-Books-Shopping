import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';

import { booksQuery } from '../../../store/books.selector';
import { RemoveFromCart } from '../../../store/books.actions';
import { IBook } from '../../interfaces/books.interface';
import { BooksFacade } from '../../../store/books.fascade';

@Component({
  selector: 'shopping-books-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
cartBooks$: any;

  constructor(private router: Router,
              private store: Store,  private bookFacade: BooksFacade) {}

  ngOnInit(): void {
    this.cartBooks$ = this.bookFacade.cartBooks$;
  }
  goToBillingPage() {
    this.router.navigate(['/billingpage'])
  }

  removeFromCart(id) {
    // this.store.dispatch(RemoveFromCart({payload: id}))
    this.bookFacade.removedBook(id);
  }
}
