import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './components';
import { GenericHttpService } from './generic-http/generic-http.service';
import { HttpClientModule } from '@angular/common/http';

const COMPONENTS: any[] = [
  MapComponent

];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [...COMPONENTS],
  exports: [
    ...COMPONENTS,
    CommonModule
  ],
  providers:[GenericHttpService]
})
export class SharedModule { }
