import {BrowserModule} from '@angular/platform-browser';
import {Component, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {HeaderComponent} from './header-footer/header/header.component';
import {FooterComponent} from './header-footer/footer/footer.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import {NgxPaginationModule} from 'ngx-pagination';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 1000,
      progressBar: true,
      progressAnimation: 'increasing',
      preventDuplicates: true
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
