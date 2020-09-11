import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { CouponBo } from '../../model/couponBo';
import { CentraliseddbService } from 'src/app/centraliseddb.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reedemCoupon',
  templateUrl: './redeemCoupon.component.html',
  styleUrls: ['./redeemCoupon.component.scss']
})
export class RedeemCouponComponent implements OnInit {
  redeemAmount: number;
  coupon: CouponBo;
  couponCode: string;
  constructor(private centraliseddbService: CentraliseddbService, private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
  }

  redeem() {
  }
  getCouponDetails() {
    this.coupon = this.centraliseddbService.getCoupon(this.couponCode);
  }
}
