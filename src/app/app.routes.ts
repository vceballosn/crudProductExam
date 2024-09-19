import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductAddComponent } from './components/product-add/product-add.component';

export const routes: Routes = [{path:'incluir',component:ProductAddComponent}, 
                               {path:'lista',component:ProductListComponent}

];
