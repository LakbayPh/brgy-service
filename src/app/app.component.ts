import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { TenantsService } from './services/firebase/firestore/tenants/tenants.service';
import { Page } from './services/firebase/model/page';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  pages: Page[] = [];

  constructor(private tenantsService: TenantsService) {
    const tenantId = 'tenant001'; // dynamically fetch from route if needed
    this.tenantsService.getTenantPages(tenantId).subscribe((pages) => {
      this.pages = pages;
      console.log('Pages:', this.pages);
    });
  }
}
