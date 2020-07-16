import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { booksQuery } from '../../../store/books.selector';
import { RemoveFromCart } from '../../../store/books.actions';
import { IBook } from '../../interfaces/books.interface';

@Component({
  selector: 'shopping-books-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
cartBooks: IBook[];

  constructor(private router: Router,
              private store: Store) {
                this.store.select(booksQuery.getCartBooks)
                .subscribe(data => {
                  this.cartBooks = data;
                })
              }

  ngOnInit(): void {
  }
  goToBillingPage() {
    this.router.navigate(['/billingpage'])
  }

  removeFromCart(id) {
    this.store.dispatch(RemoveFromCart({payload: id}))
  }
}
