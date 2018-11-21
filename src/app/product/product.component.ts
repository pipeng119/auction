import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  private products: Array<Product>;
  private imgUrl: string = 'http://placehold.it/300x150';
  private keyword: string;
  private titleFilter: FormControl = new FormControl();
  constructor() { 
    this.titleFilter.valueChanges
      .pipe(debounceTime(500))
      .subscribe(
        value => this.keyword = value
      )
  }

  ngOnInit() {
    this.products = [
        new Product(1,'第一个商品',1.99,1.5,'这是第一个商品，是我在学习angular6时创建的',['电子产品','硬件设备']),
        new Product(2,'第二个商品',2.99,2.5,'这是第二个商品，是我在学习angular6时创建的',['电子产品','硬件设备']),
        new Product(3,'第三个商品',3.99,3.5,'这是第三个商品，是我在学习angular6时创建的',['电子产品','硬件设备']),
        new Product(4,'第四个商品',4.99,4.5,'这是第四个商品，是我在学习angular6时创建的',['电子产品','硬件设备']),
        new Product(5,'第五个商品',4.99,5.5,'这是第五个商品，是我在学习angular6时创建的',['电子产品','硬件设备']),
    ]
  }

}

export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string,
    public cateqories: Array<string>
  ){}
}