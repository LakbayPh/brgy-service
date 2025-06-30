import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FEATURE_REF } from 'src/app/services/firebase/firebase-constants';
import {
  Firestore,
  collectionData,
  collection,
  query,
  where,
  docData,
  DocumentReference,
} from '@angular/fire/firestore';
import { Feature } from '../model/feature';
import { CACHE_TENANT } from 'src/app/common/constants/feature-constants';
import { CommonUtils } from 'src/app/common/utils/common-utils';
import { doc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class FeatureService {
  private readonly path;
  constructor(private afs: Firestore) {
    const tenantdId = localStorage.getItem(CACHE_TENANT) ?? '';
    this.path = CommonUtils.formatConstant(FEATURE_REF, tenantdId);
  }

  getAllFeature(): Observable<Feature[]> {
    const featureCollection = collection(this.afs, this.path);
    return collectionData(featureCollection) as Observable<Feature[]>;
  }

  getFeature(id: string): Observable<Feature | undefined> {
    console.log(`path: ${this.path}/${id}`);
    const featureDoc = doc(
      this.afs,
      `${this.path}/${id}`
    ) as DocumentReference<Feature>;
    return docData(featureDoc, { idField: 'id' });
  }
}
