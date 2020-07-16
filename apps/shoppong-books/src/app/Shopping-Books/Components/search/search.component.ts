import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { searchbook } from '../../../store/books.actions';
import { booksQuery } from '../../../store/books.selector';
import { Router } from '@angular/router';

@Component({
  selector: 'shopping-books-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  loadedBooks: any;
  constructor(private store: Store, private router: Router){
      this.store.select(booksQuery.getAllBooks)
        .subscribe(data => {
          this.loadedBooks = data;
        })
  }

  ngOnInit(): void {  }

  getBooks(payload){
     this.store.dispatch(searchbook({payload}));
  }
  onBookSelected(payload) {
    this.router.navigate(['/bookdetails/',payload]);
  }
}



