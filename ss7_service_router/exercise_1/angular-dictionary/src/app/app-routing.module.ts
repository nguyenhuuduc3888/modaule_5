import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DictionaryComponent} from './component/dictionary/dictionary.component';
import {DetailComponent} from './component/detail/detail.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'list-dictionary'},
  {path: 'detail/:id', component: DetailComponent},
  {path: 'list-dictionary', component: DictionaryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
