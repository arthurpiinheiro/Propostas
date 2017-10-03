import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

const REGEX_CPF = '(^\\d{3}\x2E\\d{3}\x2E\\d{3}\x2D\\d{2}$)';

@Component({
  selector: 'app-cpf',
  styleUrls: ['./cpf.component.scss'],
  template: `
    <md-form-field class="example-full-width group no-float">
      <input type="text" mdInput id="cpf" appInputCpf placeholder="Digite seu cpf" maxlength="14" [formControl]="form.get('cpf')">
      <md-error *ngIf="form.get('cpf').hasError('required')">
        Cpf é <strong>obrigatório</strong>
      </md-error>
      <md-error *ngIf="!form.get('cpf').hasError('required') && form.get('cpf').hasError('cpfLength')">
        Digite o cpf corretamente.
      </md-error>
    </md-form-field>`
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
    this.form.addControl('cpf', new FormControl('', Validators.compose([Validators.required, this.cpfValidator(14)])));
  }

  cpfValidator(minimum) {
    return function (input) {
      return input.value && input.value.length >= minimum ? null : {cpfLength: true};
    };
  }

}
