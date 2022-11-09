import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestLeave } from '../models/requestleave.model';

@Injectable({
  providedIn: 'root'
})
export class RequestleaveService {


  constructor(private http:HttpClient) { }
  getAllLeaves():Observable<RequestLeave[]>{
    return this.http.get<RequestLeave[]>('https://localhost:44379/api/RequestLeave');

  }
  addLeave(request:RequestLeave):Observable<RequestLeave>
  {
    return this.http.post<RequestLeave>('https://localhost:44379/api/RequestLeave',request);
  }
  getLeave(leaveID:string):Observable<RequestLeave>
  {
    return this.http.get<RequestLeave>('https://localhost:44379/api/RequestLeave/'+leaveID);
    
  }
  updateLeave(leaveID:number,request:RequestLeave):Observable<RequestLeave>{
    return this.http.put<RequestLeave>('https://localhost:44379/api/RequestLeave?leaveID='+leaveID,request)
  }

  deleteLeave(leaveID:number):Observable<RequestLeave>
  {
   return this.http.delete<RequestLeave>('https://localhost:44379/api/RequestLeave/'+leaveID);
  }}
