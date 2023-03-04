import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { DistrictComponent } from './pages/district/district.component';
import { LoginComponent } from './pages/login/login.component';
import { NavbarComponent } from './units/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { SingleComponent } from './pages/single/single.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DistrictComponent,
    LoginComponent,
    NavbarComponent,
    SingleComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
