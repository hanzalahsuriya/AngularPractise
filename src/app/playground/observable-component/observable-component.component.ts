import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, ObservedValuesFromArray, Observer, Subscription } from 'rxjs';

@Component({
  selector: 'app-observable-component',
  templateUrl: './observable-component.component.html',
  styleUrls: ['./observable-component.component.css']
})
export class ObservableComponentComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  constructor() { }

  ngOnInit(): void {
    const observable :Observable<number> = Observable.create((observer: any)  => {
      let count = 0;
      setInterval(()=>{
        observer.next(count++);
      }, 1000);
    });

    this.subscription = observable.subscribe((v) => console.log(v));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
