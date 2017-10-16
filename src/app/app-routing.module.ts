/**
 * Created by CarsonChen on 10/16/17.
 */
import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {HomePageComponent} from "../pages/homepage/homepage.component";
import {LoginComponent} from "../pages/authentication/login.component";
import {RegisterComponent} from "../pages/authentication/register.component";
import {LoginSuccessComponent} from "../pages/authentication/login-success.component";
import {CartComponent} from "../pages/cart/cart.component";
import {CategoryComponent} from "../pages/category/category.compnent";
import {ProductDetailComponent} from "../pages/product-detail/product-detail.component";
import {PurchaseComponent} from "../pages/purchase/purchase.component";
import {PurchaseSuccessComponent} from "../pages/purchase/purchase-success.component";
import {SearchComponent} from "../pages/search/search.component";
import {SearchResultComponent} from "../pages/search/search-result.component";
import {ErrorComponent} from "../pages/authentication/error.component";

const routes:Routes = [
  {
    path:'',
    redirectTo:'/homepage',
    pathMatch:'full'
  },
  {
    path:'homepage',
    component:HomePageComponent
  },
  {
    path:'register',
    component: RegisterComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'login-success',
    component: LoginSuccessComponent
  },
  {
    path:'cart',
    component: CartComponent
  },
  {
    path:'category',
    component: CategoryComponent
  },
  {
    path:'product-detail',
    component: ProductDetailComponent
  },
  {
    path:'purchase',
    component: PurchaseComponent
  },
  {
    path:'purchase-success',
    component: PurchaseSuccessComponent
  },
  {
    path:'search',
    component: SearchComponent
  },
  {
    path:'search-result',
    component: SearchResultComponent
  },
  {
    path:'error',
    component: ErrorComponent
  }
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
