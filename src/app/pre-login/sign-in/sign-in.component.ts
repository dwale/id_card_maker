import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Validator} from '../../shared/util/validator';
import {PreLoginService} from '../shared/services/pre-login.service';
import {Router} from '@angular/router';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({transform: 'translateX(100%)', opacity: 0}),
          animate('500ms', style({transform: 'translateX(0)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'translateX(0)', opacity: 1}),
          animate('500ms', style({transform: 'translateX(100%)', opacity: 0}))
        ])
      ]
    )
  ],
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
      this.isError = true;
      console.log('false');

    }
  }

}
