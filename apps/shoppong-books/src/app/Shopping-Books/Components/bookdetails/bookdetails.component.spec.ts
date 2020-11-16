import { async, ComponentFixture, TestBed } from '@angular/core/testing';

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

describe('BookdetailsComponent', () => {
  let component: BookdetailsComponent;
  let fixture: ComponentFixture<BookdetailsComponent>;
  let store: MockStore;
  const initialState = { loggedIn: false };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BookdetailsComponent],
      imports: [FormsModule, ReactiveFormsModule, BrowserModule, MatButtonModule, MatInputModule,
        NoopAnimationsModule, MatCardModule, MatIconModule, MatDialogModule, RouterTestingModule],
      providers: [ provideMockStore({ initialState }),]
    })
      .compileComponents();
      store = TestBed.inject(MockStore);
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
