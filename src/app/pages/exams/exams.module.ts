import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExamsPageRoutingModule } from './exams-routing.module';

import { ExamsPage } from './exams.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExamsPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [ExamsPage],
})
export class ExamsPageModule {}
