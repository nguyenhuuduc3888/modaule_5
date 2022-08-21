import {APP_ID, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CategoryRoutingModule} from './category-routing.module';
import {ListCategoryComponent} from './list-category/list-category.component';
import {CreateCategoryComponent} from './create-category/create-category.component';
import {UpdateCategoryComponent} from './update-category/update-category.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    ListCategoryComponent,
    CreateCategoryComponent,
    UpdateCategoryComponent,
    ],

  exports: [],

  imports: [
    CommonModule,
    CategoryRoutingModule,
    ReactiveFormsModule,
  ]
})
export class CategoryModule {
}
