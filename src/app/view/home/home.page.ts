import { Component,ElementRef, ViewChild } from '@angular/core';
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
import {NewsAndAnnouncementComponent} from '../news-and-announcement/news-and-announcement.component'
import { EventsCalendarComponent } from '../events-calendar/events-calendar.component';
import { FooterComponent } from '../footer/footer.component';
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
    HeroComponent,
    NewsAndAnnouncementComponent,
    EventsCalendarComponent,
    FooterComponent
  ],
})
export class HomePage {
  constructor(private router: Router) {}
  heroVariant: 'default' | 'minimal' | 'fancy' = 'default'; // <- Type must match!
  @ViewChild('aboutUsSection') aboutUsSection!: ElementRef;
  @ViewChild('newsSection') newsSection!: ElementRef;
  @ViewChild('eventsSection') eventsSection!: ElementRef;
  @ViewChild('heroSection') heroSection!: ElementRef;

  scrollToSection(section: string) {
    let target: ElementRef | null = null;

    switch (section) {
      case 'hero':
        target = this.heroSection;
        break;
      case 'about':
        target = this.aboutUsSection;
        break;
      case 'news':
        target = this.newsSection;
        break;
      case 'events':
        target = this.eventsSection;
        break;
      default:
        window.scrollTo({ top: 0, behavior: 'smooth' }); // scroll to top for home
        return;
    }

    if (target) {
      target.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  goToTenant() {
    this.router.navigate(['/tenant']);
  }
}
