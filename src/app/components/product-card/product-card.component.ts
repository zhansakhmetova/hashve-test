import {Component, Input, ViewChild} from '@angular/core';
import {ProductInfo} from '../products/products.component';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input() products: ProductInfo[];

  showProducts(page: number) {
    this.products = this.products.filter(item => item.page === page);
  }
}
