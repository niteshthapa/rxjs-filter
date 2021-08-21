import { Component,OnInit } from '@angular/core';
import { from} from 'rxjs';
import {filter,  toArray} from 'rxjs/operators'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  datas;
  arr=[
    {fname:"Nitesh",lname:"Thapa",age:33,city:"Delhi"},
    {fname:"saro",lname:"aski",age:23,city:"Chandigrah"},
    {fname:"James",lname:"sohapa",age:33,city:"Kolkata"},
    {fname:"sadro",lname:"daski",age:63,city:"Chandigrah"},
  ]
  ngOnInit() {
 
 from(this.arr).pipe(
  filter(a=> a.city =="Chandigrah"),
   toArray()
 ).subscribe(result=> this.datas = result)
  }

}
