import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {NewId} from '../interface/new-id';

@Injectable({
  providedIn: 'root'
})
export class IdCardPreviewService {
  private subject = new Subject<any>();

  updatePreview(data: NewId) {
    this.subject.next(data);
  }

  /**
   * Removes the current state array subscribed to
   */
  clearPreview() {
    this.subject.next();
  }

  getPreviewData(): Observable<any> {
    return this.subject.asObservable();
  }

  constructor() { }
}
