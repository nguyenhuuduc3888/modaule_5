import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListproductComponent} from './list-product/listproduct.component';
import {CreateproductComponent} from './create-product/createproduct.component';
import {EditproductComponent} from './edit-product/editproduct.component';


const routes: Routes = [
  {path: 'list', component: ListproductComponent},
  {path: 'create', component: CreateproductComponent},
  {path: 'edit/:id', component: EditproductComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {
}
