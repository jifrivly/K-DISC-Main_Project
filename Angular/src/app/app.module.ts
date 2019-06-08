import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

// routing module
import { AppRoutingModule } from "./app-routing.module";

// services
import { ProductService } from "./services/product.service";

// components
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HomeComponent } from "./components/home/home.component";
import { AddProductComponent } from "./components/add-product/add-product.component";
import { CartComponent } from "./components/cart/cart.component";
import { InvoiceComponent } from "./components/invoice/invoice.component";
import { ProductComponent } from "./components/product/product.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AddProductComponent,
    CartComponent,
    InvoiceComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule {}
