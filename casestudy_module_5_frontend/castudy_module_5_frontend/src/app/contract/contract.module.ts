import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ContractRoutingModule} from './contract-routing.module';
import {ListContractComponent} from './component/list-contract/list-contract.component';
import {CreateContractComponent} from './component/create-contract/create-contract.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    ListContractComponent,
    CreateContractComponent,
  ],
  imports: [
    CommonModule,
    ContractRoutingModule,
    ReactiveFormsModule
  ]
})
export class ContractModule {
}
