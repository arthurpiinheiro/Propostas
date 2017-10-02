import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {
}
