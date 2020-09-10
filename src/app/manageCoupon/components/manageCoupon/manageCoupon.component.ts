import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-manageCoupon',
  templateUrl: './manageCoupon.component.html',
  styleUrls: ['./manageCoupon.component.scss'],
})
export class ManageCouponComponent implements OnInit {
  couponTypes = [{ name: 'private' }, { name: 'public' }];
  coupon: string;
  couponForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.initialiseForm();
  }
  initialiseForm() {
    this.couponForm = this.formBuilder.group({
      type: [null, Validators.required],
      amount: [null, Validators.required],
      validFrom: [null, Validators.required],
      validTo: [null, Validators.required],
      recipientForm: this.formBuilder.group({
        name: [null, Validators.required],
        phone: [null],
        email: [null],
      }),
    });
  }
  clear() {}
  save() {}
}
