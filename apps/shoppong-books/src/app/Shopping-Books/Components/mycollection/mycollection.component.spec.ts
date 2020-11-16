import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MycollectionComponent } from './mycollection.component';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterTestingModule } from '@angular/router/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

describe('MycollectionComponent', () => {
  let component: MycollectionComponent;
  let fixture: ComponentFixture<MycollectionComponent>;
  let store: MockStore;
  const initialState = { loggedIn: false };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MycollectionComponent],
      imports: [BrowserModule, MatButtonModule, MatInputModule, MatCardModule, MatIconModule, RouterTestingModule],
      providers: [provideMockStore({ initialState })]
    })
      .compileComponents();
      store = TestBed.inject(MockStore);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MycollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    // component.collectionBooks = store.select();
    // expect(component.collectionBooks).toBeDefined();
  });
});
