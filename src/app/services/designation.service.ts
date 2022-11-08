import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Designation } from '../models/designation.model';

@Injectable({
  providedIn: 'root'
})
export class DesignationService {

  baseApiUrl:string=environment.baseApiUrl;
  constructor(private http:HttpClient) {}
  getAllDesignations():Observable<Designation[]>{
    return this.http.get<Designation[]>('https://localhost:44379/api/Designation');
  }
  addDesignation(addDesignationRequest:Designation) : Observable<Designation>
  {
    return this.http.post<Designation>('https://localhost:44379/api/Designation',addDesignationRequest);
  }
  getDesignation(id:string):Observable<Designation>
  {
    return this.http.get<Designation>('https://localhost:44379/api/Designation/'+id);
  }
  updateDesignation(id:number,updateDesignationRequest:Designation):Observable<Designation>{
    return this.http.put<Designation>('https://localhost:44379/api/Designation/'+id,updateDesignationRequest)
  }
  deleteDesignation(id:number):Observable<Designation>
  {
   return this.http.delete<Designation>('https://localhost:44379/api/Designation/'+id);
  }}
