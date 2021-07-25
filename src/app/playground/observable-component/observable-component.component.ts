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
        
        if(count === 3) {
          observer.complete();
        }

        if(count > 5) {
          observer.error(new Error("ohh no... count is greater than 5"));
        }
      }, 1000);
    });

    this.subscription = observable.subscribe(
      (v) => console.log(v),
      (error) => { console.error(error); alert(error) },
      () => console.log('COMPLETED')
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
