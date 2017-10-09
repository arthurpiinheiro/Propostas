import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './guards/auth-guard';
import {AuthService} from './login/auth.service';
import {PaginaNaoEncontradaComponent} from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import {PropostaComponent} from './proposta/proposta.component';
import {ContratoComponent} from './contrato/contrato.component';

const appRoutes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: PaginaNaoEncontradaComponent,
    data: {title: 'Inicio'}
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {title: 'Login'}
  },
  {
    path: 'propostas',
    component: PropostaComponent,
    canActivate: [AuthGuard],
    data: {title: 'Propostas'}
  },
  {
    path: 'contratos',
    component: ContratoComponent,
    canActivate: [AuthGuard],
    data: {title: 'Contratos'}
  },
  {
    path: 'logout',
    redirectTo: 'login',
    data: {title: 'Logout'}
  },
  {
    path: 'perfil',
    component: PaginaNaoEncontradaComponent,
    canActivate: [AuthGuard],
    data: {title: 'Perfil'},
  },
  {
    path: '**',
    component: PaginaNaoEncontradaComponent,
    canActivate: [AuthGuard],
    data: {title: ''}
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthService,
    AuthGuard
  ]
})

export class AppRoutingModule {
}
