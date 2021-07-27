import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpServiceService } from '../emp-service.service';

@Component({
  selector: 'app-register-emp',
  templateUrl: './register-emp.component.html',
  styleUrls: ['./register-emp.component.css'],
})
export class RegisterEmpComponent implements OnInit {
  AddUser: FormGroup;
  editMode = false;
  list;
  constructor(
    private formBuilder: FormBuilder,
    private es: EmpServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.AddUser = this.formBuilder.group({
      name: ['', Validators.required],
      mobile: ['', Validators.required],
      email: ['', Validators.required],
      userName: ['', Validators.required],
      website: ['', Validators.required],
      companyName: ['', Validators.required],
      address: ['', Validators.required],
    });
  }

  onSubmit() {
    console.log(this.AddUser.value);
    this.list = JSON.stringify(this.AddUser.value);
    console.log(this.list);
    this.es.addEmp(this.list).subscribe((res) => {
      console.log(res);
    });
    this.router.navigate(['header']);
  }
}
