import { Component, OnInit } from '@angular/core';
import {ShopService} from '../shop.service'
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  productDetail;
  constructor(private service:ShopService) { }

  ngOnInit() {
    this.service.get_product().subscribe(
      data=>{
        this.productDetail = data
        console.log(this.productDetail)
      }
    )
  }

}
