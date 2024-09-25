import { Component, inject, OnInit } from '@angular/core';
import { Product } from '../../product';
import { FormBuilder, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-product-add',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css'
})
export class ProductAddComponent implements OnInit {


  private readonly formBuilder = inject(FormBuilder)


  formGroup = this.formBuilder.nonNullable.group({
    id: 0,
    elaboradoMano: ['', Validators.required],
    maquina: ['', Validators.required],
    status: ['', Validators.required],
    dateCreation: ['', Validators.required]


  })


  /*formGroup = new FormGroup({ este es una manera 
  elaboradoMano: new FormControl('') 
   
 
 
  });*/

  ngOnInit(): void {

  }


  constructor(private productService: ProductService) {

  }
  addProduct() {
    if (this.formGroup.valid) {
      const elaboradoMano: string | undefined = this.formGroup.get("elaboradoMano")?.value ?? 'no existe';
      const maquina: string | undefined = this.formGroup.get("maquina")?.value ?? 'no existe';
      const status: string | undefined = this.formGroup.get("status")?.value ?? 'no existe';
      const dateCreation: string | undefined = this.formGroup.get("dateCreation")?.value ?? 'no existe';
      const dateCreation1: Date = new Date(dateCreation);

      let product = new Product(elaboradoMano, maquina, status, dateCreation1);
      console.log(product);
      this.productService.createProduct(product).subscribe(
        res => {
          console.log(res)
          alert('Los datos se guardaron correctamente.');
        }, (error) => {
          // Manejar errores
          console.error('Error al guardar los datos:', error);
          alert('Ocurrió un error al guardar los datos. Por favor, inténtalo nuevamente.');
        }

      );


    }else{
      alert('debe LLenar todos los campos Requeridos *');
    }


  }




}
