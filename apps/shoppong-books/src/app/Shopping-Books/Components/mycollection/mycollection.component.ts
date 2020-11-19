import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BooksFacade } from '../../../store/books.fascade';
import { IBook } from '../../interfaces/books.interface';

@Component({
  selector: 'shopping-books-mycollection',
  templateUrl: './mycollection.component.html',
  styleUrls: ['./mycollection.component.css']
})
export class MycollectionComponent implements OnInit {
  collectionBooks$: Observable<IBook[]>;
  constructor(private bookFacade: BooksFacade) { }

  ngOnInit(): void {
    this.collectionBooks$ = this.bookFacade.collectionBooks$;
  }
}
