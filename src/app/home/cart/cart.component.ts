import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Product } from 'src/app/models/product';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  product: Product[] = [];
  constructor(private Service:ProductService,
    private spinner:NgxSpinnerService,) { }

  ngOnInit() {
    this.getCartList()
  }
getCartList(){
  this.spinner.show()
this.Service.getCartList().subscribe((result : any[])=>{
  this.spinner.hide()
  console.log(result)
  this.product=result
  
  
})
}
}
