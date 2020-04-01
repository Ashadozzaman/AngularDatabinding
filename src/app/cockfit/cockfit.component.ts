import { Component, OnInit, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-cockfit',
  templateUrl: './cockfit.component.html',
  styleUrls: ['./cockfit.component.css']
})
export class CockfitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprientCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  newServerName = '';
  newServerContent = '';
  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(){
    this.serverCreated.emit({
      serverName : this.newServerName,
      serverContent: this.newServerContent
    });
    // this.serverElements.push({
    //   type:'server',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // })

  }
  onAddBluePrint(){
    this.blueprientCreated.emit({
      serverName : this.newServerName,
      serverContent: this.newServerContent
    });
    // this.serverElements.push({
    //   type:'bluePrint',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // })
  }
   
}
