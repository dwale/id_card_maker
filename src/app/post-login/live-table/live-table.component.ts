import { Component, OnInit } from '@angular/core';
import {NewId} from '../shared/interface/new-id';
import {PostLoginService} from '../shared/services/post-login.service';
import {LiveTableService} from '../shared/services/live-table.service';
import {Subscription} from 'rxjs';
import {Cards} from '../shared/interface/cards';

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

  constructor(private postLogin: PostLoginService, private liveTable: LiveTableService ) {
    this.subscription = this.liveTable.getTableData().subscribe((data: Cards[]) => {
      console.log('data gotten from service', data);
      this.cardsArray = data;
      console.log(data, 'From Table', this.cardsArray);
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
