import { Injectable } from '@angular/core';
import { Employee } from '../shared/employee';
import { EMPLOYEES } from '../shared/employees';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor() {

   }

   getEmployees(): Employee[] {
    return EMPLOYEES;
  }

  getItem(id: number): Employee {
    return EMPLOYEES.filter(item => item.id === id)[0];
  }

  getFeaturedItem(): Employee {
    return EMPLOYEES.filter((item) => item.featured)[0];
  }
}
