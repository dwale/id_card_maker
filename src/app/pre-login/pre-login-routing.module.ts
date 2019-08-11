import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PreLoginLayoutComponent} from './pre-login-layout/pre-login-layout.component';


const route: Routes = [
  { path: '', redirectTo: 'onboard'},
  { path: 'onboard', component: PreLoginLayoutComponent},
];

@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule]
})
export class PreLoginRoutingModule {
}
