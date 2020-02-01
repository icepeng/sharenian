import { SelectionChange } from '@angular/cdk/collections';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Character } from '../../core/models/character.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  // tslint:disable-next-line:variable-name
  private _event$ = new Subject<SelectionChange<Character>>();

  constructor() {}

  get event$() {
    return this._event$.asObservable();
  }

  emit(event: SelectionChange<Character>) {
    this._event$.next(event);
  }
}
