import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Validator} from '../../shared/util/validator';
import {PreLoginService} from '../shared/services/pre-login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  signIn: FormGroup;


  constructor(private formBuilder: FormBuilder, private prelogin: PreLoginService, private router: Router) {
  }
  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.signIn = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.pattern(Validator.EMAIL_VALIDATION)])],
      password: ['', Validators.required]
    });
  }

  logIn() {
    if (this.prelogin.validateLogin(this.signIn.value).length === 1) {

      // this.router.navigate(['../../dashboard']);
      console.log('true');
    } else {
      console.log('false');

    }
  }

}
