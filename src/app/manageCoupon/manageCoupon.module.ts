import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageCouponComponent, ViewCouponComponent, SearchCouponsComponent, RedeemCouponComponent } from './components';
import { Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { TableModule } from 'primeng/table';

const routes: Routes = [{ path: '', component: ManageCouponComponent }];

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, CalendarModule, DropdownModule, TableModule],
  declarations: [RedeemCouponComponent, ManageCouponComponent, ViewCouponComponent, SearchCouponsComponent],
})
export class ManageCouponModule {}
