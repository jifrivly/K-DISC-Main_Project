import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  addProduct(itemData){
    alert("Service working well.. \n Form Datas : "+ JSON.stringify(itemData));
    // return this.http.post("",{}).subscribe((data)=>{
    //   console.log(data);
    // })
  };

  getProduct(){};
}
