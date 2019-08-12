import {Component, OnDestroy, OnInit} from '@angular/core';
import {PostLoginService} from '../shared/services/post-login.service';
import {Subscription} from 'rxjs';
import {NewId} from '../shared/interface/new-id';
import {IdCardPreviewService} from '../shared/services/id-card-preview.service';

@Component({
  selector: 'app-id-live-preview',
  templateUrl: './id-live-preview.component.html',
  styleUrls: ['./id-live-preview.component.scss']
})
export class IdLivePreviewComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  idDetails:  NewId;
  constructor(private postLogin: PostLoginService, private cardPreview: IdCardPreviewService) {
    /**
     * Gets current state sent by the id live update service from the form
     */
    this.subscription = this.cardPreview.getPreviewData().subscribe((data: NewId) => {
      this.idDetails = data;
    });
  }

  ngOnInit() {
  }

  /**
   * End Subscription to prevent memory leak
   */
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
