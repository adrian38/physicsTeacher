import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.page.html',
  styleUrls: ['./selection.page.scss'],
})
export class SelectionPage implements OnInit {
  options: string[] = ['Evaluación', 'Progreso'];

  constructor(public navCtrl: NavController, private platform: Platform) {}

  ngOnInit() {
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.navCtrl.navigateRoot('/estudiantes', {
        animated: true,
        animationDirection: 'back',
      });
    });
  }

  routeTopage(element: number) {
    if (element === 0) {
      this.navCtrl.navigateRoot(`/exams`, {
        animated: true,
        animationDirection: 'forward',
      });
    } else {
      this.navCtrl.navigateRoot(
        `/${this.options[element].toLocaleLowerCase()}`,
        {
          animated: true,
          animationDirection: 'forward',
        }
      );
    }
  }
}
