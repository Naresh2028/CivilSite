import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { EnquiryComponent } from './enquiry/enquiry.component';
import {DashboardComponent} from './dashboard/dashboard.component';

const routes: Routes = [
  {path:'contact',component:ContactComponent},
  {path:'Login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'enquiry',component:EnquiryComponent},
  {path:'',pathMatch:'full',component:HomeComponent},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
