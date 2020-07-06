import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import {ProductItem, Item} from '../shoppingcart';


@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  productItem: Item[] = [
    new ProductItem(1, 'McLaren 570S', 30000, 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRComvonqa5PiDA1ljHlfOX-lmr7FrlAMaKQQ&usqp=CAU'),
    new ProductItem(2,'lamborghini Galardo',63000, 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRYQ1kG3XIK1o7xNb53VIalZ4BaBWR4S4gQtA&usqp=CAU'),
    new ProductItem(3,'Lotus Exige 410', 102000, 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRvgFsoAzx5LViXBOoha9E2oW6fsVTUrDZMOw&usqp=CAU'),
    new ProductItem(4,'Porsche 911 Turbo S Cabriot', 35000, 'https://www.carpixel.net/t/99380/f5162b3092565a28888a3ebe8be46160.jpg'),
    new ProductItem(5, 'Opel Mokka-e 2020', 30000, 'https://www.carpixel.net/t/99738/68f6ce6dc1c1fe34bb3a80823dd789ce.jpg'),
    new ProductItem(6,'Marcedes Benz', 133000, 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ5bSQ189dkHCCP1wvdcVRICqj5rs4fCqrvSA&usqp=CAU'),
    new ProductItem(7,'Ferrari Enzo', 102000, 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSeFYuhLkqllRk3lH-LEeWQF4MAMKHwaT2xUg&usqp=CAU'),
    new ProductItem(8,'BMW X6', 35000, 'https://www.carpixel.net/t/99188/bb10afa5118cdee38c6f4c4037bbcdb4.jpg'),
  ]
  @Output() cartUpdated = new EventEmitter<{
    productid:string,
    productName:string,
    productPrice:string,
    itemName: string,
    itemValue: string,
    price:string,
    quantity:string,
    total:string,
    date:Date,
    Item:number    
  }>();  
  Item: any;
  
  constructor() { }

  ngOnInit(): void {
  }
  onCartUpdated(event) {
    const id = event.target.getAttribute('id');
    const index = this.productItem.findIndex(elem => elem.id == id);
    this.cartUpdated.emit({
        productId: this.productItem[index].id,
        productName: this.productItem[index].name,
        productPrice: this.productItem[index].price
      });
  }

}
