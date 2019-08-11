import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {isNullOrUndefined} from 'util';

@Injectable({
  providedIn: 'root'
})
export class VerifiedGuardGuard implements CanActivate {

  constructor(private router: Router) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (isNullOrUndefined(sessionStorage.getItem('Current User'))) {
      this.router.navigate(['../../../landing/sign-in']);
      console.log('no');
      return false;
    } else {
      console.log('yes');
      return true;
    }
  }
}
