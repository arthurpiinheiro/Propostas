import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';

@Injectable()
export class LoginService {
  private url = 'localhost/propostas/api/';  // URL to web api
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {
  }

  login(form) {
    const options = new RequestOptions({headers: this.headers});

    // return this.http
      // .post(`${this.url}/user/login`, JSON.stringify({data: form}), options)
      // .observable()
      // .then(res => res.json().data)
      // .catch(this.handleError);
  }
}
