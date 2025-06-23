import { Component,ElementRef, ViewChild,OnInit } from '@angular/core';
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
import {NewsAndAnnouncementComponent} from '../news-and-announcement/news-and-announcement.component'
import { EventsCalendarComponent } from '../events-calendar/events-calendar.component';
import { FooterComponent } from '../footer/footer.component';
import { TenantsService } from 'src/app/services/firebase/firestore/tenants/tenants.service';
import { Page } from 'src/app/services/firebase/model/page';

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
    FooterComponent,
    CommonModule
  ],
})
export class HomePage implements OnInit{
  pages: Page[] = [];
  tenantId = 'tenant001'
  heroVariant: 'default' | 'minimal' | 'fancy' = 'minimal'; // <- Type must match!
  @ViewChild('aboutUsSection') aboutUsSection!: ElementRef;
  @ViewChild('newsSection') newsSection!: ElementRef;
  @ViewChild('eventsSection') eventsSection!: ElementRef;
  @ViewChild('heroSection') heroSection!: ElementRef;
  constructor(private router: Router,private tenantService: TenantsService) {}
  

  scrollToSection(section: string) {
    let target: ElementRef | null = null;

    switch (section) {
      case 'home':
        target = this.heroSection;
        break;
      case 'about':
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
      target.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  goToTenant() {
    this.router.navigate(['/tenant']);
  }

   ngOnInit() {
    this.tenantService.getTenantPages(this.tenantId).subscribe((pages) => {
      console.log(pages);
      this.pages = pages;
    });
  }
  hasPage(slug: string): boolean {
  return this.pages.some(p => p.slug === slug);
  }
}
