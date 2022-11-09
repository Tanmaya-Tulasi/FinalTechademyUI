import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PaymentRules } from '../models/paymenyrules.model';
import { WorkingHours } from '../models/workinghours.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentrulesService {

  
  baseApiUrl:string=environment.baseApiUrl;
  constructor(private http:HttpClient) {}
  getAllPaymentRules():Observable<PaymentRules[]>{
    return this.http.get<PaymentRules[]>('https://localhost:44379/api/PaymentRules');
  }
  addPaymentRules(addPaymentRulesRequest:PaymentRules) : Observable<PaymentRules>
  {
    return this.http.post<PaymentRules>('https://localhost:44379/api/PaymentRules',addPaymentRulesRequest);
  }
  getPaymentRules(id:string):Observable<PaymentRules>
  {
    return this.http.get<PaymentRules>('https://localhost:44379/api/PaymentRules/'+id);
  }
  updatePaymentRules(id:number,updatePaymentRulesRequest:PaymentRules):Observable<PaymentRules>{
    return this.http.put<PaymentRules>('https://localhost:44379/api/PaymentRules/'+id,updatePaymentRulesRequest)
  }
  deletePaymentRules(id:number):Observable<PaymentRules>
  {
   return this.http.delete<PaymentRules>('https://localhost:44379/api/PaymentRules/'+id);
  }

}
