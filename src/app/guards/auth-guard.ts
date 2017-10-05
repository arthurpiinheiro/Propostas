import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {AuthService} from '../login/auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

  constructor(private authService: AuthService,
              private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | boolean {
    return this.confirmAccess();
  }

  canLoad(route: Route) {
    return this.confirmAccess();
  }

  confirmAccess() {
    if (this.authService.userAuthentication()) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }

}
