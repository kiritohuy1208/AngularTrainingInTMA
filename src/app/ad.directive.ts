import { Template } from '@angular/compiler/src/render3/r3_ast';
import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appAd]'
  
})
export class AdDirective {

  constructor(public viewCointainerRef:ViewContainerRef) { }

}
