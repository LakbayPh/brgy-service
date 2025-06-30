import { Injectable } from '@angular/core';
import { Tenant } from 'src/app/services/firebase/model/tenant';
import { Observable } from 'rxjs';
import { TENANT_REF } from 'src/app/services/firebase/firebase-constants';
import {
  Firestore,
  collectionData,
  collection,
  query,
  where,
} from '@angular/fire/firestore';
import { orderBy } from 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class TenantService {
  constructor(private afs: Firestore) {}

  getAllTenants(): Observable<Tenant[]> {
    const tenantRef = collection(this.afs, TENANT_REF);
    return collectionData(tenantRef) as Observable<Tenant[]>;
  }
}
