import {NgModule} from '@angular/core';
import {LoginComponent} from './login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {LoginService} from './login.service';
import {ComponentsModule} from '../components/components.module';
import {HttpModule} from '@angular/http';

@NgModule({
  imports: [
    ReactiveFormsModule,
    ComponentsModule,
    HttpModule
  ],
  declarations: [
    LoginComponent
  ],
  exports: [
    LoginComponent
  ],
  providers: [
    LoginService
  ]
})
export class LoginModule {
}
