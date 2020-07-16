import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasedialogueboxComponent } from './purchasedialoguebox.component';

describe('PurchasedialogueboxComponent', () => {
  let component: PurchasedialogueboxComponent;
  let fixture: ComponentFixture<PurchasedialogueboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchasedialogueboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasedialogueboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
