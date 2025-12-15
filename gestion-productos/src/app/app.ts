import { Component, signal } from '@angular/core';
import { ProductService, Product } from './services/product';
import { ProductsList } from './components/products-list/products-list';
import { ProductFormComponent } from './components/product-form/product-form';
import { ProductFilterComponent } from './components/product-filter/product-filter';

@Component({
  selector: 'app-root',
  imports: [ProductsList,ProductFormComponent,ProductFilterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('gestion-productos');

  productos: Product[] = [];

  constructor(private productService: ProductService) {
  }

  onProductoCreado(producto: any) {
    this.productService.agregarProducto(producto);
  }
}
