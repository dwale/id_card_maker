import {Component, OnDestroy, OnInit} from '@angular/core';
import {PostLoginService} from '../shared/services/post-login.service';
import {Subscription} from 'rxjs';
import {NewId} from '../shared/interface/new-id';

@Component({
  selector: 'app-id-live-preview',
  templateUrl: './id-live-preview.component.html',
  styleUrls: ['./id-live-preview.component.scss']
})
export class IdLivePreviewComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  idDetails:  NewId;
  constructor(private postLogin: PostLoginService) {
    this.subscription = this.postLogin.getPreviewData().subscribe((data: NewId) => {
      console.log('data gotten from service', data);
      this.idDetails = data;
      console.log(data, 'data', this.idDetails);
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
