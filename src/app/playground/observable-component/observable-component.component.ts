import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, ObservedValuesFromArray, Observer, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/Operators';

@Component({
  selector: 'app-observable-component',
  templateUrl: './observable-component.component.html',
  styleUrls: ['./observable-component.component.css']
})
export class ObservableComponentComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  constructor() { }

  ngOnInit(): void {
    const observable: Observable<number> = Observable.create((observer: any) => {
      let count = 0;
      setInterval(() => {
        observer.next(count++);

        if (count === 3) {
          observer.complete();
        }

        if (count > 5) {
          observer.error(new Error("ohh no... count is greater than 5"));
        }
      }, 1000);
    });

    // calling pipe and filter operator
    // calling pipe and then map operator
    this.subscription = observable.pipe(
      filter(d => d === 0),
      map((d) => `Round: ${d + 1}`))
      .subscribe(
        (v) => console.log(v),
        (error) => { console.error(error); alert(error) },
        () => console.log('COMPLETED')
      );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
