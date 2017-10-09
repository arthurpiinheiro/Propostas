import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './guards/auth-guard';
import {AuthService} from './login/auth.service';
import {PaginaNaoEncontradaComponent} from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import {PropostaComponent} from './proposta/proposta.component';
import {ContratoComponent} from './contrato/contrato.component';
import {NewContratoComponent} from './contrato/new-contrato/new-contrato.component';
import {EditContratoComponent} from './contrato/edit-contrato/edit-contrato.component';
import {NewPropostaComponent} from './proposta/new-proposta/new-proposta.component';
import {EditPropostaComponent} from './proposta/edit-proposta/edit-proposta.component';
import {LogoutComponent} from './logout/logout.component';
import {PerfilComponent} from './perfil/perfil.component';

const appRoutes: Routes = [
  {
    path: 'empresa/:idEmpresa',
    canActivate: [AuthGuard],
    data: {title: 'Inicio'},
    children: [
      {
        path: 'produto/:idProduto',
        children: [
          {
            path: 'propostas',
            component: PropostaComponent,
            children: [
              {
                path: 'edit/:idProduto',
                component: EditPropostaComponent
              },
              {
                path: 'new',
                component: NewPropostaComponent
              },
            ]
          },
          {
            path: 'contratos',
            component: ContratoComponent,
            children: [
              {
                path: 'edit/:idContrato',
                component: EditContratoComponent
              },
              {
                path: 'new',
                component: NewContratoComponent
              },
            ]
          },
        ]
      },
      {
        path: 'perfil',
        component: PerfilComponent,
        canActivate: [AuthGuard],
        data: {title: 'Perfil'},
      },
    ]
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {title: 'Login'}
  },
  {
    path: 'logout',
    component: LogoutComponent,
    data: {title: 'Logout'}
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
