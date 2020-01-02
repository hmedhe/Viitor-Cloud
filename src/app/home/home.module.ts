import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { AddProductComponent } from './add-product/add-product.component';
import { HomeComponent } from './home.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { HttpErrorInterceptor } from '../http-error.interceptor';
import { NgxSpinnerModule } from "ngx-spinner";
import {MatCardModule} from '@angular/material/card';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [ProductListComponent, AddProductComponent, HomeComponent, CartComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule,
    ModalModule.forRoot(),
    FormsModule,
    NgxSpinnerModule,
    MatCardModule
  ],
  entryComponents:[AddProductComponent],
  providers:[    {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpErrorInterceptor,
    multi: true
  }]
})
export class HomeModule { }
