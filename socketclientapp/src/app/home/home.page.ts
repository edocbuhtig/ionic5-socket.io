import { Component } from '@angular/core';
import * as io from 'socket.io-client';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  text_input: any;
  server_response: any;
  socket:any;
  server_add: any;

  constructor() {}

  connect(){
    this.socket = io(this.server_add);
    this.Receive();
  }

  toHex(str) {
    var result = '';
    for (var i=0; i<str.length; i++) {
      result += str.charCodeAt(i).toString(16);
    }
    return result;
  }

  send(msg) {
    if(msg!='') {
     this.socket.emit('message', this.toHex(msg));
    }
    this.text_input='';
  }

  Receive(){
    this.socket.on('message', (msg) => {
      this.server_response = msg;
    });
 }

}
