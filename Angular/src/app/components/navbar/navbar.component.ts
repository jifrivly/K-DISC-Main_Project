import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  searchForm:FormGroup;

  constructor() { };

  ngOnInit() {
    this.searchForm = new FormGroup({
      search:new FormControl()
    });
  };

  title: String = "Online Shopping";
  nav_items = {
    home: {
      link: "", text: "Home"
    },
    login: {
      link: "Add-Product", text: "Add Product"
    },
    cart:{
      link:"cart", text:""
    },
  };

  search():void{
    console.log("Search clicked");
  };

}
