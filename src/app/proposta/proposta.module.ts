import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PropostaComponent} from './proposta.component';
import {EditPropostaComponent} from './edit-proposta/edit-proposta.component';
import {NewPropostaComponent} from './new-proposta/new-proposta.component';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {ReactiveFormsModule} from '@angular/forms';
import {ComponentsModule} from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    ComponentsModule
  ],
  declarations: [
    PropostaComponent,
    EditPropostaComponent,
    NewPropostaComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class PropostaModule {

}
