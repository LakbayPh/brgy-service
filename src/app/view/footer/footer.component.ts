import { Component, OnInit } from '@angular/core';
import {
  IonFooter,
  IonToolbar,
  IonTitle,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
} from '@ionic/angular/standalone';
import {
  logoFacebook,
  logoTwitter,
  logoInstagram,
  homeOutline,
  informationCircleOutline,
  callOutline,
} from 'ionicons/icons';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: true,
  imports: [
    IonFooter,
    IonToolbar,
    IonTitle,
    IonGrid,
    IonRow,
    IonCol,
    IonIcon,
  ],
})
export class FooterComponent  implements OnInit {
// Icons
  facebook = logoFacebook;
  twitter = logoTwitter;
  instagram = logoInstagram;
  home = homeOutline;
  info = informationCircleOutline;
  call = callOutline;

  currentYear = new Date().getFullYear();
  constructor() { }

  ngOnInit() {}

}
