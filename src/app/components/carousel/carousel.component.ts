import {Component, Input} from '@angular/core';
import {Slides} from '../main/main.component';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: [
    trigger('carouselAnimation', [
      transition('void=>*', [
        style({opacity: 0}),
        animate('2s', style({opacity: 1}))
      ])
    ])
  ]
})
export class CarouselComponent {
  @Input() slides: Slides[];
  currentIndex = 0;

  next() {
    if (this.currentIndex < this.slides.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.slides.length - 1;
    }
  }
}


