import { Component, OnInit } from '@angular/core';
import { PaymentType } from 'src/app/_serviese/PaymentType.model';

@Component({
  selector: 'app-paymenttypes',
  templateUrl: './paymenttypes.component.html',
  styleUrls: ['./paymenttypes.component.scss'],
})
export class PaymenttypesComponent implements OnInit {
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

  ngOnInit(): void {}
}
