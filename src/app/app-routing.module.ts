import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Component/login/login.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { PagenotfoundComponent } from './Component/pagenotfound/pagenotfound.component';
import { CreatestudentComponent } from './Component/createstudent/createstudent.component';
import { authGuardsGuard } from './Authentication/auth-guards.guard';
import { MenubarcomponentComponent } from './Menubar/menubarcomponent/menubarcomponent.component';
import { StudentformComponent } from './Component/studentform/studentform.component';
import { StudentdetailsComponent } from './Component/studentdetails/studentdetails.component';


const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path: 'studentform', component: StudentformComponent},
  {path: "menubar", component:MenubarcomponentComponent, canActivate:[authGuardsGuard],
        children:[
          {path: 'studentdetails/:id', component: StudentdetailsComponent},
          {path: 'editstudent/:id', component:CreatestudentComponent}
        ]
  },
  {path:'createstudent', component: CreatestudentComponent},
  {path:'dashboard', component:DashboardComponent,children:[
    {path: 'studentdetails/:id', component: StudentdetailsComponent},
          {path: 'editstudent/:id', component:CreatestudentComponent}
  ]},

  {path:'', component: LoginComponent},
  {path:"", component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
