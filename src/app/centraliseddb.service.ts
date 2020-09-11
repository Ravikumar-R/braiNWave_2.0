import { Injectable } from '@angular/core';
import { CouponBo } from './manageCoupon/model/couponBo';

@Injectable({
  providedIn: 'root',
})
export class CentraliseddbService {
  localStorage: Storage;

  constructor() {}

  getCoupon(couponID): CouponBo {
    return JSON.parse(localStorage.getItem(couponID));
  }

  addCoupon(coupon: CouponBo): number {
    const couponID = Math.random();
    coupon.id = couponID;
    localStorage.setItem(couponID.toString(), JSON.stringify(coupon));
    return couponID;
  }

  clearOne(couponID: number) {
    localStorage.removeItem(couponID.toString());
  }

  getCouponList() {
    const couponList: CouponBo[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      couponList.push(this.getCoupon(localStorage.key(i)));
    }
    return couponList;
  }

  clearAll() {
    localStorage.clear();
  }
}
