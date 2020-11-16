import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { booksQuery } from '../../../store/books.selector';
import { IBook } from '../../interfaces/books.interface';

@Component({
  selector: 'shopping-books-mycollection',
  templateUrl: './mycollection.component.html',
  styleUrls: ['./mycollection.component.css']
})
export class MycollectionComponent implements OnInit {
  collectionBooks: IBook[];
  constructor(private store: Store) {
    this.store.select(booksQuery.getCollectionBooks)
    .subscribe(data => {
      this.collectionBooks = data;
    })
  }

  ngOnInit(): void {
  }

}
