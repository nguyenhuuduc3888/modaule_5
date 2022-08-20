import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListproductComponent} from './component/listproduct/listproduct.component';
import {CreateproductComponent} from './component/createproduct/createproduct.component';
import {EditproductComponent} from './component/editproduct/editproduct.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'listproduct'},
  {path: 'listproduct', component: ListproductComponent},
  {path: 'createproduct', component: CreateproductComponent},
  {path: 'editproduct/:id', component: EditproductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
