import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-cpf',
  template: `
    <app-inputs
      [id]="'cpf'"
      [placeholder]="'Digite seu cpf'"
      [maxLength]="14"
      [types]="'text'"
      [label]="'cpf'"
      appInputCpf
      [control]="form.get('cpf')"
    ></app-inputs>
    <app-messages-errors [control]="form.get('cpf')"></app-messages-errors>
  `
})
export class CpfComponent implements OnInit {
  @Input() form: FormGroup;

  constructor() {
  }

  ngOnInit() {
    if (this.form) {
      this.addControl();
    }
  }

  addControl() {
    this.form.addControl('cpf', new FormControl('', Validators.compose([Validators.required, this.cpfValidator(11)])));
  }

  cpfValidator(minimum) {
    return function (input) {
      if (input && (input.value.length >= 1 || input.touched)) {
        let value: string;
        if (input.value.indexOf('.') !== -1) {
          value = input.value.replace(/\./g, '');
        }
        if (input.value.indexOf('-') !== -1) {
          value = value.replace(/\-/g, '');
        }

        if (value && value.length === minimum) {
          return null;
        } else if (input && input.value.length >= 1) {
          return {'cpfLength': true};
        }
      }
    };
  }

}
