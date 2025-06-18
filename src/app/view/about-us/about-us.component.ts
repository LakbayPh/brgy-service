import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
  standalone: true,
  imports: [CommonModule,IonicModule]
})
export class AboutUsComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
