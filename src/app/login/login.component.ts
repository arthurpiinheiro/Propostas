import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formLogin = this.formBuilder.group({
      'senha': [null, this.minLength(6)]
    });
  }

  login(form) {
    console.log(form);
  }

  minLength(minimum) {
    return function (input) {
      if (input.value && input.value.length >= minimum) {
        return null;
      } else if (!input.value) {
        return {'required': true};
      } else {
        return {'minLength': true};
      }
    };
  }
}
