import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListCustomerComponent } from './customer/component/list-customer/list-customer.component';
import { CreateCustomerComponent } from './customer/component/create-customer/create-customer.component';
import { EditCustomerComponent } from './customer/component/edit-customer/edit-customer.component';
import { HomeComponent } from './home-page/home/home.component';
import { ListFacilityComponent } from './facility/component/list-facility/list-facility.component';
import { CreateFacilityComponent } from './facility/component/create-facility/create-facility.component';
import { EditFacilityComponent } from './facility/component/edit-facility/edit-facility.component';
import { ListContractComponent } from './contract/component/list-contract/list-contract.component';
import { CreateContractComponent } from './contract/component/create-contract/create-contract.component';
import { FooterComponent } from './footer-header/footer/footer.component';
import { HeaderComponent } from './footer-header/header/header.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CustomerTypeComponent } from './customer/component/customer-type/customer-type.component';
import { FacilityTypeComponent } from './facility/component/facility-type/facility-type.component';

@NgModule({
  declarations: [
    AppComponent,
    ListCustomerComponent,
    CreateCustomerComponent,
    EditCustomerComponent,
    HomeComponent,
    ListFacilityComponent,
    CreateFacilityComponent,
    EditFacilityComponent,
    ListContractComponent,
    CreateContractComponent,
    FooterComponent,
    HeaderComponent,
    CustomerTypeComponent,
    FacilityTypeComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
