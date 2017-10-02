import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from './login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {CpfComponent} from '../components/cpf/cpf.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    LoginComponent,
    CpfComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginModule { }
