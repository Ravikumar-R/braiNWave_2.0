import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CouponBo } from '../../model/couponBo';
import { CentraliseddbService } from 'src/app/centraliseddb.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manageCoupon',
  templateUrl: './manageCoupon.component.html',
  styleUrls: ['./manageCoupon.component.scss'],
})
export class ManageCouponComponent implements OnInit {
  minValidDate = new Date();
  couponTypes = [{ name: 'private' }, { name: 'public' }];
  couponForm: FormGroup;
  constructor(private centraliseddbService: CentraliseddbService, private formBuilder: FormBuilder, private router: Router) {}

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
    const coupneId = this.centraliseddbService.addCoupon(this.formCouponBo());
    this.router.navigate(['coupon', 'view', coupneId]);
  }
  formCouponBo(): CouponBo {
    const couponBo = new CouponBo();
    couponBo.type = this.couponForm.get('type').value.name;
    couponBo.amount = this.couponForm.get('amount').value;
    couponBo.validFrom = this.couponForm.get('validFrom').value;
    couponBo.validTo = this.couponForm.get('validTo').value;
    couponBo.recipientName = this.couponForm.get('recipientForm').get('name').value;
    couponBo.recipientPhoneNo = this.couponForm.get('recipientForm').get('phone').value;
    couponBo.recipientEmail = this.couponForm.get('recipientForm').get('email').value;
    couponBo.status = 'New';
    return couponBo;
  }
}
