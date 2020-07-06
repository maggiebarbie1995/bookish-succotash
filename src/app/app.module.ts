import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingcartDetailsComponent } from './shoppingcart-details/shoppingcart-details.component';
import { ShoppingcartFormComponent } from './shoppingcart-form/shoppingcart-form.component';
import { ShoppingCartComponent } from './shoppingcart/shoppingcart.component';
import { TimeAgoPipe } from './time-ago.pipe';
import { HighlightDirective } from './highlight.directive';
import { Item } from '../shoppingcart';
import { EventEmitter } from 'events';
import {ProductItem} from './product.model';
@NgModule({
  declarations: [
    AppComponent,
    ShoppingcartDetailsComponent,
    ShoppingcartFormComponent,
    ShoppingCartComponent,
    TimeAgoPipe,
    HighlightDirective,
    Item,
    EventEmitter,
    ProductItem
  ]
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
