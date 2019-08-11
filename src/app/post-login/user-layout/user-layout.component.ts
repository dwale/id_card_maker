import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {PostLoginService} from '../shared/services/post-login.service';

@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.scss']
})
export class UserLayoutComponent implements OnInit {
  currentUser: any;
  constructor(private router: Router, private postLogin: PostLoginService) { }

  logOut() {
    sessionStorage.clear();
    this.router.navigate(['../../../landing']);
  }
  ngOnInit() {
    this.getCurrentUser();
  }
  getCurrentUser() {
    this.currentUser = this.postLogin.getCurrentUser()[0];
  }
}
