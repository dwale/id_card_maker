import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Cards} from '../interface/cards';
import {isNullOrUndefined} from 'util';

@Injectable({
  providedIn: 'root'
})
export class LiveTableService {
  /**
   * this stores the current state of the cards in the local storage to be emitted by the Behavior Subject
   */
  cardsArray = this.checkCardsStorage();
  /**
   * i used the BehaviorSubject to render the current state of the cards Array in the local storage
   */
  private subject = new BehaviorSubject<any>(this.cardsArray);

  constructor() {

  }

  /**
   * Checks if there are existing cards in the storage
   */
  private checkCardsStorage() {
    if (!isNullOrUndefined(localStorage.getItem('cards'))) {
     return JSON.parse(localStorage.getItem('cards')).cards;
    } else {
      return [];
    }
  }

  updateTable(data: Cards[]) {
    this.subject.next(data);
  }
  getTableData(): Observable<any> {
    return this.subject.asObservable();
  }
}
