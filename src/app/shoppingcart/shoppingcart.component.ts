import { Component, OnInit } from '@angular/core';
import {Shoppingcart} from '../ShoppingCart';


@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  shoppingcart:Shoppingcart[] = [
    





  ]
  addNewShoppingCart(shoppingcart){
    this.shoppingcart.push(shoppingcart)
  }
  
  addUpVote(upVoting,index) {
    if (upVoting){
      this.shoppingcart[index].upVote +=1;
    }
  }
  addDownVote(downVoting,index){
    if (downVoting) {
      this.shoppingcart[index].downVote +=1;
    }
  }
  delshoppingcart(deleting,index){
    if (deleting) {
      this.shoppingcart[index].deleting;
    }
  }
  HighlightFunc(index){
    let d: number;
    d = this.shoppingcart.reduce((acc,quote) =>acc = acc >this.shoppingcart.upVote ? acc : this.shoppingcart.upVote,0);
    if (this.shoppingcart[index].upVote === d && this.shoppingcart[index].upVote > 0) {
      return d;
    }else{
      return d;
    }   

  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
