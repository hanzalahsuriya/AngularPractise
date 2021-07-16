import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedValue: string;
  displayPlayground: boolean;

  selectEvent(selectedValue: string) {
    this.selectedValue = selectedValue;
  }

  onToggleDisplayPlayground() {
    this.displayPlayground = !this.displayPlayground;
  }

}
