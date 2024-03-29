import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.page.html',
  styleUrls: ['./estudiantes.page.scss'],
})
export class EstudiantesPage implements OnInit {
  constructor(public navCtrl: NavController, private platform: Platform) {}

  ngOnInit() {
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.navCtrl.navigateRoot('/home', {
        animated: true,
        animationDirection: 'back',
      });
    });
  }
  nextPage() {
    this.navCtrl.navigateRoot('/selection', {
      animated: true,
      animationDirection: 'forward',
    });
  }
}
