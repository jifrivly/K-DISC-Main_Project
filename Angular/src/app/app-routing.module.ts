import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./components/home/home.component";
import { AddProductComponent } from "./components/add-product/add-product.component"

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "Add Product", component: AddProductComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
