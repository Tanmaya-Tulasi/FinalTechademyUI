import { Component, OnInit } from '@angular/core';
import { PaymentRules } from 'src/app/models/paymenyrules.model';
import { PaymentrulesService } from 'src/app/services/paymentrules.service';

@Component({
  selector: 'app-payment-rule-details',
  templateUrl: './payment-rule-details.component.html',
  styleUrls: ['./payment-rule-details.component.css']
})
export class PaymentRuleDetailsComponent implements OnInit {

  PaymentRulesDetails : PaymentRules[] =[];
  constructor(private paymentrulesdetails : PaymentrulesService) { }

  ngOnInit(): void {
    this.paymentrulesdetails.getAllPaymentRules()
    .subscribe({
      next : (PaymentRulesDetails) =>
      {
        this.PaymentRulesDetails = PaymentRulesDetails;
      },
      error : (response) =>
      {
        console.log(response);
      }
    })
  }
}
