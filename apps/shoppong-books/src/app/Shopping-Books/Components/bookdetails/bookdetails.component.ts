import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { Store } from '@ngrx/store';

import { AddToCart } from '../../../store/books.actions';
import { booksQuery } from '../../../store/books.selector';
import { IBook } from '../../interfaces/books.interface';

@Component({
  selector: 'shopping-books-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.css']
})
export class BookdetailsComponent implements OnInit {
 allBooks: IBook[];
 selectedBook: IBook;
 selectedBookId: string;

  constructor(private router: Router,
              private store: Store,
              private actRoute: ActivatedRoute,
              private dialog: MatDialog) {
                this.store.select(booksQuery.getAllBooks)
                .subscribe(data => {
                  this.allBooks = data;
                })
              }

  ngOnInit(): void {
    this.selectedBookId = this.actRoute.snapshot.params.id;
    this.selectedBook = this.allBooks.find(book =>
    book['id'] === this.selectedBookId)
      this.selectedBook = Object.assign({}, this.selectedBook)
   }


  addToCart(){
    this.store.dispatch(AddToCart({payload: this.selectedBook}));
  }

  goToBillingPage() {
    this.router.navigate(['/billingpage'])
  }
}

