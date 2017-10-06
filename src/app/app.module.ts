import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MAT_PLACEHOLDER_GLOBAL_OPTIONS} from '@angular/material';

import {ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app.routing.module';
import {PaginaNaoEncontradaModule} from './pagina-nao-encontrada/pagina-nao-encontrada.module';
import {HomeModule} from './home/home.module';
import {LoginModule} from './login/login.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    LoginModule,
    PaginaNaoEncontradaModule,
    HomeModule
  ],
  providers: [
    {
      provide: MAT_PLACEHOLDER_GLOBAL_OPTIONS,
      useValue: {
        float: 'never'
      }
    },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
