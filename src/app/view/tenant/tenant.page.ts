import { Component } from '@angular/core';
import { Injector } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
} from '@ionic/angular/standalone';
import { Tenant } from 'src/app/services/firebase/model/tenant';
import { CommonModule } from '@angular/common';
import { TenantsService } from 'src/app/services/firebase/firestore/tenants/tenants.service';

@Component({
  selector: 'app-tenant',
  templateUrl: 'tenant.page.html',
  styleUrls: ['tenant.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    CommonModule,
  ],
})
export class TenantPage {
  tenants: Tenant[] = [];
  constructor(private injector: Injector) {}

  ngOnInit() {
    const tenantService = this.injector.get(TenantsService);
    tenantService.getAllTenants().subscribe((data) => {
      console.log(data);
      this.tenants = data;
    });
  }
}
