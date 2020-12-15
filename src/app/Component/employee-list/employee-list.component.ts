import { Component, OnInit } from '@angular/core';
import { UserService} from '../../Services/EmployeeService/user.service'
import { Employee } from "../../Employee";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  employee: Employee = new Employee();
  submitted = false;

  constructor(private employeeService: UserService) { }

  ngOnInit() {
  }

  newEmployee(): void {
    this.submitted = false;
    this.employee = new Employee();
  }

  save() {
    this.employeeService.createEmployee(this.employee).subscribe((response:any) => {
      console.log(response);
    })
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

}
