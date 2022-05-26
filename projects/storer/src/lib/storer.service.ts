import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from './store/counter.actions';
import { FEATURE_NAME } from './store/constants';

@Injectable({
  providedIn: 'root'
})
export class StorerService {
  count$: Observable<number> = this.store.select((s) => s[FEATURE_NAME].counter);

  constructor(private store: Store<any>) {}

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
