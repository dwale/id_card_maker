import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserLayoutComponent} from './user-layout/user-layout.component';


const route: Routes = [
  { path: '', redirectTo: 'id-maker'},
  { path: 'id-maker', component: UserLayoutComponent}
];

@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule]
})
export class PostLoginRoutingModule {
}
