import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-shoppingcart-details',
  templateUrl: './shoppingcart-details.component.html',
  styleUrls: ['./shoppingcart-details.component.css']
})
export class ShoppingcartDetailsComponent implements OnInit {
   total:number = 0;
  @Input() Item:number;
  
    constructor() { }

  ngOnInit(): void {
  }

}
