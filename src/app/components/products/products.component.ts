import {Component, OnInit} from '@angular/core';

export interface ProductInfo {
  src: string;
  price: number;
  descr: string;
  title: string;
  id: number;
  page: number;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent{
  public products: ProductInfo[] = [
    {
      src: '112.970-Копировать-1.jpg',
      price: 119,
      descr: 'something about flowers',
      title: 'tulips',
      id: 1,
      page: 1
    },
    {
      src: 'buket-4.jpg',
      price: 120,
      descr: 'something about flowers',
      title: 'tulips',
      id: 2,
      page: 1
    },
    {
      src: '112.970-Копировать-1.jpg',
      price: 119,
      descr: 'something about flowers',
      title: 'tulips',
      id: 3,
      page: 1
    },
    {
      src: '112.970-Копировать-1.jpg',
      price: 119,
      descr: 'something about flowers',
      title: 'tulips',
      id: 4,
      page: 1
    },
    {
      src: '112.970-Копировать-1.jpg',
      price: 119,
      descr: 'something about flowers',
      title: 'tulips',
      id: 5,
      page: 2
    },
    {
      src: 'buket_roz_15_14104517.png',
      price: 179,
      descr: 'something about flowers',
      title: 'tulips',
      id: 6,
      page: 2
    },
    {
      src: 'd1bf8eda61b7c3c007dd356b6ae4bee5.jpeg',
      price: 139,
      descr: 'something about flowers',
      title: 'tulips',
      id: 7,
      page: 2
    },
    {
      src: '112.970-Копировать-1.jpg',
      price: 309,
      descr: 'something about flowers',
      title: 'tulips',
      id: 8,
      page: 2
    },
    {
      src: 'iвапм.jpg',
      price: 279,
      descr: 'something about flowers',
      title: 'tulips',
      id: 9,
      page: 3
    },
    {
      src: 'lot-149-buket-iz-eustom---1300r-1-13527481.jpg',
      price: 279,
      descr: 'something about flowers',
      title: 'tulips',
      id: 10,
      page: 3
    },
    {
      src: 'buket_roz_15_14104517.png',
      price: 279,
      descr: 'something about flowers',
      title: 'tulips',
      id: 11,
      page: 3
    },
    {
      src: '15-bel-roz.jpg',
      price: 149,
      descr: 'something about flowers',
      title: 'tulips',
      id: 12,
      page: 3
    }
  ];
}
