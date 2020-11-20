import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { PurchasedialogueboxComponent } from '../purchasedialoguebox/purchasedialoguebox.component';
import { IBook } from '../../interfaces/books.interface';
import { BooksFacade } from '../../../store/books.fascade';

@Component({
  selector: 'shopping-books-billingpage',
  templateUrl: './billingpage.component.html',
  styleUrls: ['./billingpage.component.css']
})

export class BillingpageComponent implements OnInit {
  billingForm: FormGroup;
  cartBook$: Observable <IBook[]>;
  billing: {
    name: '';
    email: '';
    phone: 0;
    address: '';
  }


  constructor(private dialog: MatDialog, private store: Store, private bookFacade: BooksFacade) { }

  ngOnInit(): void {
    this.cartBook$ = this.bookFacade.cartBooks$;
    this.addFormFieldValidations();
  }

  private addFormFieldValidations() {
    this.billingForm = new FormGroup({
        email: new FormControl('', {
        validators: [Validators.required, Validators.email]
      }),
      name: new FormControl('', { validators: [Validators.required] }),
      phone: new FormControl('', { validators: [Validators.required] }),
      address: new FormControl('', { validators: [Validators.required] })
    });
  }
  onSubmit() {
    this.openDialog();
    this.setBillingAddress();
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(PurchasedialogueboxComponent, {
      width: '300px',
      data: {msg: "Purchase is successful"}
    });
  }

  public setBillingAddress() {
    this.billing = this.billingForm.value;
    const collection = {
      bookinfo: [],
      billingData: {
        name: '',
      }
    };
    this.cartBook$.forEach(book => {
      collection.bookinfo.push(...book);
      collection.billingData = this.billing;
      this.bookFacade.addToCollection(collection);
    });
  }
}
