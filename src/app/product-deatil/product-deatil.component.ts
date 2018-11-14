import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-deatil',
  templateUrl: './product-deatil.component.html',
  styleUrls: ['./product-deatil.component.scss']
})
export class ProductDeatilComponent implements OnInit {

  productTitle: string;
  constructor( private routeInfo: ActivatedRoute) { }

  ngOnInit() {
    this.productTitle = this.routeInfo.snapshot.params["prodTitle"]
  }

}
