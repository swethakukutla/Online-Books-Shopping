import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { booksQuery } from './books.selector';
import { searchbook, BooksLoaded, RemoveFromCart } from './books.actions';
import { Observable } from 'rxjs';
import { IBook } from '../Shopping-Books/interfaces/books.interface';


@Injectable()
export class BooksFacade{
  constructor(private store: Store){}


  allBooks$ = this.store.pipe(select(booksQuery.getAllBooks)) as Observable<IBook[]>;
  selectedBooks$ = this.store.pipe(select(booksQuery.getSelectedBookId));
  cartBooks$ = this.store.pipe(select(booksQuery.getCartBooks)) as Observable<IBook[]>;
  collectionBooks$ = this.store.pipe(select(booksQuery.getCollectionBooks)) as Observable<IBook[]>;
  searchedBook(payload) {
    this.store.dispatch(searchbook({ payload }));
  }



  removedBook(payload) {
    this.store.dispatch(RemoveFromCart({ payload }));
  }
}
