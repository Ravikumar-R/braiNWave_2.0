import { Component, OnInit } from '@angular/core';
import { CouponBo } from '../../model/couponBo';
import { CentraliseddbService } from 'src/app/centraliseddb.service';

@Component({
  selector: 'app-searchCoupons',
  templateUrl: './searchCoupons.component.html',
  styleUrls: ['./searchCoupons.component.scss']
})
export class SearchCouponsComponent implements OnInit {

  colGroup: any[];
  couponList: CouponBo[];
  constructor(private centraliseddbService: CentraliseddbService) { }

  ngOnInit() {
    this.couponList = this.centraliseddbService.getCouponList();
    this.initialiseColGroup();
  }

  initialiseColGroup() {
    this.colGroup = [
      {
      header: 'Sifi Access',
      field: 'accessType'
    },
    {
      header: 'Valid From',
      field: 'validFrom'
    },
    {
      header: 'Valid To',
      field: 'validTo'
    },
    {
      header: 'Amount',
      field: 'amount'
    },
    {
      header: 'Recipient Name',
      field: 'recipientName'
    },
    {
      header: 'Recipient Phone',
      field: 'recipientPhoneNo'
    },
    {
      header: 'Recipient Email',
      field: 'recipientEmail'
    },
    {
      header: 'Sifi Type',
      field: 'type'
    },
    {
      header: 'Status',
      field: 'status'
    },
    {
      header: 'Action',
      field: '',
      delete: (row) => {
       this.centraliseddbService.clearOne(row.id);
    }
    }
  ];
  }

}
