import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';
import { ProductDeatilComponent } from './product-deatil/product-deatil.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "product/:prodTitle",
    component: ProductDeatilComponent
  },
  {
    path: 'test',
    component: TestComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
