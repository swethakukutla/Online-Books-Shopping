import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';

import { BookdetailsComponent } from './bookdetails.component';
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
import { BooksFacade } from '../../../store/books.fascade';
import { MemoizedSelector } from '@ngrx/store';
import * as booksreducer from '../../../store/books.reducer';
import { booksQuery } from '../../../store/books.selector';
import { Router } from '@angular/router';

describe('BookdetailsComponent', () => {
  let component: BookdetailsComponent;
  let fixture: ComponentFixture<BookdetailsComponent>;
  let store: MockStore;
  let mockCollectionBooksSelector: MemoizedSelector<booksreducer.BooksState, any>;
  const initialState = [{
    "kind": "books#volume",
    "id": "eNExy_X1YYcC",
    "etag": "FSQLuTqMts8",
    "selfLink": "https://www.googleapis.com/books/v1/volumes/eNExy_X1YYcC",
    "volumeInfo": {
      "title": "AngularJS",
      "authors": [
        "Brad Green",
        "Shyam Seshadri"
      ],
      "publisher": "\"O'Reilly Media, Inc.\"",
      "publishedDate": "2013-04-08",
      "description": "Develop smaller, lighter web apps that are simple to create and easy to test, extend, and maintain as they grow. This hands-on guide introduces you to AngularJS, the open source JavaScript framework that uses Model–view–controller (MVC) architecture, data binding, client-side templates, and dependency injection to create a much-needed structure for building web apps. Guided by two engineers who worked on AngularJS at Google, you’ll walk through the framework’s key features, and then build a working AngularJS app—from layout to testing, compiling, and debugging. If you have JavaScript experience, you’ll learn how AngularJS helps reduce the complexity of your web app. Dive deep into Angular’s building blocks and learn how they work together Gain maximum flexibility by separating logic, data, and presentation responsibilities with MVC Assemble your full app in the browser, using client-side templates Use AngularJS directives to extend HTML with declarative syntax Communicate with the server and implement simple caching with the $http service Use dependency injection to improve refactoring, testability, and multiple environment design Get code samples for common problems you face in most web apps",
      "industryIdentifiers": [
        {
          "type": "ISBN_13",
          "identifier": "9781449355883"
        },
        {
          "type": "ISBN_10",
          "identifier": "1449355889"
        }
      ],
      "readingModes": {
        "text": false,
        "image": true
      },
      "pageCount": 196,
      "printType": "BOOK",
      "categories": [
        "Computers"
      ],
      "averageRating": 2.5,
      "ratingsCount": 4,
      "maturityRating": "NOT_MATURE",
      "allowAnonLogging": false,
      "contentVersion": "0.2.0.0.preview.1",
      "imageLinks": {
        "smallThumbnail": "http://books.google.com/books/content?id=eNExy_X1YYcC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        "thumbnail": "http://books.google.com/books/content?id=eNExy_X1YYcC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
      },
      "language": "en",
      "previewLink": "http://books.google.co.in/books?id=eNExy_X1YYcC&printsec=frontcover&dq=angular+js&hl=&cd=1&source=gbs_api",
      "infoLink": "http://books.google.co.in/books?id=eNExy_X1YYcC&dq=angular+js&hl=&source=gbs_api",
      "canonicalVolumeLink": "https://books.google.com/books/about/AngularJS.html?hl=&id=eNExy_X1YYcC"
    },
    "saleInfo": {
      "country": "IN",
      "saleability": "NOT_FOR_SALE",
      "isEbook": false
    },
    "accessInfo": {
      "country": "IN",
      "viewability": "PARTIAL",
      "embeddable": true,
      "publicDomain": false,
      "textToSpeechPermission": "ALLOWED",
      "epub": {
        "isAvailable": false
      },
      "pdf": {
        "isAvailable": false
      },
      "webReaderLink": "http://play.google.com/books/reader?id=eNExy_X1YYcC&hl=&printsec=frontcover&source=gbs_api",
      "accessViewStatus": "SAMPLE",
      "quoteSharingAllowed": false
    },
    "searchInfo": {
      "textSnippet": "This hands-on guide introduces you to AngularJS, the open source JavaScript framework that uses Model–view–controller (MVC) architecture, data binding, client-side templates, and dependency injection to create a much-needed structure ..."
    }
  }];

  const mockRouter = {
    navigate: jasmine.createSpy('navigate')
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BookdetailsComponent],
      imports: [FormsModule, ReactiveFormsModule, BrowserModule, MatButtonModule, MatInputModule,
        NoopAnimationsModule, MatCardModule, MatIconModule, MatDialogModule, RouterTestingModule],
      providers: [ provideMockStore({ initialState }), BooksFacade, { provide: Router, useValue: mockRouter }]
    })
      .compileComponents();
    store = TestBed.inject(MockStore);
    mockCollectionBooksSelector = store.overrideSelector(
      booksQuery.getAllBooks,
      initialState
    );
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
