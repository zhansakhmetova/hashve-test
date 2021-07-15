import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/core/footer/footer.component';
import { HeaderComponent } from './components/core/header/header.component';
import { MapComponent } from './components/map/map.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AgmCoreModule} from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FooterComponent,
    HeaderComponent,
    MapComponent,
    AboutUsComponent,
    CarouselComponent,
    ProductsComponent,
    ProductCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAODcu-kP69ooEGJbHDXiOKWWWQ9qZwz20'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
