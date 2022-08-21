import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductRoutingModule} from './product-routing.module';
import {ListproductComponent} from './list-product/listproduct.component';
import {EditproductComponent} from './edit-product/editproduct.component';
import {CreateproductComponent} from './create-product/createproduct.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    ListproductComponent,
    EditproductComponent,
    CreateproductComponent,
  ],
  exports: [],

  imports: [
    CommonModule,
    ProductRoutingModule,
    ReactiveFormsModule,
  ]
})
export class ProductModule {
}
