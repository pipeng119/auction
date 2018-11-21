import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductComponent } from './product/product.component';
import { StarsComponent } from './stars/stars.component';
import { ProductDeatilComponent } from './product-deatil/product-deatil.component';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';
import { FilterPipe } from './pipe/filter.pipe';

@NgModule({//只能声明组件、指令、管道
  // 这个模块有什么东西
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SearchComponent,
    CarouselComponent,
    ProductComponent,
    StarsComponent,
    ProductDeatilComponent,
    HomeComponent,
    TestComponent,
    FilterPipe,
  ],
  // 依赖的其他模块
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  // 提供的服务
  providers: [],
  // 主组件
  bootstrap: [AppComponent]
})
export class AppModule { }
