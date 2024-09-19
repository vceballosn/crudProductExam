import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { ProductListComponent } from './app/components/product-list/product-list.component';
import { ProductAddComponent } from './app/components/product-add/product-add.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
