import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import {PostLoginService} from './shared/services/post-login.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PostLoginRoutingModule} from './post-login-routing.module';
import {RouterModule} from '@angular/router';
import { AddIdCardComponent } from './add-id-card/add-id-card.component';
import { IdLivePreviewComponent } from './id-live-preview/id-live-preview.component';

@NgModule({
  declarations: [UserLayoutComponent, AddIdCardComponent, IdLivePreviewComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PostLoginRoutingModule,
    RouterModule
  ],
  providers: [PostLoginService]
})
export class PostLoginModule { }
