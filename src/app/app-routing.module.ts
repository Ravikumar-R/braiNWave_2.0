import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageCouponComponent, ViewCouponComponent, SearchCouponsComponent } from './manageCoupon/components';
import { HomeComponent } from './home';

const routes: Routes = [
  { path: '', redirectTo: 'coupon', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'coupon',
    children: [
      { path: '', redirectTo: 'create' , pathMatch: 'full'},
      { path: 'create', component: ManageCouponComponent },
      { path: 'edit/:couponId', component: ManageCouponComponent },
      { path: 'view/:couponId', component: ViewCouponComponent },
      { path: 'search', component: SearchCouponsComponent }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
