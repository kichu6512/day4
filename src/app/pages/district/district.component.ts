import { Component } from '@angular/core';
import { Router } from '@angular/router';
import{ data } from 'src/assets/data';


@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.css']
})
export class DistrictComponent {
collections = data

constructor(private router:Router){}

goTo(title:any){

  localStorage.setItem("title",title)
this.router.navigate(['/singlepage'])


}
}
