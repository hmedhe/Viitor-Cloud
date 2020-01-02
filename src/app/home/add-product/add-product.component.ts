import { ProductService } from './../service/product.service';
import { FormGroup, FormBuilder ,Validators} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { BsModalRef } from 'ngx-bootstrap';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  product:any={}
  
  constructor(private ProductService:ProductService,
    private modalRef:BsModalRef) { }

  ngOnInit() {

  }
  OnSave(data){
console.log(data)
this.ProductService.AddProductList(data).subscribe(result=>{
  console.log(result)
  Swal.fire('New Product Successful', 
  // 'Something went wrong!', 
  'success')
  this.modalRef.hide()
})
  }
  OnCancel(){
this.modalRef.hide()
  }

}
