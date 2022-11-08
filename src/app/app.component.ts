import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromAppState from './store/app.reducer';
import * as AuthActions from './auth/store/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'CourseProjectRepeat';

  constructor(private store: Store<fromAppState.AppState>) {}

  ngOnInit() {
    this.store.dispatch(new AuthActions.AutoLogin());
  }
}
