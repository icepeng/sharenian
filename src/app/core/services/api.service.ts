import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Character } from '../models/character.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

  loadCharacters() {
    return this.http.get<Character[]>('https://pya.icepeng.com/characters');
  }
}
