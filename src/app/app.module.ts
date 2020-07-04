import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingcartDetailsComponent } from './shoppingcart-details/shoppingcart-details.component';
import { ShoppingcartFormComponent } from './shoppingcart-form/shoppingcart-form.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingcartDetailsComponent,
    ShoppingcartFormComponent,
    ShoppingcartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
