import { Component, OnInit,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class HeroComponent  implements OnInit {
@Input() variant: 'default' | 'minimal' | 'fancy' = 'minimal';
  constructor() { }

  ngOnInit() {}

}
