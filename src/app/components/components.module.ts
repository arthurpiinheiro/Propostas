import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BtnSubmitComponent} from './form/btn-submit/btn-submit.component';
import {MatButtonModule, MatInputModule, MatTooltipModule} from '@angular/material';
import {CpfComponent} from './form/cpf/cpf.component';
import {CpfDirective} from '../directives/cpf.directive';
import {InputsComponent} from './form/inputs/inputs.component';
import {ErrorsComponent} from './form/errors/errors.component';
import {ReactiveFormsModule} from '@angular/forms';
import {DirectiveModule} from '../directives/directive.module';

@NgModule({
  imports: [
    CommonModule,
    MatTooltipModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    DirectiveModule
  ],
  declarations: [
    BtnSubmitComponent,
    InputsComponent,
    ErrorsComponent,
    CpfComponent,
    CpfDirective
  ],
  exports: [
    BtnSubmitComponent,
    InputsComponent,
    ErrorsComponent,
    CpfComponent,
    CpfDirective
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ComponentsModule {
}
