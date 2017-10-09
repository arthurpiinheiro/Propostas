import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MAT_PLACEHOLDER_GLOBAL_OPTIONS, MatSelectModule, MatTooltipModule} from '@angular/material';

import {ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app.routing.module';
import {PaginaNaoEncontradaModule} from './pagina-nao-encontrada/pagina-nao-encontrada.module';
import {LoginModule} from './login/login.module';
import {PropostaModule} from './proposta/proposta.module';
import {ContratoModule} from './contrato/contrato.module';
import {Ng2SelectizeModule} from 'ng2-selectize';

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
    PropostaModule,
    MatSelectModule,
    ContratoModule,
    Ng2SelectizeModule,
    MatTooltipModule
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
