import { Component, ElementRef, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  productList = [];
  filteredProducts;
  quantity;
  @ViewChild('choosedCategory') choosedCategory: ElementRef
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getAllProductsList();
  }

  getAllProductsList() {
    this.productService.getAllProducts().subscribe(res => {
      console.log(res);
      if (Array.isArray(res) && res.length > 0) {
        this.productList = res
      }
    }, err => {
      console.log(err);

    })
  }

  getProductsBasedOnCategory(choosedCategory) {

    this.filteredProducts = this.productList.filter(category => {

      return category.p_category === choosedCategory ? true : false
    });
  }
  edit(quantity) {
    this.quantity = quantity;
  }

  onAddQuantity(productForm) {
    console.log(productForm);
  }
}
