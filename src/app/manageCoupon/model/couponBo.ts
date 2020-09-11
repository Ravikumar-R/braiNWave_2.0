export class CouponBo {
  id: number;
  type: string;
  amount: number;
  validFrom: Date;
  validTo: Date;
  recipientName: string;
  recipientPhoneNo: number;
  recipientEmail: string;
  status: string;
}
