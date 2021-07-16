import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Server } from '../server.model';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  serverName1 = '';
  serverName2 = '';
  serverName3 = '';
  serverName4 = '';
  addServer: boolean;
  servers: Server[] = [];
  serverCreated: boolean;
  username: string;

  @ViewChild('servername3', {static: true}) servername3ElementRef: ElementRef;

  constructor() {
    setTimeout(() => {
      this.addServer = true;
    }, 2000);
   }

  ngOnInit(): void {
  }

  onInput(event: any) {
    const value = (<HTMLInputElement>event.target).value;
    this.serverName1 = value;
  }

  getServerName3() {
    this.serverName3 = this.servername3ElementRef.nativeElement.value;
  }

  getServerName4(servername4ElementRef: HTMLInputElement) {
    this.serverName4 = servername4ElementRef.value;
  }

  onAdd() {
    this.serverCreated = true;
    this.servers.push(new Server(this.serverName1, new Date()));
  }

  onResetUsername() {
    this.username = '';
  }
}
