import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { ApiService } from './api.service';
import { filter, exhaustMap, map } from 'rxjs/operators';
import { Character } from '../models/character.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // tslint:disable-next-line:variable-name
  private _characters$ = new BehaviorSubject<Character[]>(null);
  private actions$ = new Subject<string>();

  constructor(private apiService: ApiService) {
    this.actions$
      .pipe(
        filter(action => action === 'load'),
        exhaustMap(() => this.apiService.loadCharacters())
      )
      .subscribe(characters => this._characters$.next(characters));
  }

  get characters$() {
    return this._characters$.asObservable();
  }

  get characterEntities$() {
    return this.characters$.pipe(
      map(characters => Object.fromEntries(characters.map(x => [x.id, x])))
    );
  }

  load() {
    this.actions$.next('load');
  }
}
