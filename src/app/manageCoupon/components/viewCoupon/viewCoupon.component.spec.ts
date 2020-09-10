/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ViewCouponComponent } from './viewCoupon.component';

describe('ViewCouponComponent', () => {
  let component: ViewCouponComponent;
  let fixture: ComponentFixture<ViewCouponComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCouponComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCouponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
