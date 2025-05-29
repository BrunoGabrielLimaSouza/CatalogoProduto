import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductService, Product} from '../../service/product.service';

@Component({
  selector: 'app-products-details',
  imports: [CommonModule,RouterLink],
  templateUrl: './products-details.component.html',
  styleUrl: './products-details.component.css'
})
export class ProductsDetailsComponent {
  product: Product | null = null;
  errorMessage: string | null = null;

  
    constructor(private productService: ProductService, private route: ActivatedRoute){}
   
    ngOnInit() {
      const id = Number(this.route.snapshot.paramMap.get('id'));
      this.productService.getProduct(id).subscribe({
        next: (product) => this.product = product,
        error: (err) => this.errorMessage = err.message
      });
    }

}
