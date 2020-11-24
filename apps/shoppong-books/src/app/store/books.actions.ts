import { createAction,props } from '@ngrx/store';
import { IBook } from '../Shopping-Books/interfaces/books.interface';

export const BooksLoaded = createAction('[Books Loaded] Loaded Books',props<{payload: IBook[]}>());
export const BooksLoadError = createAction('[Load Books Error] Load Books Error',props<{error: string}>());
export const searchbook = createAction('[Books Search Bar] Searched Books',props<{ payload: string }>());
export const AddToCart = createAction('[Books Added To Cart] Add Books to Cart',props<{ payload: IBook}>());
export const RemoveFromCart = createAction('[Books Removed] Removed Books',props<{ payload: string }>());
export const AddBooksToCollection = createAction('[Books Added to Collection] Add Books to Collection',props<{ payload: IBook[] }>());


