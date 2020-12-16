import { Component, OnInit } from '@angular/core';
import { UserService} from '../../Services/EmployeeService/user.service'
import { Employee } from "../../Employee";
import { FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  employee: Employee = new Employee();
  submitted = false;
  userDetail: FormGroup;

  constructor(private employeeService: UserService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.userDetail = this.formBuilder.group({
      name: [null, Validators.compose([Validators.required, Validators.minLength(2),
      Validators.pattern('[a-zA-Z ]*$')])],
      salary: [null, Validators.required],
      department: [null, Validators.required],
      gender: [null, Validators.required],
      day: [null, Validators.required],
      year: [null, Validators.required],
      month: [null, Validators.required]
      
    });
  
  }

  employeeSalary = [
    {
      "bucket": "less than 10000",
      "month":"Jan"
    },
    {
      "bucket": "20000"
    },
    {
      "bucket": "30000"
    },
    {
      "bucket": "1 Lakh"
    },
    {
      "bucket": "more than 1 Lakh"
    }
  ]

  Day = [
    '1',
    '2',
    '3',
    '4',
    '5',
  ];

  Month = [
    'Jan',
    'Feb',
    'March',
    'April',
    'May',
  ];

  Year = [
    '2001',
    '2002',
    '2003',
    '2004',
    '2005',
  ];

  newEmployee(): void {
    this.submitted = false;
    this.employee = new Employee();
  }

  register() {
    var employeeDto = {
      'name': this.userDetail.controls['name'].value,
      'salary': this.userDetail.controls['salary'].value,
      'department': this.userDetail.controls['department'].value,
      'gender': this.userDetail.controls['gender'].value,
      'startDate': this.userDetail.controls['day'].value + " "+this.userDetail.controls['month'].value +" "+this.userDetail.controls['year'].value
    };
    console.log("employee dto is",employeeDto)
      this.employeeService.createEmployee(employeeDto).subscribe((response:any) => {
      console.log("response is "+response);
    })
  }

  onSubmit() {
    this.submitted = true;
    this.register();
  }

  

}
