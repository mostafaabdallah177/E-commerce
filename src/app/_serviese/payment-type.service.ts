import { Injectable } from '@angular/core';
import { PaymentType } from './PaymentType.model';

@Injectable({
  providedIn: 'root',
})
export class PaymentTypeService {
  paymentArray = [
    { id: 1, name: 'Direct BankTransfare' },
    { id: 2, name: 'Visa' },
    { id: 3, name: 'Cheque Payment' },
    { id: 4, name: 'Paypal ' },
    { id: 5, name: 'Mastercard' },
    { id: 6, name: 'Meza' },
    { id: 7, name: 'On Dilivery' },
  ];
  constructor() {}
  getAllPymentTypes(): PaymentType[] {
    return [...this.paymentArray];
  }

  getpaymentTypeById(id: number): PaymentType | undefined {
    return this.paymentArray.find((c) => c.id === id);
  }

  save() {}
  updata() {}
  delete() {}
}
