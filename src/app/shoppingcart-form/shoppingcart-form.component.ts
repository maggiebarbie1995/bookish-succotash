import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shoppingcart-form',
  templateUrl: './shoppingcart-form.component.html',
  styleUrls: ['./shoppingcart-form.component.css']
})
export class ShoppingcartFormComponent implements OnInit {
  newItem = new Item ("","","",0,0, new Date());

  @Output() addItem = new EventEmitter<Item>();

  submitItem(){
    this.addItem.emit(this.newItem);
    alert("Your Item has been added.You can also add another one.");
    this.newItem = new Item (" ", " "," ",0,0, new Date())
  }


  constructor() { }

  ngOnInit(): void {
  }

}
