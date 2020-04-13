import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers : number [] = [];
  enenNumbers : number [] = [];

  
  onIntervalFired(firednumber: number){
    if(firednumber % 2 === 0){
      this.enenNumbers.push(firednumber);
    }else{
      this.oddNumbers.push(firednumber);
    }
  }
oddnumbers = [1,3,5];
evennumbers = [2,4,6]
onlyOdd = false;
value = '';

//start pipe section
appStatus = new Promise( (resolve, reject) => {
  setTimeout( () => {
    resolve('stable');
  },2000);
}

);
servers = [
  {
    instanceType: 'medium',
    name: 'Production Server',
    status: 'stable',
    started: new Date(15, 1, 2017)
  },
  {
    instanceType: 'large',
    name: 'User Database',
    status: 'stable',
    started: new Date(15, 1, 2017)
  },
  {
    instanceType: 'small',
    name: 'Development Server',
    status: 'offline',
    started: new Date(15, 1, 2017)
  },
  {
    instanceType: 'small',
    name: 'Testing Environment Server',
    status: 'stable',
    started: new Date(15, 1, 2017)
  }
];
filteredStatus = '';
getStatusClasses(server: {instanceType: string, name: string, status: string, started: Date}) {
  return {
    'list-group-item-success': server.status === 'stable',
    'list-group-item-warning': server.status === 'offline',
    'list-group-item-danger': server.status === 'critical'
  };
}
onAddServer(){
  this.servers.push({
    instanceType: 'small',
    name: 'Testing 2 Environment Server',
    status: 'stable',
    started: new Date(13, 4, 2020)
  });
} 
  
}


























// serverElements = [{type:'server',name:'Test Server',content:'Just a test'}];

// onServerAdded(serverData:{serverName:string,serverContent:string}){
//   this.serverElements.push({
//     type:'server',
//     name: serverData.serverName,
//     content: serverData.serverContent
//   })

// }
// onBluePrintAdded(bluePrintData:{serverName:string,serverContent:string}){
//   this.serverElements.push({
//     type:'bluePrint',
//     name: bluePrintData.serverName,
//     content: bluePrintData.serverContent
//   })
// }
// onDestroyFirst(){
//   this.serverElements.splice(0,1);
// }