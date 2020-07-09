import { Component, OnInit, Output,EventEmitter } from '@angular/core';

// import { ProductItem } from '../shoppingcart/shoppingcart.component';
import { ProductItem } from '../shoppingcart';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  productItem: ProductItem[] = [    
    new ProductItem('McLaren 570S', 30000, 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRComvonqa5PiDA1ljHlfOX-lmr7FrlAMaKQQ&usqp=CAU',50000 , 1),
    new ProductItem('lamborghini Galardo',63000, 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRYQ1kG3XIK1o7xNb53VIalZ4BaBWR4S4gQtA&usqp=CAU',80000 , 2),
    new ProductItem('Lotus Exige 410', 102000, 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRvgFsoAzx5LViXBOoha9E2oW6fsVTUrDZMOw&usqp=CAU',110000 , 3),
    new ProductItem('Porsche 911 Turbo S Cabriot', 35000, 'https://www.carpixel.net/t/99380/f5162b3092565a28888a3ebe8be46160.jpg', 45000,4),
    new ProductItem( 'Opel Mokka-e 2020', 30000, 'https://www.carpixel.net/t/99738/68f6ce6dc1c1fe34bb3a80823dd789ce.jpg',40000,5),
    new ProductItem('Marcedes Benz', 133000, 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ5bSQ189dkHCCP1wvdcVRICqj5rs4fCqrvSA&usqp=CAU',140000,5),
    new ProductItem('Ferrari Enzo', 102000, 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSeFYuhLkqllRk3lH-LEeWQF4MAMKHwaT2xUg&usqp=CAU',115000,6),
    new ProductItem('BMW X6', 35000, 'https://www.carpixel.net/t/99188/bb10afa5118cdee38c6f4c4037bbcdb4.jpg',45000,7),
    
  ]
  @Output() cartUpdated = new EventEmitter<{
    productid:number,
    productName:string,
    productPrice:number,
  }>();  
  Item: any;
  
  constructor() { }

  ngOnInit(): void {
  }
  onCartUpdated(event) {
    const id = event.target.getAttribute('id');
    const index = this.productItem.findIndex(elem => elem.id == id);
    this.cartUpdated.emit({
        productid: this.productItem[index].id,
        productName: this.productItem[index].name,
        productPrice: this.productItem[index].price
      });
  }

}
