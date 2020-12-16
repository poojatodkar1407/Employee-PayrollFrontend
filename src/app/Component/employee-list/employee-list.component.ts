import { Component, OnInit , ViewChildren, QueryList} from '@angular/core';
import { UserService } from '../../Services/EmployeeService/user.service'
import { Employee } from "../../Employee";
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }
    return value;
  }
  @ViewChildren ('checkBox') checkBox:QueryList<any>;
  employee: Employee = new Employee();
  submitted = false;
  userDetail: FormGroup;
  checked = [];
  precio = 0;
  department =['Hr','Sales', 'Finance', 'Engineer','Other'];
  constructor(private employeeService: UserService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.userDetail = this.formBuilder.group({
      name: [null, Validators.compose([Validators.required, Validators.minLength(2),
      Validators.pattern('[a-zA-Z ]*$')])],
      salary: [null, Validators.required],
      gender: [null, Validators.required],
      day: [null, Validators.required],
      year: [null, Validators.required],
      month: [null, Validators.required]

    });

  
  }

  getCheckbox(checkbox){
    this.checked = [];
    const checked = this.checkBox.filter(checkbox => checkbox.checked);
    checked.forEach(data => {
         this.checked.push (data.value
         )
    })
  }

  getPrecio(event) {
    this.precio = event.value;
  }


  employeeSalary = [
    {
      "bucket": "less than 10000",
      "month": "Jan"
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

  Department = [
    'Hr',
    'Sales',
    'Finance',
    'Engineer',
    'Other',
  ];

  newEmployee(): void {
    this.submitted = false;
    this.employee = new Employee();
  }

  register() {
    console.log(this.checked)
    var x = this.checked.toString();
    console.log(x)
    var employeeDto = {
      'name': this.userDetail.controls['name'].value,
      'salary': this.precio,
      'department':this.checked.toString(),
      'gender': this.userDetail.controls['gender'].value,
      'startDate': this.userDetail.controls['day'].value + " " + this.userDetail.controls['month'].value + " " + this.userDetail.controls['year'].value
    };
    console.log("employee dto is", employeeDto)
    this.employeeService.createEmployee(employeeDto).subscribe((response: any) => {
      console.log("response is " + response);
    })
  }

  onSubmit() {
    this.submitted = true;
    this.register();
  }



}
