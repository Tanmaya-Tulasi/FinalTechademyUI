import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WorkingHours } from '../models/workinghours.model';

@Injectable({
  providedIn: 'root'
})
export class WorkinghoursService {

  baseApiUrl:string=environment.baseApiUrl;
  constructor(private http:HttpClient) {}
  getAllWorkingHours():Observable<WorkingHours[]>{
    return this.http.get<WorkingHours[]>('https://localhost:44379/api/WorkingHour');
  }
  addWorkingHours(addWorkingHoursRequest:WorkingHours) : Observable<WorkingHours>
  {
    return this.http.post<WorkingHours>('https://localhost:44379/api/WorkingHour',addWorkingHoursRequest);
  }
  getWorkingHours(id:string):Observable<WorkingHours>
  {
    return this.http.get<WorkingHours>('https://localhost:44379/api/WorkingHour/'+id);
  }
  updateWorkingHours(id:number,updateWorkingHoursRequest:WorkingHours):Observable<WorkingHours>{
    return this.http.put<WorkingHours>('https://localhost:44379/api/WorkingHour/'+id,updateWorkingHoursRequest)
  }
  deleteWorkingHours(id:number):Observable<WorkingHours>
  {
   return this.http.delete<WorkingHours>('https://localhost:44379/api/WorkingHour/'+id);
  }}
