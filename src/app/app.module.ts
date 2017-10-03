import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdInputModule, MdSelectModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app.routing.module';
import {PropostaModule} from './proposta/proposta.module';
import {HomeModule} from './home/home.module';
import {PaginaNaoEncontradaModule} from './pagina-nao-encontrada/pagina-nao-encontrada.module';
import {ComponentsModule} from './components/components.module';
import {DirectiveModule} from './directives/directive.module';
import {LoginComponent} from './login/login.component';
import {CpfComponent} from './components/cpf/cpf.component';
import {CpfDirective} from './directives/cpf.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CpfComponent,
    CpfDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    PropostaModule,
    HomeModule,
    PaginaNaoEncontradaModule,
    ComponentsModule,
    MdButtonModule,
    MdInputModule,
    MdSelectModule,
    DirectiveModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
