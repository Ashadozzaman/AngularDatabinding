import { Component, OnInit, Input, OnChanges, SimpleChanges, OnDestroy, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit,OnChanges,OnDestroy{
  @Input('srv_element') element: {type:string,name:string,content:string};
  @Input() name:string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph:ElementRef;
  constructor() {
    console.log('Constructior')
   }

   ngOnChanges(changes: SimpleChanges ){
      console.log('onChanges Call');
      console.log('Changes');

   }
  ngOnInit(): void {
    console.log('ngInit call!');
    console.log('Text Content:'+this.header.nativeElement.textContent);
    console.log('Test:'+ this.paragraph.nativeElement.textContent);
    }

  ngOnDestroy(){
    console.log('ngdestroy call!')
  }
}
