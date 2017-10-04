import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-messages-errors',
  styleUrls: ['./errors.component.scss'],
  template: `
    <div class="container-messages-errors">
      <md-error *ngIf="control.hasError('required') && control.touched">
        Este campo é obrigatório.
      </md-error>
      <md-error *ngIf="control.hasError('minLength') && control.touched">
        Digite no minimo 6 caracteres.
      </md-error>
      <md-error *ngIf="control.hasError('cpfLength') && control.touched">
        Digite o cpf corretamente.
      </md-error>
    </div>
  `
})
export class ErrorsComponent implements OnInit {
  @Input() control: FormControl;

  constructor() {
  }

  ngOnInit() {
  }

}
