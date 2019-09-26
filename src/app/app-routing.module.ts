import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { BlankComponent } from './component/blank/blank.component';
import { LayoutComponent } from './component/layout/layout.component';
import { UsersComponent } from './component/users/users.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {
    path: 'dashboard', component: LayoutComponent,
    children: [
      {path: '', component: DashboardComponent},
      {path: 'blank', component: BlankComponent},
      {path: 'users', component: UsersComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
