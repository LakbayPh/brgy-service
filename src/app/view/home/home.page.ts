import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

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
import { NewsAndAnnouncementComponent } from '../news-and-announcement/news-and-announcement.component';
import { EventsCalendarComponent } from '../events-calendar/events-calendar.component';
import { FooterComponent } from '../footer/footer.component';
import { Feature } from 'src/app/services/firebase/model/feature';
import { FeatureService } from 'src/app/services/firebase/firestore/features.service';
import { CACHE_TENANT } from 'src/app/common/constants/feature-constants';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    AboutUsComponent,
    HeroComponent,
    NewsAndAnnouncementComponent,
    EventsCalendarComponent,
    FooterComponent,
    CommonModule,
  ],
})
export class HomePage implements OnInit {
  features: Feature[] = [];
  tenantId = 'tenant001';
  heroVariant: 'default' | 'minimal' | 'fancy' = 'minimal'; // <- Type must match!
  @ViewChild('aboutUsSection') aboutUsSection!: ElementRef;
  @ViewChild('newsSection') newsSection!: ElementRef;
  @ViewChild('eventsSection') eventsSection!: ElementRef;
  @ViewChild('heroSection') heroSection!: ElementRef;
  constructor(private router: Router, private featureService: FeatureService) {}

  scrollToSection(section: string) {
    let target: ElementRef | null = null;

    switch (section) {
      case 'home':
        target = this.heroSection;
        break;
      case 'ABOUT_US':
        target = this.aboutUsSection;
        break;
      case 'news_and_announcements':
        target = this.newsSection;
        break;
      case 'events_calendar':
        target = this.eventsSection;
        break;
      default:
        window.scrollTo({ top: 0, behavior: 'smooth' }); // scroll to top for home
        return;
    }

    if (target) {
      target.nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }

  ngOnInit() {
    localStorage.setItem(CACHE_TENANT, this.tenantId);
    this.featureService.getAllFeature().subscribe((features) => {
      console.log(features);
      this.features = features;
    });

    this.featureService.getFeature('ABOUT_US').subscribe((feature) => {
      console.log(feature);
    });
  }

  hasPage(id: string): boolean {
    return this.features.some((p) => p.id === id && p.enable == true);
  }
}
