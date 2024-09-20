import { Component, OnInit } from '@angular/core';
import { Product } from '../../product';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../services/product.service';


@Component({
  selector: 'app-product-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css'
})
export class ProductAddComponent implements OnInit {
 id:number =0;
 elaboradoMano:string="";
 maquina:string="";
 status:string="";
 dateCreation:Date = new Date(); ;

ngOnInit(): void {
   
  }


  constructor (private productService:ProductService){
    
  }
  addProduct(){
    let product = new Product(this.id,this.elaboradoMano,this.maquina,this.status,this.dateCreation);
    console.log(product);
    this.productService.createProduct(product).subscribe(
      res=> {
        console.log(res)
        alert('Los datos se guardaron correctamente.');
      },(error) => {
        // Manejar errores
        console.error('Error al guardar los datos:', error);
        alert('Ocurrió un error al guardar los datos. Por favor, inténtalo nuevamente.');
      }
     
    );


  }



}
