import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { booksQuery } from './books.selector';
import { searchbook, BooksLoaded } from './books.actions';
import { Observable } from 'rxjs';
import { IBook } from '../Shopping-Books/interfaces/books.interface';


@Injectable()
export class BooksFacade{
  constructor(private store: Store){}


  allBooks$ = this.store.pipe(select(booksQuery.getAllBooks)) as Observable<IBook[]>;
  selectedBooks$ = this.store.pipe(select(booksQuery.getSelectedBookId));
  searchedBook(payload) {
    this.store.dispatch(searchbook({ payload }));
  }

  cartBooks$ = this.store.pipe(select(booksQuery.getCartBooks)) as Observable<IBook[]>;

}
