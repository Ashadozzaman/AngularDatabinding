import { Component, OnInit, EventEmitter, Output , ViewChild, ElementRef,} from '@angular/core';
@Component({
  selector: 'app-cockfit',
  templateUrl: './cockfit.component.html',
  styleUrls: ['./cockfit.component.css']
})
export class CockfitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprientCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  //newServerName = '';
  // newServerContent = '';
  @ViewChild('ServerContentInput') ServerContentInput:ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(nameInput: HTMLInputElement){
    // console.log(nameInput);
    this.serverCreated.emit({
      // serverName : this.newServerName,
      serverName : nameInput.value,
      serverContent: this.ServerContentInput.nativeElement.value
    });
    // this.serverElements.push({
    //   type:'server',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // })

  }
  onAddBluePrint(nameInput: HTMLInputElement){
    this.blueprientCreated.emit({
      serverName : nameInput.value,
      // serverContent: this.newServerContent
      serverContent: this.ServerContentInput.nativeElement.value
    });
    // this.serverElements.push({
    //   type:'bluePrint',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // })
  }
   
}
