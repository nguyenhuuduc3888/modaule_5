import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home/home'},
  {path: 'home', loadChildren: () => import('./home/home.module').then(module => module.HomeModule)},
  {path: 'contract', loadChildren: () => import('./contract/contract.module').then(module => module.ContractModule)},
  {path: 'customer', loadChildren: () => import('./customer/customer.module').then(module => module.CustomerModule)},
  {path: 'facility', loadChildren: () => import('./facility/facility.module').then(module => module.FacilityModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
