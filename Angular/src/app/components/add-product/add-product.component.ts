import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  addProductForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.addProductForm = this.fb.group({
      p_name:["",Validators.required,Validators.minLength(5),Validators.maxLength(8)],
      p_description:["",Validators.required],
    });
  }

  items = {
    "Men": {
      "Clothing": {
        "Top wear": {
          "T - Shirts": "T - Shirts",
          "Shirts": "Shirts",
          "Kurtas": "Kurtas",
          "Suits": "Suits",
          "Blazers": "Blazers",
          "Waistcoats": "Waistcoats",
        },
        "Bottom wear": {
          "Jeans": "Jeans",
          "Trousers": "Trousers",
          "Shorts & 3 / 4 ths": "Shorts & 3 / 4 ths",
          "Cargos": "Cargos",
          "Track pants": "Track pants",
        },
        "Ties, Socks, Caps & more": {
          "Ties": "Ties",
          "Socks": "Socks",
          "Caps": "Caps",
          "Cufflinks": "Cufflinks",
          "Mufflers": "Mufflers",
          "Scarfs": "Scarfs",
          "Handkerchiefs": "Handkerchiefs",
          "Gloves": "Gloves",
          "Shirt studs": "Shirt studs",
          "Pocket Squares": "Pocket Squares",
          "Arm warmer": "Arm warmer",
          "Cravats": "Cravats",
          "Bandanas": "Bandanas",
          "Suspenders": "Suspenders",
        },
        "Kurta, Pyjama & more": {
          "Thawbs": "Thawbs",
          "Kurtas": "Kurtas",
          "Sets": "Sets",
          "Sherwanis": "Sherwanis",
          "Dhotis": "Dhotis",
          "Lungis": "Lungis",
          "Pyjamas": "Pyjamas",
          "Turbans": "Turbans",
        },
        "Fabrics": {
          "Multi-purpose Fabrics": "Multi-purpose Fabrics",
          "Shirt Fabrics": "Shirt Fabrics",
          "Suit Fabrics": "Suit Fabrics",
          "Sherwani Fabrics": "Sherwani Fabrics",
          "Kurta Fabrics": "Kurta Fabrics",
          "Trouser Fabrics": "Trouser Fabrics",
          "Safari Fabrics": "Safari Fabrics",
        },
        "Winter & Seasonal wear": {
          "Sweaters": "Sweaters",
          "Jackets": "Jackets",
          "Sweatshirts": "Sweatshirts",
          "Thermals": "Thermals",
          "Pullovers": "Pullovers",
          "Rain coats": "Rain coats",
          "Cardigans": "Cardigans",
          "Shawls": "Shawls",
          "Shrugs & Jackets": "Shrugs & Jackets",
          "Coats": "Coats",
          "Windcheaters": "Windcheaters",
        },
        "Sports wear": {
          "Sports T - Shirts": "Sports T - Shirts",
          "Track Pants": "Track Pants",
          "Track Suits": "Track Suits",
          "Shorts": "Shorts",
        },
        "Innerwear & Sleepwear": {
          "Briefs & Trunks": "Briefs & Trunks",
          "Vests": "Vests",
          "Boxers": "Boxers",
          "Thermals": "Thermals",
        },
        "Watches": {
          "Fastrack": "Fastrack",
          "Casio": "Casio",
          "Titan": "Titan",
          "Fossil": "Fossil",
          "Sonata": "Sonata",
        },
        "Accessories": {
          "Backpacks": "Backpacks",
          "Wallets": "Wallets",
          "Belts": "Belts",
          "Sunglasses": "Sunglasses",
          "Luggage & Travel": "Luggage & Travel",
          "Frames": "Frames",
          "Jewellery": "Jewellery",
        }
      },
      "Footwear": {
        "Sports Shoes": "Sports Shoes",
        "Casual Shoes": "Casual Shoes",
        "Formal Shoes": "Formal Shoes",
        "Sandals & Floaters": "Sandals & Floaters",
        "Flip- Flops": "Flip- Flops",
        "Loafers": "Loafers",
        "Boots": "Boots",
        "Running Shoes": "Running Shoes",
        "Sneakers": "Sneakers",
      },
      "Men's Grooming": {
        "Deodorants": "Deodorants",
        "Perfumes": "Perfumes",
        "Beard Care & Grooming": "Beard Care & Grooming",
        "Shaving & Aftershave": "Shaving & Aftershave",
        "Sexual Wellness": "Sexual Wellness",
      },
    },
    "Women": {
      "Clothing": {
        "Western Wear": {
          "Top, T-Shirts & Shirts": "Top, T-Shirts & Shirts",
          "Dresses": "Dresses",
          "Jeans": "Jeans",
          "Shorts": "Shorts",
          "Skirts": "Skirts",
          "Leggings & Jeggings": "Leggings & Jeggings",
          "Trousers & Capris": "Trousers & Capris",
          "Lingerie & Sleepwear": "Lingerie & Sleepwear",
          "Bras": "Bras",
          "Panties": "Panties",
          "Lingerie Sets": "Lingerie Sets",
          "Nightsuits & Nightdresses": "Nightsuits & Nightdresses",
          "Shapewear": "Shapewear",
          "Camisoles & Slips": "Camisoles & Slips",
        },

        "Ethnic Wear": {
          "Sarees": "Sarees",
          "Kurtas & Kurtis": "Kurtas & Kurtis",
          "Dress Material": "Dress Material",
          "Lehenga Choli": "Lehenga Choli",
          "Blouse": "Blouse",
          "Leggings & Salwars": "Leggings & Salwars",
          "Anarkali Suits": "Anarkali Suits",
          "Petticoats": "Petticoats",
          "Abhayas & Burqas": "Abhayas & Burqas",
          "Dupattas": "Dupattas",
        },
        "Swim & Beachwear": {
          "Swim suits": "Swim suits",
        },
        "Winter & Seasonal wear": {
          "Sweaters": "Sweaters",
          "Jackets": "Jackets",
          "Sweatshirts": "Sweatshirts",
          "Thermals": "Thermals",
          "Pullovers": "Pullovers",
          "Rain coats": "Rain coats",
          "Cardigans": "Cardigans",
          "Shawls": "Shawls",
          "Shrugs & Jackets": "Shrugs & Jackets",
          "Coats": "Coats",
          "Windcheaters": "Windcheaters",
        },
        "Sports wear": {
          "Track Pants": "Track Pants",
          "Track Suits": "Track Suits",
          "Track Tops": "Track Tops",
          "Sports T - Shirts": "Sports T - Shirts",
        }
      },
      "Footwear": {
        "Sandals": {
          "Flats": "Flats",
          "Heels": "Heels",
          "Wedges": "Wedges",
        },
        "Shoes": {
          "Sports Shoes": "Sports Shoes",
          "Casual Shoes": "Casual Shoes",
          "Boots": "Boots",
        },
        "Ballerinas": {},
        "Slippers & Flip- Flop's": {},
      },
      "Personal Care Appliances": {
        "Hair Straightners": "Hair Straightners",
        "Hair Dryers": "Hair Dryers",
        "Epilators": "Epilators",
      },
      "Beauty & Grooming": {
        "Make Up": "Make Up",
        "Skin Care": "Skin Care",
        "Hair Care": "Hair Care",
        "Bath & Spa": "Bath & Spa",
        "Deodorants & Perfumes": "Deodorants & Perfumes",
      }
    },
    "Kids": {
      "Kids Clothing": {
        "Boys' Clothing": {
          "Polos & T - Shirts": "Polos & T - Shirts",
          "Ethnic Wear": "Ethnic Wear",
          "Shorts & 3 / 4 ths": "Shorts & 3 / 4 ths",
        },
        "Girls' Clothing": {
          "Dresses & Skirts": "Dresses & Skirts",
          "Ethnic Wear": "Ethnic Wear",
          "T - shirts & Tops": "T - shirts & Tops",
        },
        "Baby Boy Clothing": {
          "Body Suits": "Body Suits",
          "Polos & T - Shirts": "Polos & T - Shirts",
        },
        "Baby Girl Clothing": {
          "Body Suits": "Body Suits",
          "Dresses": "Dresses",
        }
      },
      "Kids Footwear": {
        "Boys' Footwear": {
          "Sandals": "Sandals",
          "Sport Shoes": "Sport Shoes",
        },
        "Girls' Footwear": {
          "Flats & Bellies": "Flats & Bellies",
          "Sport Shoes": "Sport Shoes",
        },
        "Baby Footwear": {},
        "Character Shoes": {},
      },
      "Toys": {
        "Remote Control Toys": "Remote Control Toys",
        "Educational Toys": "Educational Toys",
        "Soft Toys": "Soft Toys",
        "Cars & Die-cast Vehicles": "Cars & Die-cast Vehicles",
        "Outdoor Toys": "Outdoor Toys",
        "Action Figures": "Action Figures",
        "Board Games": "Board Games",
        "Musical Toys": "Musical Toys",
        "Dolls & Doll Houses": "Dolls & Doll Houses",
        "Puzzles": "Puzzles",
        "S.T.E.M Toys": "S.T.E.M Toys",
        "Helicopter & Drones": "Helicopter & Drones",
        "Toy Guns": "Toy Guns",
        "Party Supplies": "Party Supplies",
      },

    }
  };

  addProduct(): void {
    console.log(this.addProductForm);
  }
}
