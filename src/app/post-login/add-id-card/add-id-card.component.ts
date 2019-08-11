import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {PostLoginService} from '../shared/services/post-login.service';
import {IdCardPreviewService} from '../shared/services/id-card-preview.service';
import {LiveTableService} from '../shared/services/live-table.service';

@Component({
  selector: 'app-add-id-card',
  templateUrl: './add-id-card.component.html',
  styleUrls: ['./add-id-card.component.scss']
})
export class AddIdCardComponent implements OnInit {
  addIdCardForm: FormGroup;


  constructor(private formBuilder: FormBuilder, private postLogin: PostLoginService,
              private cardPreview: IdCardPreviewService, private liveTable: LiveTableService,
              private router: Router) {
  }
  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.addIdCardForm = this.formBuilder.group({
      fullname: ['', Validators.required],
      age: ['', Validators.required],
      bloodGroup: ['', Validators.required],
      location: ['', Validators.required]
    });
  }

  addId() {
    this.postLogin.addCard(this.addIdCardForm.value);
    this.addIdCardForm.reset();
  }

  sendPreviewDetails(): void {
    console.log('sending to service', this.addIdCardForm.value);
    this.cardPreview.updatePreview(this.addIdCardForm.value);
  }

}
