import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContratoComponent} from './contrato.component';
import {NewContratoComponent} from './new-contrato/new-contrato.component';
import {EditContratoComponent} from './edit-contrato/edit-contrato.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ContratoComponent,
    NewContratoComponent,
    EditContratoComponent]
})
export class ContratoModule {
}
