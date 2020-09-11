import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CouponBo } from '../../model/couponBo';
import { CentraliseddbService } from 'src/app/centraliseddb.service';

@Component({
  selector: 'app-viewCoupon',
  templateUrl: './viewCoupon.component.html',
  styleUrls: ['./viewCoupon.component.scss'],
})
export class ViewCouponComponent implements OnInit {
  coupon: CouponBo;
  constructor(
    private routee: ActivatedRoute,
    private centraliseddbService: CentraliseddbService
  ) {}
  ngOnInit() {
    const coupounId = this.routee.snapshot.params['couponId'];
    this.coupon = this.centraliseddbService.getCoupon(coupounId);
  }
}
