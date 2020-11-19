import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';

import { BillingpageComponent } from './billingpage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterTestingModule } from '@angular/router/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { MemoizedSelector, Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { BooksState } from '../../../store/books.reducer';
import { BooksFacade } from '../../../store/books.fascade';
import { booksQuery } from '../../../store/books.selector';
import { PurchasedialogueboxComponent } from '../purchasedialoguebox/purchasedialoguebox.component';

describe('BillingpageComponent', () => {
  let component: BillingpageComponent;
  let fixture: ComponentFixture<BillingpageComponent>;
  let store: MockStore;
  let mockCollectionBooksSelector: MemoizedSelector<BooksState, any>;
  const initialState = [{
    "bookinfo": [
      {
        "kind": "books#volume",
        "id": "96gMhjaAviMC",
        "etag": "9H4ISDT5PhY",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/96gMhjaAviMC",
        "volumeInfo": {
          "title": "Core Java(Tm) Volume 1-Fundamentals, 8/E",
          "authors": [
            "Horstmann"
          ],
          "publisher": "Pearson Education India",
          "publishedDate": "2008-09",
          "industryIdentifiers": [
            {
              "type": "ISBN_10",
              "identifier": "8131719456"
            },
            {
              "type": "ISBN_13",
              "identifier": "9788131719459"
            }
          ],
          "readingModes": {
            "text": false,
            "image": true
          },
          "pageCount": 864,
          "printType": "BOOK",
          "averageRating": 5,
          "ratingsCount": 2,
          "maturityRating": "NOT_MATURE",
          "allowAnonLogging": false,
          "contentVersion": "0.1.2.0.preview.1",
          "panelizationSummary": {
            "containsEpubBubbles": false,
            "containsImageBubbles": false
          },
          "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/content?id=96gMhjaAviMC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=96gMhjaAviMC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
          },
          "language": "en",
          "previewLink": "http://books.google.co.in/books?id=96gMhjaAviMC&pg=PT4&dq=java&hl=&cd=1&source=gbs_api",
          "infoLink": "http://books.google.co.in/books?id=96gMhjaAviMC&dq=java&hl=&source=gbs_api",
          "canonicalVolumeLink": "https://books.google.com/books/about/Core_Java_Tm_Volume_1_Fundamentals_8_E.html?hl=&id=96gMhjaAviMC"
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
          "webReaderLink": "http://play.google.com/books/reader?id=96gMhjaAviMC&hl=&printsec=frontcover&source=gbs_api",
          "accessViewStatus": "SAMPLE",
          "quoteSharingAllowed": false
        },
        "searchInfo": {
          "textSnippet": "<b>Java</b> Programming Core <b>Java</b> Volume I Fundamentals EIGHTH EDITION Cay S . <br>\nHorstmann Gary Cornell This revised edition of the classic Core <b>Java</b> , Volume 1 <br>\n– Fundamentals , is the definitive guide to <b>Java</b> for serious programmers who&nbsp;..."
        }
      }
    ],
    "billingData": {
      "email": "asas@gsh",
      "name": "sds",
      "phone": "87878",
      "address": "dsad"
    }
  }];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BillingpageComponent, PurchasedialogueboxComponent],
      imports: [FormsModule, ReactiveFormsModule, BrowserModule, MatButtonModule, MatInputModule,
        NoopAnimationsModule, MatCardModule, MatIconModule, MatDialogModule, RouterTestingModule],
      providers: [provideMockStore({ initialState }), BooksFacade]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    store = TestBed.inject(MockStore);
    mockCollectionBooksSelector = store.overrideSelector(
      booksQuery.getCollectionBooks,
      initialState
    );
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
