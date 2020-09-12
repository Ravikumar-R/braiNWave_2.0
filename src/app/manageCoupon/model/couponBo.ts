export class CouponBo {
  id: number;
  accessType: string;
  type: string;
  amount: number;
  validFrom: Date;
  validTo: Date;
  issuerDetails: IssuerBo;
  recipientName: string;
  recipientPhoneNo: number;
  recipientEmail: string;
  status: string;
}

export class IssuerBo {
  name: string;
  phoneNumber: number;
}