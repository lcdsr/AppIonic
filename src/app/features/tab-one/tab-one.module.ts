import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { TabOneRoutingModule } from './tab-one.routing';
import { TabOneComponent } from './containers/tab-one/tab-one.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    TabOneRoutingModule
  ],
  declarations: [TabOneComponent],
  schemas : [CUSTOM_ELEMENTS_SCHEMA]
})
export class TabOneModule { }
