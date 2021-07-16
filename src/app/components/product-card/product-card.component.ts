import {Component, Input, OnInit} from '@angular/core';
import {ProductInfo} from '../products/products.component';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit{
  @Input() products: ProductInfo[];
  filtredProducts = [];

  showProducts(page: number) {
    this.filtredProducts = this.products.filter(item => item.page === page);
  }
  ngOnInit() {
    this.showProducts(1);
  }
}
