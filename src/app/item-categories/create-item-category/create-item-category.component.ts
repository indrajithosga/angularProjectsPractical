/* #region angular imports */
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
/* #endregion */

/* #region 3rd party imports */

/* #endregion */

/* #region app imports */

/* #endregion */

interface Category {
  name: string;
  code: string;
}

@Component({
  selector: 'selector-create-item-category',
  templateUrl: './create-item-category.component.html',
  styleUrls: [
    './create-item-category.component.css',
    './create-item-category.component.scss',
  ],
})
export class CreateItemCategoryComponent implements OnInit {
  /* #region declarations */
  _pageTitle: string = 'Item Categories';
  _pageSubTitle: string = '/ New';
  _form: FormGroup;
  _tabIndex: number = 0;
  _parentCategories: Category[] = [];
  //_selectedParentCategory: Category = ;

  /* #endregion */

  /* #region constructor */
  constructor(private formBuilder: FormBuilder) {
    this._parentCategories = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' },
    ];
  }
  /* #endregion */

  /* #region lifecycle events */

  ngOnInit() {
    this._form = this.formBuilder.group({
      name: [null, [Validators.required, Validators.minLength(4),]],
      // email: [null, [Validators.required, Validators.email]],
      // address: this.formBuilder.group({
      //   street: [null, Validators.required],
      //   street2: [null],
      //   zipCode: [null, Validators.required],
      //   city: [null, Validators.required],
      //   state: [null, Validators.required],
      //   country: [null, Validators.required],
      //}),
    });
  }

  /* #endregion */

  /* #region events */

  onSubmit() {
    console.log(this._form);
    if (this._form.valid) {
      console.log('form submitted');
    } else {
      this.validateAllFormFields(this._form);
    }
  }

  /* #endregion */

  /* #region methods */

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach((field) => {
      console.log(field);
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  isFieldValid(field: string = "") {
    return !this._form.get(field).valid && this._form.get(field).touched;
  }

  displayFieldCss(field: string) {
    return {
      'has-error': this.isFieldValid(field),
      'has-feedback': this.isFieldValid(field),
    };
  }

  get name() { return this._form.get('name'); }


  /* #endregion */
}
