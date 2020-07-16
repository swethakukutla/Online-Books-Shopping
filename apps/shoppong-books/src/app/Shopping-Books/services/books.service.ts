import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBook } from '../interfaces/books.interface';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) { }

  getAllBooks(id: string) {
    return this.http.get<{ items: IBook[] }>('https://www.googleapis.com/books/v1/volumes?q='+id);
  }
}
