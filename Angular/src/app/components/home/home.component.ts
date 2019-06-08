import { Component, OnInit } from "@angular/core";
import { ProductService } from "src/app/services/product.service";
import { ProductModel } from "src/app/product.model";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  public productList = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe((data) => {
      this.productList = JSON.parse(JSON.stringify(data));
      console.log(this.productList);
    });
  }
}
