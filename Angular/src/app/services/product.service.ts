import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

interface productInterface {
  p_name: String;
  p_price: String;
  p_quantity: String;
  p_company: String;
  p_country: String;
  p_category: String;
  p_description: String;
}

@Injectable({
  providedIn: "root"
})
export class ProductService {
  constructor(private http: HttpClient) {}

  addProduct(itemData): Observable<any> {
    // alert("Service working well.. \n Form Datas : " + JSON.stringify(itemData));
    return this.http.post<any>("http://localhost:4545/product/add", itemData);
  }

  getProducts(): Observable<productInterface[]> {
    return this.http.get<productInterface[]>("http://localhost:4545/product/");
  }
}
