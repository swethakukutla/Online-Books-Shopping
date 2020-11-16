import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { Store } from '@ngrx/store';

import { PurchasedialogueboxComponent } from '../purchasedialoguebox/purchasedialoguebox.component';
import { AddBooksToCollection } from '../../../store/books.actions';
import { booksQuery } from '../../../store/books.selector';
import { IBook } from '../../interfaces/books.interface';

@Component({
  selector: 'shopping-books-billingpage',
  templateUrl: './billingpage.component.html',
  styleUrls: ['./billingpage.component.css']
})

export class BillingpageComponent implements OnInit {
  billingForm: FormGroup;
  cartBook: IBook[];
  billing: {
    name: '';
    email: '';
    phone: 0;
    address: '';
  }

  constructor(private dialog: MatDialog, private store: Store) {
    this.store.select(booksQuery.getCartBooks).subscribe( data => {
      this.cartBook = data;
    })
  }

  ngOnInit(): void {
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
    this.cartBook.forEach(book => {
      collection.bookinfo.push(book);
      collection.billingData = this.billing;
      this.store.dispatch(AddBooksToCollection({payload: collection}));
    });
  }
}
