import {Directive, ElementRef, HostListener, OnInit} from '@angular/core';

@Directive({
  selector: '[appInputCpf]'
})
export class CpfDirective implements OnInit {
  constructor(el: ElementRef) {
  }

  ngOnInit() {
  }

  @HostListener('keyup', ['$event'])
  onKeyup($event: any) {
    let str = $event.target.value + '';
    str = str.replace(/\D/g, '');
    if (str.length <= 14) {
      str = str.replace(/(\d{3})(\d)/, '$1.$2');
      str = str.replace(/(\d{3})(\d)/, '$1.$2');
      str = str.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
      $event.target.value = str;
    }
    console.log($event.target.value);
  }
}
