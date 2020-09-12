import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sideBar',
  templateUrl: './sideBar.component.html',
  styleUrls: ['./sideBar.component.scss']
})
export class SideBarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  createSifi() {
    this.router.navigate(['coupon', 'create']);
  }
  searchSifi() {
    this.router.navigate(['coupon', 'search']);
  }
  redeemSifi() {
    this.router.navigate(['coupon', 'redeem']);
  }
  depositSifi() {
    this.router.navigate(['coupon', 'deposit']);
  }
}