import { Component } from '@angular/core';
import { StorerService } from '../../../storer/src/lib/storer.service';
import { Store } from '@ngrx/store';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'playground';

  constructor(
    public storer: StorerService,
    private store: Store<any>
  ) {
    this.store.select((s) => s).subscribe((state) => {
      console.log('State', state);
    })
  }

}
