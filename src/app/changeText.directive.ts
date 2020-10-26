import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[ChangeText]'
})
export class ChangeTextDirective {

  constructor(
    public element:ElementRef
  ) {
    element.nativeElement.innerHtml="Text Chaned by directive"
  }

}
