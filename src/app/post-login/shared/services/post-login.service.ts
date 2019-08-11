import { Injectable } from '@angular/core';
import {NewId} from '../interface/new-id';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostLoginService {
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
