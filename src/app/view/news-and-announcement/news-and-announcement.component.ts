import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonGrid, IonRow, IonCol, IonImg } from '@ionic/angular/standalone';

@Component({
  selector: 'app-news-and-announcement',
  templateUrl: './news-and-announcement.component.html',
  styleUrls: ['./news-and-announcement.component.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonGrid,
    IonRow,
    IonCol,
    IonImg
  ]
})
export class NewsAndAnnouncementComponent  implements OnInit {

   announcements = [
    {
      title: 'Community Cleanup Drive',
      date: 'June 20, 2025',
      image: 'https://plus.unsplash.com/premium_photo-1681152790480-07392bfe9b62?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Join us in making our neighborhood cleaner and greener. Volunteers are welcome!'
    },
    {
      title: 'New Park Opening',
      date: 'June 25, 2025',
      image: 'https://images.unsplash.com/photo-1519331379826-f10be5486c6f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'The new Riverside Park will be open to the public this weekend. Fun activities await!'
    },
    {
      title: 'Free Health Check-up',
      date: 'July 1, 2025',
      image: 'https://plus.unsplash.com/premium_photo-1729286323522-554fcade86b4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Get your free health check-up at the community center. Doctors and nurses on site.'
    }
  ];
  constructor() { }

  ngOnInit() {}

}
