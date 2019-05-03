import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ProductModel } from 'src/app/product.model';
import { ProductService } from 'src/app/services/product.service';



@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  addProductForm: FormGroup;
  productData: ProductModel;

  validationMessages = {
    "p_name": {
      "required": "* Name is required",
      "minlength": "* Name is too short",
      "maxlength": "* Name is too long"
    },
    "p_price": {
      "required": "* Rate is required",
      "min": "* Rate must grater than Zero",
      "max": "* Rate must not exceed 1 Lakh"
    },
    "p_quantity": {
      "required": "* Quantity is required",
      "min": "* Quantity must grater than Zero"
    },
    "p_company": {
      "required": "* Company name is required"
    },
    "p_country": {
      "required": "* Country name is required"
    },
    "p_category": {
      "required": "* Category is required"
    },
    "p_description": {
      "required": "* Description is required",
      "minlength": "* Description is too short",
      "maxlength": "* Description is too long"
    }
  };

  formErrors = {
    "p_name": "",
    "p_price": "",
    "p_quantity": "",
    "p_company": "",
    "p_country": "",
    "p_category": "",
    "p_description": ""
  };

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

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService) {

  };

  ngOnInit() {
    this.addProductForm = this.formBuilder.group({
      p_name: ["sample data", [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      p_price: ["123", [Validators.required, Validators.min(1), Validators.max(100000)]],
      p_quantity: ["123", [Validators.required, Validators.min(1)]],
      p_company: ["sample data", [Validators.required]],
      p_country: ["sample data", [Validators.required]],
      p_category: ["men", [Validators.required]],
      p_description: ["Lorem ipsum dolor, sit amet consectetur adipisicing elit.", [Validators.required, Validators.minLength(25), Validators.maxLength(10000)]],
    });

    this.addProductForm.valueChanges.subscribe((value) => {
      this.showValidationError(this.addProductForm);
    });

  };


  showValidationError(group: FormGroup = this.addProductForm): void {
    Object.keys(group.controls).forEach((key: string) => {
      const formItem = group.get(key);
      this.formErrors[key] = "";
      if (formItem && !formItem.valid && (formItem.touched || formItem.dirty)) {
        const messages = this.validationMessages[key];
        for (const errorKey in formItem.errors) {
          if (errorKey) {
            this.formErrors[key] += messages[errorKey] + " ";
          }
        }
      }
    });
  };


  addProduct(): void {
    this.productData = this.addProductForm.value;
    this.productService.addProduct(this.productData);
    console.log(this.productData);
  };
}
