import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: 'input[SoloNumeros]'
})
export class SoloNumerosDirective {

  constructor( private readonly : ElementRef) { }
  @HostListener('input', ['$event'])
  onChangeInput(event : Event): void  {

  }

}
