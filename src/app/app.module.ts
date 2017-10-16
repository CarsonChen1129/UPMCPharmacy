import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";
import {HomePageComponent} from "../pages/homepage/homepage.component";
import {LoginComponent} from "../pages/authentication/login.component";
import {LoginSuccessComponent} from "../pages/authentication/login-success.component";
import {RegisterComponent} from "../pages/authentication/register.component";
import {ErrorComponent} from "../pages/authentication/error.component";
import {CartComponent} from "../pages/cart/cart.component";
import {CategoryComponent} from "../pages/category/category.compnent";
import {ProductDetailComponent} from "../pages/product-detail/product-detail.component";
import {PurchaseComponent} from "../pages/purchase/purchase.component";
import {PurchaseSuccessComponent} from "../pages/purchase/purchase-success.component";
import {SearchComponent} from "../pages/search/search.component";
import {SearchResultComponent} from "../pages/search/search-result.component";


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginComponent,
    LoginSuccessComponent,
    RegisterComponent,
    ErrorComponent,
    CartComponent,
    CategoryComponent,
    ProductDetailComponent,
    PurchaseComponent,
    PurchaseSuccessComponent,
    SearchComponent,
    SearchResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
