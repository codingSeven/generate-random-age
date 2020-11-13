import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  equipment=[];
  equipmentItems=[];
ngOnInit(){
  this.equipment= [
       {name: 'Duct Tape', mass: 0.5},
       {name: 'Space Camera', mass: 20},
       {name: 'Food', mass: 150},
       {name: 'Oxygen Tanks', mass: 400},
        ];

        this.equipmentItems.forEach((arrayItem, index)=> {
        this.equipmentItems[index].age=this.generateRandomInteger(20, 60);
       });
}

 generateRandomInteger(min, max) {
  return Math.floor(min + Math.random()*(max + 1 - min))
}
}
