import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageCouponComponent, ViewCouponComponent, SearchCouponsComponent, RedeemCouponComponent, DepositCouponComponent } from './components';
import { Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { TableModule } from 'primeng/table';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';

const routes: Routes = [{ path: '', component: ManageCouponComponent }];

@NgModule({
  imports: [MessagesModule, MessageModule, CommonModule, FormsModule, ReactiveFormsModule, CalendarModule, DropdownModule, TableModule],
  declarations: [RedeemCouponComponent, ManageCouponComponent, ViewCouponComponent, SearchCouponsComponent, DepositCouponComponent],
})
export class ManageCouponModule {}
