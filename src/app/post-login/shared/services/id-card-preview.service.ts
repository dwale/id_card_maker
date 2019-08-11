import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {NewId} from '../interface/new-id';

@Injectable({
  providedIn: 'root'
})
export class IdCardPreviewService {
  private subject = new Subject<any>();

  updatePreview(data: NewId) {
    console.log('sending to preview from service', data);
    this.subject.next(data);
  }

  clearPreview() {
    this.subject.next();
  }

  getPreviewData(): Observable<any> {
    return this.subject.asObservable();
  }

  constructor() { }


  addNewId(idDetails: NewId) {

  }
}
