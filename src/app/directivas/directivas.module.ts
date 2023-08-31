import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectivasRoutingModule } from './directivas-routing.module';
import { CarrosComponent } from './componentes/carros/carros.component';


@NgModule({
  declarations: [
    CarrosComponent
  ],
  imports: [
    CommonModule,
    DirectivasRoutingModule
  ]
})
export class DirectivasModule { }
