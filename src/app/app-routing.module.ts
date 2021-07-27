import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpListComponent } from './emp-list/emp-list.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RegisterEmpComponent } from './register-emp/register-emp.component';

const routes: Routes = [
  //{ path: 'list', component: EmpListComponent },
  // { path: 'edit', component: RegisterEmpComponent },
  //{ path: 'create', component: RegisterEmpComponent },
  // { path: 'edit/:id', component: EmpListComponent },
  {
    path: 'header',
    component: HeaderComponent,
    children: [
      {
        path: 'create', // child route path
        component: RegisterEmpComponent, // child route component that the router renders
      },
      {
        path: 'home', // child route path
        component: HomeComponent, // child route component that the router renders
      },
      {
        path: 'edit/:index', // child route path
        component: RegisterEmpComponent, // child route component that the router renders
      },
      {
        path: '',
        component: EmpListComponent,
      },
    ],
  },
  { path: '', redirectTo: 'header', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
