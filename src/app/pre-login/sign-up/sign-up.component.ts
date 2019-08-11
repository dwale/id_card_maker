import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Validator} from '../../shared/util/validator';
import {PreLoginService} from '../shared/services/pre-login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signUp: FormGroup;

  constructor(private formBuilder: FormBuilder, private prelogin: PreLoginService, private router: Router) {
  }

  ngOnInit() {

    this.initializeForm();
  }

  initializeForm() {
    this.signUp = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.pattern(Validator.EMAIL_VALIDATION)])],
      fullname: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  addNewUser() {
      this.prelogin.addUser(this.signUp.value);
      this.signUp.reset();
      this.router.navigate(['landing/sign-in']);

  }

}
