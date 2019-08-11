import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NotFoundComponent} from './shared/components/not-found/not-found.component';
import {VerifiedGuardGuard} from './shared/verified-guard.guard';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'landing'},
  {path: 'landing', loadChildren: './pre-login/pre-login.module#PreLoginModule'},
  {path: 'user', loadChildren: './post-login/post-login.module#PostLoginModule', canActivate: [VerifiedGuardGuard]},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
