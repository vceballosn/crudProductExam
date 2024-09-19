import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{

   p: any[] = [];

  constructor(private ProductService: ProductService) {

  }

  ngOnInit(): void {
    this.ProductService.getProductList().subscribe((productResponse:any) => {
      console.log('Respuesta del servicio getAllProducts',productResponse);
      this.p=productResponse;

    });
  }


}
