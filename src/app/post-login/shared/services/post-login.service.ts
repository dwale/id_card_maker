import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {Cards} from '../interface/cards';
import {LiveTableService} from './live-table.service';

@Injectable({
  providedIn: 'root'
})
export class PostLoginService {
  private cards: Cards[];
  private latestId: number;

  constructor(private liveTable: LiveTableService) {
    const cards = this.getCards();
    if (cards.length === 0) {
      this.latestId = 0;
    } else {
      const lastId = cards[cards.length - 1].id;
      this.latestId = lastId + 1;
    }
  }


  public  getCards(): Cards[] {
    const storedCards = JSON.parse(localStorage.getItem('cards'));
    return storedCards == null ? [] : storedCards.cards;
  }

  private addCardToStorage(newCard: Cards[]): void {
    this.liveTable.updateTable(newCard);
    localStorage.setItem('cards', JSON.stringify({cards: newCard}));

  }

  public addCard(card: Cards) {
    card.id = this.latestId;
    console.log(card);
    const cards = this.getCards();
    cards.push(card);
    this.addCardToStorage(cards);
    this.latestId ++;
  }
}
