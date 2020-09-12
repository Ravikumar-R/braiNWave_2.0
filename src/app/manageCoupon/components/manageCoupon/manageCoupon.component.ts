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
  msgs = [];
  constructor(private centraliseddbService: CentraliseddbService, private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.initialiseForm();
    this.valueChanges();
  }
  initialiseForm() {
    this.couponForm = this.formBuilder.group({
      accessType: [null, Validators.required],
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
   valueChanges() {
  this.couponForm.get('accessType').valueChanges.subscribe(accessType => {
  this.couponForm.get('amount').reset();
  });
  this.couponForm.get('amount').valueChanges.subscribe(amount => {
  if(this.couponForm.get('accessType').value.name === 'private' && amount > 500) {
     this.msgs.push({severity: 'error', detail: "For Sifi Type Private Amount can't exceed 500" })
  } else {
     this.msgs = [];
  }
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
    couponBo.accessType = this.couponForm.get('accessType').value.name;
    couponBo.amount = this.couponForm.get('amount').value;
    couponBo.validFrom = this.couponForm.get('validFrom').value;
    couponBo.validTo = this.couponForm.get('validTo').value;
    couponBo.recipientName = this.couponForm.get('recipientForm').get('name').value;
    couponBo.recipientPhoneNo = this.couponForm.get('recipientForm').get('phone').value;
    couponBo.recipientEmail = this.couponForm.get('recipientForm').get('email').value;
    couponBo.status = 'New';
    couponBo.type = 'Generated';
    return couponBo;
  }
}
