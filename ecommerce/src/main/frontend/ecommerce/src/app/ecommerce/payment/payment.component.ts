import { Component } from '@angular/core';
import {render} from 'creditcardpayments/creditCardPayments';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {

  constructor(){
    render(
      {
        id: "#paypal-checkout-btn",
        currency: "EUR",
        value: "100.00",
        onApprove: (details) => {
          alert("Transaction Successfull");
        }
      }
    );
  }

}


