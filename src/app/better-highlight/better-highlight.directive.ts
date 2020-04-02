import { Directive, OnInit, Renderer2, ElementRef,HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  constructor( private eleRef: ElementRef, private renderer : Renderer2) { }
  @Input() defaultColor: string = 'transparent';
  @Input('appBetterHighlight') highlightColor: string = 'green';

  @HostBinding('style.backgroundColor') backgroundColor:string;
  ngOnInit(){
    // this.renderer.setStyle(this.eleRef.nativeElement, 'color', 'yellow');
  }
  @HostListener('mouseenter') mouseover(eventData: Event){
    // this.renderer.setStyle(this.eleRef.nativeElement, 'color', 'yellow');
    this.backgroundColor = this.highlightColor;

  }
  @HostListener('mouseleave') mouseleave(eventData: Event){
    // this.renderer.setStyle(this.eleRef.nativeElement, 'color', 'transparent');
      this.backgroundColor = this.defaultColor;
  }

}
