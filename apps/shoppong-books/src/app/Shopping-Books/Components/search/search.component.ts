import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BooksFacade } from '../../../store/books.fascade';
import { IBook } from '../../interfaces/books.interface';

@Component({
  selector: 'shopping-books-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  loadedBooks$: Observable<IBook[]>;;
  constructor(private router: Router, private bookFacade: BooksFacade){}

  ngOnInit(): void {
     this.loadedBooks$ = this.bookFacade.allBooks$;
  }

  getBooks(payload){
    this.bookFacade.searchedBook( payload );
  }

  onBookSelected(payload) {
    this.router.navigate(['/bookdetails/',payload]);
  }
}
