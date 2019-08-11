import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {PostLoginService} from '../shared/services/post-login.service';

@Component({
  selector: 'app-add-id-card',
  templateUrl: './add-id-card.component.html',
  styleUrls: ['./add-id-card.component.scss']
})
export class AddIdCardComponent implements OnInit {
  addIdCardForm: FormGroup;


  constructor(private formBuilder: FormBuilder, private postLogin: PostLoginService, private router: Router) {
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

  // addId() {
  //   this.postLogin.addNewId(this.addIdCardForm.value);
  // }

  sendPreviewDetails(): void {
    console.log('sending to service', this.addIdCardForm.value);
    this.postLogin.updatePreview(this.addIdCardForm.value);
  }

}
