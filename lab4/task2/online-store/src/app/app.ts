import { Component } from '@angular/core';
import { ProductList } from './product-list/product-list';

import { categories } from './data/categories';
import { products } from './data/products';

import { Category } from './models/category';
import { Product } from './models/product';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  categories: Category[] = categories;


  selectedCategoryId: number | null = null;

  allProducts: Product[] = products.map(p => ({ ...p }));

  selectedProducts: Product[] = [];

  selectCategory(id: number) {
    this.selectedCategoryId = id;

    if (id === 0) {
      this.selectedProducts = [...this.allProducts];
    } else {
      this.refreshSelectedProducts();
    }
  }

  onDelete(productId: number) {

    this.allProducts = this.allProducts.filter(p => p.id !== productId);

    if (this.selectedCategoryId === 0) {
      this.selectedProducts = [...this.allProducts];
    } else {
      this.refreshSelectedProducts();
    }
  }
  private refreshSelectedProducts() {
    if (this.selectedCategoryId === null) {
      this.selectedProducts = [];
      return;
    }
  

    this.selectedProducts = this.allProducts.filter(
      p => p.categoryId === this.selectedCategoryId
    );
  }
}