import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { UserService } from '../../Services/EmployeeService/user.service'
import { Employee } from "../../Employee";
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

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
  @ViewChildren('checkBox') checkBox: QueryList<any>;
  employee: Employee = new Employee();
  id: any;
  a: boolean = false;
  submitted = false;
  userDetail: FormGroup;
  checked = [];
  precio = 0;
  employees: any;
  isEdit: Boolean;
  departments: string[] =[]
  department = ['Hr', 'Sales', 'Finance', 'Engineer', 'Other'];
  constructor(private employeeService: UserService,
    private formBuilder: FormBuilder, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {

    this.userDetail = this.formBuilder.group({
      name: [null, Validators.compose([Validators.required, Validators.minLength(2),
      Validators.pattern('[a-zA-Z ]*$')])],
      salary: [null, Validators.required],
      dept: [null, Validators.required],
      gender: [null, Validators.required],
      day: [null, Validators.required],
      year: [null, Validators.required],
      month: [null, Validators.required],
      department:[null, Validators.required]
    });

    this.route.params.subscribe(param => {
      console.log(param)
      if (param && param.id) {
        console.log("inside if")
        this.employeeService.getEmployee(param.id).subscribe((response: any) => {
          console.log(response)
          this.id = param.id;
          this.isEdit = true;
          this.userDetail.controls["name"].setValue(response.name)
           this.userDetail.controls["salary"].setValue(response.salary)
           this.userDetail.controls["gender"].setValue(response.gender)
           var str = response.startDate;
           var splited: [0, 1, 2] = str.split(" ");
          // console.log("splitted is", splited)
           this.departments = response.departments;         
          console.log("department", this.departments)
          this.userDetail.controls["day"].setValue(splited[0])
          this.userDetail.controls["month"].setValue(splited[1])
          this.userDetail.controls["year"].setValue(splited[2])

        })
      }
    })
  }

  getCheckbox() {
    this.checked = [];
    const checked = this.checkBox.filter(checkbox => checkbox.checked);
    checked.forEach(data => {
      this.checked.push(data.value
      )
    })
    console.log(this.checked)
  }

  getPrecio(event) {
    this.precio = event.value;
  }


  employeeSalary = [
    {
      "bucket": "less than 10000",
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
    var x = this.checked;
    console.log(x)
    var employeeDto = {
      'name': this.userDetail.controls['name'].value,
      'salary': this.precio,
      'departments': this.checked,
      'gender': this.userDetail.controls['gender'].value,
      'startDate': this.userDetail.controls['day'].value + " " + this.userDetail.controls['month'].value + " " + this.userDetail.controls['year'].value
    };
    console.log("employee dto is", employeeDto)
    this.employeeService.createEmployee(employeeDto).subscribe((response: any) => {
      console.log("response is " + response.message
      );
      this.router.navigate(["/"]);
      console.log("response", response.object)
    })
  }

  update() {
    console.log(this.userDetail.controls['gender'].value+" "+this.userDetail.controls['month'].value)
    var employeeDto = {
      'id': this.id,
      'name': this.userDetail.controls['name'].value,
      'salary': this.precio,
      'departments': this.checked,
      'gender': this.userDetail.controls['gender'].value,
      'startDate': this.userDetail.controls['day'].value + " " + this.userDetail.controls['month'].value + " " + this.userDetail.controls['year'].value
    };

    this.employeeService.updateEmployee(employeeDto).subscribe((response: any) => {
      console.log("response is " + response);
      this.router.navigate(["/"]);

    })
  }

  onSubmit() {
    this.submitted = true;
    this.register();
  }

  reset() {
    this.userDetail.reset();
  }

  toggleCheckBox(dept){
    return (this.departments.includes(dept)) ? true : false;
 }
}