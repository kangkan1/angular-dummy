import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Items } from '../shared/Item';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    CommonModule,
    FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  items: Items[] =[
    // new Items("Happy"),
    // new Items("Hellow"),
    // new Items("Hello World!", true),
  ];
  newItemText = "";
  isCompleted = false;
  listFilter = ""
  title = 'Practice 11';


  checkBoxClick(e: Items){
    console.log('Checkbox clicked')
    e.isComplete = !e.isComplete
    console.log(e)
  }
  addNewItems(){
    console.log('adding new items');
    console.log(this.newItemText)
    let itemName = this.newItemText;
    console.log(this.newItemText);
    console.log(this.isCompleted);
    if(itemName.length < 1){

      alert("It should be more than 1 length");
      return;
    }
    this.items.push(new Items(itemName,this.isCompleted));
    this.newItemText = "";
  }
  filterChanged(e : any){
    console.log("svsrd");
    console.log(e);
  }
}
