import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostDetailRoutingModule } from './post-detail-routing.module';
import { PostDetailComponent } from './containers/post-detail/post-detail.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    PostDetailRoutingModule
  ],
  declarations: [PostDetailComponent],
  schemas : [CUSTOM_ELEMENTS_SCHEMA]
})
export class PostDetailModule { }
