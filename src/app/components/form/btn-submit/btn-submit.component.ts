import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-btn-submit',
  styleUrls: ['./btn-submit.component.scss'],
  template: `
    <button type="submit"
            md-button
            (mouseover)="confirmForm()"
            [ngClass]="{'btnDisabled': !form.valid}"
            mdTooltip="{{textTooltip}}">{{textBtn}}
    </button>
  `
})
export class BtnSubmitComponent implements OnInit, OnChanges {
  textTooltip: string;
  @Input() textBtn: string;
  @Input() form: FormGroup;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    console.log(this.form.valid);

  }

  confirmForm() {
    if (!this.form.valid) {
      this.textTooltip = 'Verifique seus dados no formulário';
    } else {
      this.textTooltip = '';
    }
  }

}
