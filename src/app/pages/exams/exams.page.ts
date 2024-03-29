import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';

import {
  AlertController,
  LoadingController,
  NavController,
  Platform,
} from '@ionic/angular';
import { ApiService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-exams',
  templateUrl: './exams.page.html',
  styleUrls: ['./exams.page.scss'],
})
export class ExamsPage implements OnInit {
  options: any[] = [];
  loading: HTMLIonLoadingElement = null; ///API

  constructor(
    public navCtrl: NavController,
    private platform: Platform,
    public alertController: AlertController, ///API
    public loadingController: LoadingController, ///API
    private _apiService: ApiService,
    private _serv: QuizService
  ) {}

  ngOnInit() {
    this.getResult();

    this.platform.backButton.subscribeWithPriority(10, () => {
      this.navCtrl.navigateRoot('/seleccione', {
        animated: true,
        animationDirection: 'back',
      });
    });
  }

  async showLoading(message: string) {
    this.loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: message,
    });

    return this.loading.present();
  }

  async getResult() {
    this.showLoading('Cargando resultados');

    try {
      let temp = await this._apiService.getExams();
      for (let element of temp) {
        this.options.push({
          name: element.name,
          id: element.id,
          intents: element.intents_number,
        });
      }

      console.log(temp, 'info');
    } catch (err) {
      this.showAlert();
      console.log('============= err =============');
      console.log(err);
    }
    this.loading.dismiss();
  }

  async showAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Error conectividad',
      message: 'Si el problema persiste contactar con la administración',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          //handler: () => {},
        },
        {
          text: 'Continuar',
          handler: () => {
            this.navCtrl.navigateRoot('/simulaciones/0', {
              animated: true,
              animationDirection: 'forward',
            });
          },
        },
      ],
    });

    await alert.present();
  }

  nextPage(index: number) {
    this._serv.setExam(this.options[index]);
    if (this.options[index].name === 'ELECTROSTATICA') {
      this.navCtrl.navigateRoot(`/exam-elect`, {
        animated: true,
        animationDirection: 'forward',
      });
    } else if (this.options[index].name === 'CIRCUITO') {
      this.navCtrl.navigateRoot(`/exam-circu`, {
        animated: true,
        animationDirection: 'forward',
      });
    } else if (this.options[index].name === 'MAGNETISMO') {
      this.navCtrl.navigateRoot(`/exam-magne`, {
        animated: true,
        animationDirection: 'forward',
      });
    }
  }
}
