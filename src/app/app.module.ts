import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MD_PLACEHOLDER_GLOBAL_OPTIONS, MdButtonModule, MdInputModule, MdSelectModule,
  MdTooltipModule
} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app.routing.module';
import {PropostaModule} from './proposta/proposta.module';
import {HomeModule} from './home/home.module';
import {PaginaNaoEncontradaModule} from './pagina-nao-encontrada/pagina-nao-encontrada.module';
import {DirectiveModule} from './directives/directive.module';
import {LoginComponent} from './login/login.component';
import {CpfComponent} from './components/form/cpf/cpf.component';
import {CpfDirective} from './directives/cpf.directive';
import {ErrorsComponent} from './components/form/errors/errors.component';
import {InputsComponent} from './components/form/inputs/inputs.component';
import {BtnSubmitComponent} from './components/form/btn-submit/btn-submit.component';
import {LoginService} from './login/login.service';
import {HttpModule} from "@angular/http";

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
    HomeModule,
    PaginaNaoEncontradaModule,
    MdButtonModule,
    MdInputModule,
    MdSelectModule,
    DirectiveModule,
    MdTooltipModule,
    HttpModule
  ],
  providers: [
    {provide: MD_PLACEHOLDER_GLOBAL_OPTIONS, useValue: {float: 'never'}},
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
