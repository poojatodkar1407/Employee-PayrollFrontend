import { Component, OnInit } from '@angular/core';
import { UserService} from '../../Services/EmployeeService/user.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list-dash',
  templateUrl: './employee-list-dash.component.html',
  styleUrls: ['./employee-list-dash.component.scss']
})
export class EmployeeListDashComponent implements OnInit {
  employees: any;
  color;
  constructor(private employeeService: UserService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.employeeService.getEmployeesList().subscribe((response:Response)=>{
      console.log("Response is ====> ",response)
       this.employees = response;
    })
  }

  deleteEmployee(id) {
    console.log(id)
     this.employeeService.deleteEmployee(id)
       .subscribe((response:any) => {
         console.log(response)
         this.reloadData();
       })
  }

  changeColorOne() {
    this.color = !this.color;
    if (this.color) {
      return '#ffffff';
    } else {
     return '#f6f6f6';
    }
 }
}
