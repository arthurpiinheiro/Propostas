import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './guards/auth-guard';
import {AuthService} from './login/auth.service';
import {PaginaNaoEncontradaComponent} from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import {PropostaComponent} from './proposta/proposta.component';

const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    data: {title: 'Login'}
  },
  {
    path: '**',
    component: PaginaNaoEncontradaComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'propostas',
    component: PropostaComponent,
    canActivate: [AuthGuard]
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
