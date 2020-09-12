/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DepositCouponComponent } from './despositCoupon.component';

describe('RedeemCouponComponent', () => {
  let component: DepositCouponComponent;
  let fixture: ComponentFixture<DepositCouponComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepositCouponComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositCouponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
