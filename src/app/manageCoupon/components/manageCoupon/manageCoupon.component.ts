import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CouponBo } from '../../model/couponBo';

@Component({
  selector: 'app-manageCoupon',
  templateUrl: './manageCoupon.component.html',
  styleUrls: ['./manageCoupon.component.scss'],
})
export class ManageCouponComponent implements OnInit {
  minValidDate = new Date();
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
        phone: [null, Validators.required],
        email: [null],
      }),
    });
  }
  clear() {
    this.couponForm.reset();
  }
  save() {
    this.formCouponBo();
  }
  formCouponBo(): CouponBo {
    const couponBo = new CouponBo();
    couponBo.type = this.couponForm.get('type').value;
    couponBo.amount = this.couponForm.get('amount').value;
    couponBo.validFrom = this.couponForm.get('validFrom').value;
    couponBo.validTo = this.couponForm.get('validTo').value;
    couponBo.recipientName = this.couponForm.get('recipientForm').get('name').value;
    couponBo.recipientPhoneNo = this.couponForm.get('recipientForm').get('phone').value;
    couponBo.recipientEmail = this.couponForm.get('recipientForm').get('email').value;
    return couponBo;
  }
}
