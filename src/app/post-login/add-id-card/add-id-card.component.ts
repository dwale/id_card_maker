import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PostLoginService} from '../shared/services/post-login.service';
import {IdCardPreviewService} from '../shared/services/id-card-preview.service';

@Component({
  selector: 'app-add-id-card',
  templateUrl: './add-id-card.component.html',
  styleUrls: ['./add-id-card.component.scss']
})
export class AddIdCardComponent implements OnInit {
  addIdCardForm: FormGroup;



  constructor(private formBuilder: FormBuilder, private postLogin: PostLoginService,
              private cardPreview: IdCardPreviewService) {
    this.initializeForm();

  }
  ngOnInit() {
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
    this.cardPreview.clearPreview();

  }

  /**
   * Triggers the rendering of the current state of the form
   */
  sendPreviewDetails(): void {
    this.cardPreview.updatePreview(this.addIdCardForm.value);
  }

}
