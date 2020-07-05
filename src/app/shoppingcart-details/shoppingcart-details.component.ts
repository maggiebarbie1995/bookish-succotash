import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-shoppingcart-details',
  templateUrl: './shoppingcart-details.component.html',
  styleUrls: ['./shoppingcart-details.component.css']
})
export class ShoppingcartDetailsComponent implements OnInit {

  @Input() item:Item;
  @Output() upVoting = new EventEmitter<boolean>();
  @Output() downVoting = new EventEmitter<boolean>();
  
  upVotes(vote: boolean){
    this.upVoting.emit(vote);
  }

  downVotes(vote: boolean){
    this.downVoting.emit(vote);
  }

    constructor() { }

  ngOnInit(): void {
  }

}
