import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ServiceComponent } from './service/service.component';

const routes: Routes = [
  {path:'',pathMatch:'full',component:HomeComponent},
  {path:'contact',component:ContactComponent},
  {path:'portfolio',component:PortfolioComponent},
  {path:'service',component:ServiceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
