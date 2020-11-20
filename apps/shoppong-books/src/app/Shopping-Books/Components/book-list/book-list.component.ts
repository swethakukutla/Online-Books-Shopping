import { Component, Input, OnInit } from '@angular/core';
import { IBook } from '../../interfaces/books.interface';

@Component({
  selector: 'shopping-books-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  @Input() book : IBook ;
  constructor() { }

  ngOnInit(): void { }
}
