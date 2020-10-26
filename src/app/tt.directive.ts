import { Directive, ElementRef, OnInit } from '@angular/core'


@Directive({
  selector: '[apphightlight]'
})
export class HighlightDirective implements OnInit{

  constructor(
  public el:ElementRef
  ) {


   }
   ngOnInit(){

    this.el.nativeElement.style.backgroundcolor="yellow"
   }

}
