import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';
import { Item } from '../shoppingcart';

@Component({
  selector: 'app-shoppingcart-details',
  templateUrl: './shoppingcart-details.component.html',
  styleUrls: ['./shoppingcart-details.component.css']
})
export class ShoppingcartDetailsComponent implements OnInit {
   total:number = 0;
  @Input() Item:number;
  @Input() Items:Item[];
  @Output() ItemDeleted = new EventEmitter<{productId:number}>();
  @Output() ItemChanged = new EventEmitter<{productId:number}>();
  
  onItemDeleted(productData:{productId: number}) {
    this.ItemDeleted.emit({
        productId: productData.productId
      });    
  }
  onItemChanged(productData:{productId: number}) {
    this.ItemChanged.emit({
        productId: productData.productId
      });    
  }
    constructor() { }

  ngOnInit(): void {
  }

}
