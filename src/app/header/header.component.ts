import {
  Component,OnInit, Output, EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() selectEvent = new EventEmitter<string>();
  @Output() toggleDisplayPlayground = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSelectNav(selectedValue: string) {
    this.selectEvent.emit(selectedValue);
  }

  onToggleDisplayPlayground(){
    this.toggleDisplayPlayground.emit();
  }
}
