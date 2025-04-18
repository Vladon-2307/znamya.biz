import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Magaziny} from './magaziny.service';

export interface IInfo {
  model: string,
  type: string,
  size: string,
  height: string
}

export interface ICollectionItem {
  preview: string,
  info: IInfo[]
}

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  data = [
    {
      name: "Коллекция \"Прекрасные формы\"",
      img: "/img/2.png",
      url: "/collection/2"
    },
    {
      name: "Коллекция \"Весна-лето 2025\"",
      img: "/img/1.jpg",
      url: "/collection/1"
    },
  ]

  constructor(readonly http: HttpClient) { }

  getCollectionsItems(id: number): Observable<ICollectionItem[]> {
    return this.http.get<ICollectionItem[]>(`/data/collect${id.toString()}.json`)
  }

  getCollections(): { name: string; img: string; url: string; }[] {
    return this.data
  }

  getCollection(id: number): { name: string; img: string; url: string; } {
    return this.data[id - 1];
  }
}
