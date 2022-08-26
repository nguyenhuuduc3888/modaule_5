import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'home/home'},
    {path: 'home', loadChildren: () => import('./home/home.module').then(module => module.HomeModule)},
    {path: 'patient', loadChildren: () => import('./libary/libary.module').then(module => module.LibraryModule)},
  ]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
