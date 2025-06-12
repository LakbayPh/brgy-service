import { Injectable } from '@angular/core';
import { Tenant } from 'src/app/services/firebase/model/tenant';
import { map, Observable } from 'rxjs';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class TenantsService {
  constructor(private afs: Firestore) {}

  getAllTenants(): Observable<Tenant[]> {
    const tenantRef = collection(this.afs, 'tenants');
    return collectionData(tenantRef) as Observable<Tenant[]>;
  }
}
