import {Component} from '@angular/core';

export interface Slides {
  src: string;
  name: string;
  id: number;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  public slides: Slides[] = [
    {
      src: 'slide-2.jpg',
      name: 'slide1',
      id: 1
    },
    {
      src: 'slide-3.jpg',
      name: 'slide2',
      id: 2
    }
  ];
}
