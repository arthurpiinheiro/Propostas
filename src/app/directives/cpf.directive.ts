import {Directive, ElementRef, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appInputCpf]'
})
export class CpfDirective implements OnInit {
  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
  }

  ngOnInit() {
    console.log('foi');
  }
}
