import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuizElect1PageRoutingModule } from './quiz-elect1-routing.module';

import { QuizElect1Page } from './quiz-elect1.page';
import { ComponentsModule } from 'src/app/components/components.module';
// import { ButtonModule } from 'primeng/button';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuizElect1PageRoutingModule,
    ComponentsModule,
    // ButtonModule,
  ],
  declarations: [QuizElect1Page],
})
export class QuizElect1PageModule {}
