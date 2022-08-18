import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListCustomerComponent} from './customer/component/list-customer/list-customer.component';
import {HomeComponent} from './home-page/home/home.component';
import {EditCustomerComponent} from './customer/component/edit-customer/edit-customer.component';
import {CreateCustomerComponent} from './customer/component/create-customer/create-customer.component';
import {ListFacilityComponent} from './facility/component/list-facility/list-facility.component';
import {EditFacilityComponent} from './facility/component/edit-facility/edit-facility.component';
import {CreateFacilityComponent} from './facility/component/create-facility/create-facility.component';
import {ListContractComponent} from './contract/component/list-contract/list-contract.component';
import {CreateContractComponent} from './contract/component/create-contract/create-contract.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path: 'list-customer', component: ListCustomerComponent},
  {path: 'edit-customer/:id', component: EditCustomerComponent},
  {path: 'create-customer', component: CreateCustomerComponent},
  {path: 'list-facility', component: ListFacilityComponent},
  {path: 'edit-facility/:id', component: EditFacilityComponent},
  {path: 'create-facility', component: CreateFacilityComponent},
  {path: 'list-contract', component: ListContractComponent},
  {path: 'create-contract', component: CreateContractComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
