import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeListDashComponent } from './employee-list-dash.component';

describe('EmployeeListDashComponent', () => {
  let component: EmployeeListDashComponent;
  let fixture: ComponentFixture<EmployeeListDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeListDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeListDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
