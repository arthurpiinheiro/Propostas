import {AfterContentInit, Component, DoCheck, Input, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-inputs',
  styleUrls: ['./inputs.component.scss'],
  template: `
    <label for="{{label}}" class="label" [ngClass]="{'label-required': labelRequired}">{{label}}</label>
    <md-form-field class="example-full-width group">
      <input mdInput
             id="{{id}}"
             placeholder="{{placeholder}}"
             maxlength="{{maxLength}}"
             type="{{types}}"
             [formControl]="control"/>
    </md-form-field>
  `
})
export class InputsComponent implements OnInit, AfterContentInit {
  @Input() id: string;
  @Input() placeholder: string;
  @Input() maxLength: any;
  @Input() types: string;
  @Input() label: string;
  @Input() control: FormControl;
  labelRequired: boolean;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.labelRequired = this.control.hasError('required');
  }
}
