import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardTitle,
  IonCardHeader,
  IonCardSubtitle,
  IonCardContent,
  IonGrid,
  IonCol,
  IonRow,
  IonButton,
  IonButtons,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardTitle,
    IonCardHeader,
    IonCardSubtitle,
    IonCardContent,
    IonGrid,
    IonCol,
    IonRow,
    IonButton,
    IonButtons,
  ],
})
export class HomePage {
  constructor(private router: Router) {}

  goToTenant() {
    this.router.navigate(['/tenant']);
  }
}
