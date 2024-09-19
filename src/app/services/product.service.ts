import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../product';




@Injectable({
  providedIn: 'root'
})
export class ProductService {

  
  private url: string = "http://localhost:8080/api/v1/product";
  constructor(private http:HttpClient) { 

  }
    
      getProductList():Observable<Product []>{

         return this.http.get<Product []>(this.url);

      }


      createProduct(product:Product):Observable<Product>{
        return this.http.post<Product>(this.url,product);
      }
}
