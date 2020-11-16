import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { readFirst } from '@nrwl/nx/testing';

import { SearchComponent } from './search.component';
import { BooksFacade } from '../../../store/books.fascade';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterTestingModule } from '@angular/router/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
// import { BooksState, Entity, initialState, booksReducer } from '../../../store/books.reducer';
// import { BooksLoaded } from '../../../store/books.actions';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let store: MockStore;
  let facade: BooksFacade;
  // let loadBoooks;
  const initialState = { loggedIn: false };

  beforeEach(async(() => {
  //   loadBoooks = ( id:string, name = '' ): Entity => ({
  //     id,
  //     name: name ? `name-${id}` : id
  //  });
    TestBed.configureTestingModule({
      declarations: [SearchComponent],
      imports: [FormsModule, ReactiveFormsModule, BrowserModule, MatButtonModule, MatInputModule,
        NoopAnimationsModule, MatCardModule, MatIconModule, MatDialogModule, RouterTestingModule],
      providers: [ provideMockStore({ initialState }), BooksFacade]
    })
      .compileComponents();
    store = TestBed.inject(MockStore);
    facade = TestBed.inject(BooksFacade);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // it('loadAll() should return empty list with loaded == true', async (done) => {
  //   try {
  //     let list = await readFirst(facade.allBooks$);
  //     // let isLoaded = await readFirst(facade.loadedBooks$);

  //     expect(list.length).toBe(0);    // initially empty
  //     // expect(isLoaded).toBe(false);   // initially not loaded

  //     facade.allBooks$;               // In our case loadAll() always returns an empty array.

  //     list = await readFirst(facade.allBooks$);
  //     // isLoaded = await readFirst(facade.loaded$);

  //     // expect(isLoaded).toBe(true);    // data load completed
  //     expect(list.length).toBe(0);

  //     done();
  //   } catch (err) {
  //     done.fail(err);
  //   }
  // });
});
