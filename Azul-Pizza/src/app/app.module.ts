import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PizzaCardComponent } from './pizza-card/pizza-card.component';
import { MainPageComponent } from './main-page/main-page.component';
import { PizzaCardComponentComponent } from './main-page/pizza-card-component/pizza-card-component.component';
import { ShoppingCartCardComponentComponent } from './main-page/shopping-cart-card-component/shopping-cart-card-component.component';
import { BundleComponentComponent } from './main-page/bundle-component/bundle-component.component';
import { PizzaBuilderComponentComponent } from './main-page/pizza-builder-component/pizza-builder-component.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaCardComponent,
    MainPageComponent,
    PizzaCardComponentComponent,
    ShoppingCartCardComponentComponent,
    BundleComponentComponent,
    PizzaBuilderComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
