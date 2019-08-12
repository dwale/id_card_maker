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
  isError: boolean;


  constructor(private formBuilder: FormBuilder, private prelogin: PreLoginService, private router: Router) {
  }
  ngOnInit() {
    this.isError = false;
    this.initializeForm();
    sessionStorage.removeItem('Current User');
  }

  initializeForm() {
    this.signIn = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.pattern(Validator.EMAIL_VALIDATION)])],
      password: ['', Validators.required]
    });
  }

  logIn() {
    console.log(this.prelogin.validateLogin(this.signIn.value));
    if (this.prelogin.validateLogin(this.signIn.value)) {
      this.router.navigate(['../../../user']);
    } else {
      this.isError = true;
      setTimeout(() => {
        this.isError = false;
      }, 3000);

    }
  }

}
