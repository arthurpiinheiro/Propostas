import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {PropostaComponent} from './proposta/proposta.component';
import {AuthGuard} from './guards/auth-guard';
import {AuthService} from './login/auth.service';
import {HomeComponent} from './home/home.component';
import {PaginaNaoEncontradaComponent} from './pagina-nao-encontrada/pagina-nao-encontrada.component';

const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    data: {title: 'Login'}
  },
  {
    path: 'proposta',
    component: PropostaComponent,
    data: {title: 'Proposta'},
    canActivate: [AuthGuard],
    canLoad: [AuthGuard]
  },
  {
    path: '',
    component: HomeComponent,
    data: {title: 'Home'},
    canActivate: [AuthGuard],
    canLoad: [AuthGuard]
  },
  {
    path: '**',
    component: PaginaNaoEncontradaComponent,
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
