import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
} from '@ionic/angular/standalone';
import { calendarOutline, timeOutline } from 'ionicons/icons';

@Component({
  selector: 'app-events-calendar',
  templateUrl: './events-calendar.component.html',
  styleUrls: ['./events-calendar.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonGrid,
    IonRow,
    IonCol,
    IonIcon,
  ],
})
export class EventsCalendarComponent implements OnInit {
  calendarIcon = calendarOutline;
  timeIcon = timeOutline;

  events = [
    {
      title: 'Barangay Assembly Day',
      date: 'June 29, 2025',
      time: '9:00 AM - 12:00 NN',
      location: 'Barangay Hall',
    },
    {
      title: 'Tree Planting Activity',
      date: 'July 3, 2025',
      time: '7:00 AM - 11:00 AM',
      location: 'Eco Park',
    },
    {
      title: 'Youth Sports Clinic',
      date: 'July 10, 2025',
      time: '2:00 PM - 5:00 PM',
      location: 'Covered Court',
    },
  ];
  constructor() {}

  ngOnInit() {}
}
