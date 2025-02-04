import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Magaziny} from './magaziny.service';

export interface CollectionItem {
  name: string;
  preview: string;
  view: string[];
}

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  constructor(readonly http: HttpClient) { }

  getCollections(): Observable<CollectionItem[]> {
    return this.http.get<CollectionItem[]>('/data/collections.json')
  }
}
