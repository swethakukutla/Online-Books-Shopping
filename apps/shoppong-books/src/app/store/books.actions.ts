import { createAction,props } from '@ngrx/store';
import { IBook } from '../Shopping-Books/interfaces/books.interface';

export const BooksLoaded = createAction('[Books Loaded] Loaded Books',props<{payload: IBook[]}>());
export const BooksLoadError = createAction('[Load Books Error] Load Books Error',props<{error: any}>());
export const searchbook = createAction('[Books Search Bar] Searched Books',props<{ payload: any }>());
export const AddToCart = createAction('[Books Added To Cart] Add Books to Cart',props<{ payload: any}>());
export const RemoveFromCart = createAction('[Books Removed] Removed Books',props<{ payload: any }>());
export const AddBooksToCollection = createAction('[Books Added to Collection] Add Books to Collection',props<{ payload: any }>());


