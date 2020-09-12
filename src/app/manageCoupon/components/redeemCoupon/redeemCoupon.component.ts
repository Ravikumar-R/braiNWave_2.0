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
  msgs = [];
  redeemAmount: number;
  coupon: CouponBo;
  couponCode: string;
  constructor(private centraliseddbService: CentraliseddbService, private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
  }

  redeem() {
    this.coupon.amount = this.coupon.amount - this.redeemAmount;
    this.coupon.status = this.coupon.amount === 0 ? 'redeemed' : 'partial' ;
    this.centraliseddbService.updateCoupon(this.coupon);
    this.msgs.push({severity: 'success', detail: 'Sifi Redeemed Successfully '});
  }

  getCouponDetails() {
    this.coupon = this.centraliseddbService.getCoupon(this.couponCode);
  }
}
