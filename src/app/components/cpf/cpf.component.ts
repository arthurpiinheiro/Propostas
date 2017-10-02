import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

const REGEX_CPF = '(^\\d{3}\x2E\\d{3}\x2E\\d{3}\x2D\\d{2}$)';

@Component({
  selector: 'app-cpf',
  styleUrls: ['./cpf.component.scss'],
  template: `
    <md-form-field class="example-full-width group">
      <input mdInput appInputCpf placeholder="Digite seu cpf" [formControl]="form.get('cpf')">
      <md-error *ngIf="form.get('cpf').hasError('pattern')">
        Digite o cpf corretamente
      </md-error>
      <md-error *ngIf="form.get('cpf').hasError('required')">
        Cpf é <strong>obrigatório</strong>
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
    this.form.addControl('cpf', new FormControl('', Validators.compose([Validators.required, Validators.pattern(REGEX_CPF)])));
  }
}
