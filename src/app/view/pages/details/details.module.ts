import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { SharedModule } from './../../../shared/shared.module';

import { DetailsRoutingModule } from './details-routing.module';
import { DetailsComponent } from './details.component';
import { ModalVideoComponent } from './components/modal-video/modal-video.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    DetailsComponent,
    ModalVideoComponent
  ],
  imports: [
    CommonModule,
    DetailsRoutingModule,
    HttpClientModule,
    SharedModule,
    MatDialogModule
  ],
  entryComponents: [
    ModalVideoComponent
  ]
})
export class DetailsModule { }
