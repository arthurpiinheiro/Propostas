import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatInputModule,
  MatSelectModule,
  MatTooltipModule,
  MAT_PLACEHOLDER_GLOBAL_OPTIONS
} from '@angular/material';

import {ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app.routing.module';
import {PropostaModule} from './proposta/proposta.module';
import {HttpModule} from '@angular/http';
import {PaginaNaoEncontradaModule} from './pagina-nao-encontrada/pagina-nao-encontrada.module';
import {DirectiveModule} from './directives/directive.module';

import {LoginComponent} from './login/login.component';
import {CpfComponent} from './components/form/cpf/cpf.component';
import {ErrorsComponent} from './components/form/errors/errors.component';
import {InputsComponent} from './components/form/inputs/inputs.component';
import {BtnSubmitComponent} from './components/form/btn-submit/btn-submit.component';

import {CpfDirective} from './directives/cpf.directive';

import {LoginService} from './login/login.service';
import {HomeModule} from './home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CpfComponent,
    CpfDirective,
    ErrorsComponent,
    InputsComponent,
    BtnSubmitComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    PropostaModule,
    PaginaNaoEncontradaModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    DirectiveModule,
    MatTooltipModule,
    HttpModule,
    HomeModule
  ],
  providers: [
    {
      provide: MAT_PLACEHOLDER_GLOBAL_OPTIONS,
      useValue: {
        float: 'never'
      }
    },
    LoginService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
