import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {NewId} from '../interface/new-id';
import {Cards} from '../interface/cards';

@Injectable({
  providedIn: 'root'
})
export class LiveTableService {
  cardsArray = JSON.parse(localStorage.getItem('cards')).cards;
  private subject = new BehaviorSubject<any>(this.cardsArray);

  constructor() { }

  updateTable(data: Cards[]) {
    console.log('sending to table from service', data);
    this.subject.next(data);
  }
  getTableData(): Observable<any> {
    return this.subject.asObservable();
  }
}
