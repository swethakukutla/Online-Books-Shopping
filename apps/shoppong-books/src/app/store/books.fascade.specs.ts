import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/nx/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { NxModule } from '@nrwl/nx';

import { searchbook } from './books.actions';
import { ShopEffects } from './books.effects';
import { BooksFacade } from './books.fascade';
import { BooksState, initialState, booksReducer } from './books.reducer';

interface TestSchema {
  'books' : BooksState
}

describe('CarsFacade', () => {
  let facade: BooksFacade;
  let store: Store<TestSchema>;
  let createBooks;

  beforeEach(() => {
    createBooks = ( id:string, name = '' ) => ({
       id,
       name: name ? `name-${id}` : id
    });
  });

  describe('used in NgModule', async (done) => {

    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature('books', booksReducer, { initialState }),
          EffectsModule.forFeature([ShopEffects])
        ],
        providers: [BooksFacade]
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          NxModule.forRoot(),
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule,
        ]
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(BooksFacade);
    });


    it('loadAllBooks() should return empty list with loaded == true', async (done) => {
      try {
        let list = await readFirst(facade.allBooks$);

        expect(list.length).toBe(0);
        facade.allBooks$;

        list = await readFirst(facade.allBooks$);
        expect(list.length).toBe(0);
        done();
      } catch (err) {
        done.fail(err);
      }
    });

    it('searchBook$ should return the search list', async (done) => {
      try {
        let list = await readFirst(facade.allBooks$);
        expect(list.length).toBe(0);

        const searchValue = "Java"

        store.dispatch(searchbook({
          payload: searchValue
        }
        ));

        list = await readFirst(facade.allBooks$);
        facade.searchedBook(searchValue);

        expect(list.length).toBe(2);
        expect(facade.searchedBook).toBeCalledWith(searchValue);
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
