import { Component } from '@angular/core';
import { data } from 'src/assets/data';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent {
district:any

ngOnInit(){
  let title = localStorage.getItem("title")
  this.district = data.filter(e=>e.title == title)
}

}
