import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DistrictComponent } from './pages/district/district.component';
import { LoginComponent } from './pages/login/login.component';
import { NavbarComponent } from './units/navbar/navbar.component';
import { SingleComponent } from './pages/single/single.component';
const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "district", component: DistrictComponent},
  {path: "login", component: LoginComponent},
  {path: "singlepage", component: SingleComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
