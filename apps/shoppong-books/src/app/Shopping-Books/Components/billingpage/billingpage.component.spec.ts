import { async, ComponentFixture, TestBed } from '@angular/core/testing';

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
import { of } from 'rxjs';
import { Store } from '@ngrx/store';

const data = {
  isLoaded : false,
};

class TestStore {
  public select() {
      return of(data);
  }
  public dispatch() {

  }
}

describe('BillingpageComponent', () => {
  let component: BillingpageComponent;
  let fixture: ComponentFixture<BillingpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BillingpageComponent],
      imports: [FormsModule, ReactiveFormsModule, BrowserModule, MatButtonModule, MatInputModule,
        NoopAnimationsModule, MatCardModule, MatIconModule, MatDialogModule, RouterTestingModule],
      providers: [{provide: Store, useClass: TestStore}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
