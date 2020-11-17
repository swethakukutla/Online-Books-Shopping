import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';

let actions$ = new Observable<Action>();
actions$ = of({ type: 'Loaded Books' });

TestBed.configureTestingModule({
  providers: [provideMockActions(() => actions$)],
});

