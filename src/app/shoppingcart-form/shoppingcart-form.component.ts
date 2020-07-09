import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductItem } from '../shoppingcart';
@Component({
  selector: 'app-shoppingcart-form',
  templateUrl: './shoppingcart-form.component.html',
  styleUrls: ['./shoppingcart-form.component.css']
})
export class ShoppingcartFormComponent implements OnInit {
  newItem = new ProductItem("" , 0 , "" , 0 , 0);

  @Output() addItem = new EventEmitter<ProductItem>();

  submitItem(){
    this.addItem.emit(this.newItem);
    alert("Your Item has been added.You can also add another one.");
    this.newItem = new ProductItem("" , 0 , "" , 0 , 0);
  }


  constructor() { }

  ngOnInit(): void {
  }

}
