import { Injectable } from '@angular/core';
import { Tenant } from 'src/app/services/firebase/model/tenant';
import { Page } from '../../model/page';
import { Observable } from 'rxjs';
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
export class TenantsService {
  constructor(private afs: Firestore) {}

  getAllTenants(): Observable<Tenant[]> {
    const tenantRef = collection(this.afs, 'tenants');
    return collectionData(tenantRef) as Observable<Tenant[]>;
  }
  getTenantPages(tenantId: string): Observable<Page[]> {
    const pagesRef = collection(this.afs, `tenants/${tenantId}/pages`);
    const publicPagesQuery = query(
      pagesRef,
      where('isPublic', '==', true),
      orderBy('order'),
    );
    return collectionData(publicPagesQuery, { idField: 'id' }) as Observable<
      Page[]
    >;
  }
}
