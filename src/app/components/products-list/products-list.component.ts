import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductService} from '../../service/product.service';
import { Product } from '../../service/product.service';


@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent implements OnInit{
products: Product[] = [];
errorMessage:  string | null = null;


  constructor(private productService: ProductService){}
 
  ngOnInit() {
    this.productService.getProducts().subscribe({
      next: (products) => this.products = products,
      error: (err) => this.errorMessage = err.message
    });
  }


}
