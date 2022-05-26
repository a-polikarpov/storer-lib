import { NgModule } from '@angular/core';
import { StorerService } from './storer.service';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './store/counter.reducer';
import { FEATURE_NAME } from './store/constants';



@NgModule({
  imports: [
    StoreModule.forFeature(FEATURE_NAME, { counter: counterReducer  })
  ],
  providers: [
    StorerService,
  ]
})
export class StorerModule { }
