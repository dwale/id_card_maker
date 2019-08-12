import { Component, OnInit } from '@angular/core';
import {NewId} from '../shared/interface/new-id';
import {PostLoginService} from '../shared/services/post-login.service';
import {LiveTableService} from '../shared/services/live-table.service';
import {Subscription} from 'rxjs';
import {Cards} from '../shared/interface/cards';
import {isNullOrUndefined} from 'util';

@Component({
  selector: 'app-live-table',
  templateUrl: './live-table.component.html',
  styleUrls: ['./live-table.component.scss']
})
export class LiveTableComponent implements OnInit {
  subscription: Subscription;
  cardsArray: Cards[];
  openModal: boolean;
  selectedCard: {};
  noCards: boolean;

  constructor(private postLogin: PostLoginService, private liveTable: LiveTableService ) {
    this.subscription = this.liveTable.getTableData().subscribe((data: Cards[]) => {
      this.cardsArray = data;
      this.noCards = isNullOrUndefined(this.cardsArray) || this.cardsArray.length === 0;
    });
  }

  ngOnInit() {
    this.openModal = false;
  }
  removeCard(id) {
    this.postLogin.removeCard(id);
  }
  previewModal(cardDetails) {
    console.log(cardDetails);
    this.selectedCard = cardDetails;
    this.openModal = true;
  }
  closeModal() {
    this.selectedCard = {};
    this.openModal = false;
  }

}
