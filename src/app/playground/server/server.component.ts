import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    .online {
        color: black;
    }

    .offline {
        color: white;
    }
  `]
})
export class ServerComponent implements OnInit {

  @Input() name: string;
  @Input() id: number;
  status = '';

  constructor() {
    this.status = Math.random() > 0.5 ? 'online' : 'offline';
  }

  ngOnInit(): void {
  }

  getStatusColor() {
    return this.status === 'online' ? 'green' : 'red';
  }

}
