import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuizElect13PageRoutingModule } from './quiz-elect13-routing.module';

import { QuizElect13Page } from './quiz-elect13.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { RadioButtonModule } from 'primeng/radiobutton';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuizElect13PageRoutingModule,
    ComponentsModule,
    RadioButtonModule,
  ],
  declarations: [QuizElect13Page],
})
export class QuizElect13PageModule {}
