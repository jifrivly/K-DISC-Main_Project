import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title: String = "Online Shopping";
  nav_items = {
    home: {
      link: "", text: "Home"
    },
    login: {
      link: "Add Product", text: "Add Product"
    }
  };


}
