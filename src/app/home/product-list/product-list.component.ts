import { AddProductComponent } from './../add-product/add-product.component';
import { ProductService } from './../service/product.service';
import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { first, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/models/product';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { map } from 'rxjs/internal/operators/map';
import { Subject } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  users: User[] = [];
  product: Product[] = [];

  ProductList:any=[]
  modalRef:BsModalRef
  searchTerm:any;

  constructor(private userService: UserService,
    private productService:ProductService,
    private bsModelService:BsModalService,
    private http:HttpClient,
    private spinner:NgxSpinnerService,
    private router:Router
    ) {

   

// this.getProductList()
// this.Search()

  }

  ngOnInit() {
    this.getProductList()



    this.userService.getAll().pipe(first()).subscribe(users => { 
      this.users = users; 
  });


  }

  getProductList(){
    this.spinner.show()
    this.productService.getProductList().subscribe((result : any[])=>{
      this.spinner.hide()
      console.log(result)
      // this.product = result
      this.product=result
      console.log(this.product)
    })
  }
  AddProduct(){
    this.spinner.show()
    const initialState = {

      title: 'Create ',
      class: 'modal-md modal-dialog-centered',
      animated: true,
      keyboard: true,
      ignoreBackdropClick: true
    };

    this.modalRef = this.bsModelService.show(AddProductComponent, initialState);
    this.bsModelService.onHide.subscribe((reason: string) => {
      // console.log("modal close: " + reason);

      this.ngOnInit();

    })
  this.spinner.hide()
  }
  Search(text:string){
    this.spinner.show()
    this.http.get('http://localhost:3000/product').pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      map((response) => {
      response = response.filter((data) => data.productName === text);
      return response;
  })).subscribe( (res:any [])=>{
    this.spinner.hide()
      this.product=res
      console.log(res);
  })
  }
  AddToCart(data){
console.log(data)
this.productService.AddToCart(data).subscribe(result=>{
  console.log(result)

  Swal.fire('Added To Cart Successful', 
  // 'Something went wrong!', 
  'success')
})
  }
  ToCart(){
this.router.navigate(['cart'])
  }
}
