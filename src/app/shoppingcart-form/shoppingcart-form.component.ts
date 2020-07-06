import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Item } from '../shoppingcart';
@Component({
  selector: 'app-shoppingcart-form',
  templateUrl: './shoppingcart-form.component.html',
  styleUrls: ['./shoppingcart-form.component.css']
})
export class ShoppingcartFormComponent implements OnInit {
  newItem = new Item ("","","","","",new Date(),0);

  @Output() addItem = new EventEmitter<Item>();

  submitItem(){
    this.addItem.emit(this.newItem);
    alert("Your Item has been added.You can also add another one.");
    this.newItem = new Item (" ", " "," ","","",new Date(),0);
  }


  constructor() { }

  ngOnInit(): void {
  }

}
