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

import { AboutUsComponent } from '../about-us/about-us.component';
import { HeroComponent } from '../hero/hero.component';

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
    AboutUsComponent,
    HeroComponent
  ],
})
export class HomePage {
  constructor(private router: Router) {}
  heroVariant: 'default' | 'minimal' | 'fancy' = 'default'; // <- Type must match!
  goToTenant() {
    this.router.navigate(['/tenant']);
  }
}
