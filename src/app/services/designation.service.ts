import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DesignationService {

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
