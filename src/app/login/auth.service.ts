import {EventEmitter, Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {


  showMenu = new EventEmitter<boolean>();

  constructor(private router: Router) {
  }

  userAuthentication(user?, isLoggin?) {
    //   console.log(user, isLoggin);
    //   return false;
    // }

    if (user && user.cpf === '16369502723' && user.password === '123456') {
      this.showMenu.emit(true);
      return true;
    } else if (isLoggin) {
      this.showMenu.emit(true);
      return true;
    } else {
      this.showMenu.emit(false);
      return false;
    }
  }

}
