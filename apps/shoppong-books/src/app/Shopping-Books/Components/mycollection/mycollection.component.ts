import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BooksFacade } from '../../../store/books.fascade';

import { booksQuery } from '../../../store/books.selector';
import { IBook } from '../../interfaces/books.interface';

@Component({
  selector: 'shopping-books-mycollection',
  templateUrl: './mycollection.component.html',
  styleUrls: ['./mycollection.component.css']
})
export class MycollectionComponent implements OnInit {
  collectionBooks$: any;
  constructor(private store: Store, private bookFacade: BooksFacade) {
    // this.store.select(booksQuery.getCollectionBooks)
    // .subscribe(data => {
    //   this.collectionBooks = data;
    // })
  }

  ngOnInit(): void {
    this.collectionBooks$ = this.bookFacade.collectionBooks$;
  }

}
