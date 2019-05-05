import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./components/home/home.component";
import { AddProductComponent } from "./components/add-product/add-product.component"
import { CartComponent } from './components/cart/cart.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  {path:"product",component:ProductComponent},

  
  { path: "Add-Product", component: AddProductComponent },
  { path: "cart", component: CartComponent },

  
  {path:"invoice",component:InvoiceComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
