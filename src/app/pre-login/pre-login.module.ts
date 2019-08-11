import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import {PreLoginRoutingModule} from './pre-login-routing.module';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PreLoginService} from './shared/services/pre-login.service';
import {ClarityModule} from '@clr/angular';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [SignInComponent, SignUpComponent],
  imports: [
    CommonModule,
    PreLoginRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ClarityModule
  ],
  providers: [PreLoginService],

})
export class PreLoginModule { }
