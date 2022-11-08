import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from '../models/employee.model';
import { EmployeeDetails } from '../models/employeedetails.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {

  baseApiUrl:string=environment.baseApiUrl;
  constructor(private http:HttpClient) {}
  getAllEmployees():Observable<EmployeeDetails[]>{
    return this.http.get<EmployeeDetails[]>('https://localhost:44379/api/Employee');
  }
  addEmployee(addEmployeeRequest:Employee) : Observable<Employee>
  {
    return this.http.post<Employee>('https://localhost:44379/api/Employee',addEmployeeRequest);
  }
  getEmployee(id:string):Observable<Employee>
  {
    return this.http.get<Employee>('https://localhost:44379/api/Employee/'+id);
  }
  updateEmployee(id:number,updateEmployeeRequest:Employee):Observable<Employee>{
    return this.http.put<Employee>('https://localhost:44379/api/Employee/'+id,updateEmployeeRequest)
  }
  deleteEmployee(id:number):Observable<Employee>
  {
   return this.http.delete<Employee>('https://localhost:44379/api/Employee/'+id);
  }
}
