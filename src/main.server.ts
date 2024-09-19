import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';
import { ProductAddComponent } from './app/components/product-add/product-add.component';
import { ProductListComponent } from './app/components/product-list/product-list.component';

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
