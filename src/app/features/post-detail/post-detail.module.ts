import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostDetailRoutingModule } from './post-detail-routing.module';
import { PostDetailComponent } from './containers/post-detail/post-detail.component';
import { SharedModule } from '../../shared/shared.module';
import { PostDetailModalComponent } from './containers/post-detail-modal/post-detail-modal.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    SharedModule,
    PostDetailRoutingModule,
    IonicModule
  ],
  entryComponents:[PostDetailModalComponent],
  declarations: [PostDetailComponent, PostDetailModalComponent],
  schemas : [CUSTOM_ELEMENTS_SCHEMA]
})
export class PostDetailModule { }
