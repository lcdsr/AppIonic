import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexPageRoutingModule } from './index-page.routing';
import { IndexPageComponent } from './containers/index-page/index-page.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    IndexPageRoutingModule,
    IonicModule
  ],
  declarations: [IndexPageComponent]
})
export class IndexPageModule { }
