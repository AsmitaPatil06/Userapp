import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpServiceService } from '../emp-service.service';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css'],
})
export class EmpListComponent implements OnInit {
  EmpList;
  // index: number;
  //users;
  constructor(private emp: EmpServiceService, private router: Router) {}

  ngOnInit(): void {
    this.get();
  }

  get() {
    this.emp.empGet().subscribe((res) => {
      console.log(res);

      this.EmpList = res;
    });
  }
  onEdit(list) {
    console.log('edit ');
    console.log(list);
    this.router.navigate(['header/edit', list.id]);
  }
  Ondelete(list) {
    this.emp.deleteEmp(list.id).subscribe((res) => {
      console.log(list.id);
      console.log('Deelted Data', list);

      console.log(
        (this.EmpList = this.EmpList.filter((item) => item.id !== list.id))
      );
    });
  }
}
