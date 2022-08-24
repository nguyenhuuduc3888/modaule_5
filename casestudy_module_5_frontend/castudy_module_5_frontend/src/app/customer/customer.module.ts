import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CustomerRoutingModule} from './customer-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ListCustomerComponent} from './component/list-customer/list-customer.component';
import {CreateCustomerComponent} from './component/create-customer/create-customer.component';
import {EditCustomerComponent} from './component/edit-customer/edit-customer.component';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [
    ListCustomerComponent,
    CreateCustomerComponent,
    EditCustomerComponent
  ],
    imports: [
        CommonModule,
        CustomerRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        NgxPaginationModule,

    ]
})
export class CustomerModule {
}
