import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, tap} from 'rxjs';

export interface Shop {
  name: string;
  address: string;
  phone: string;
  hours: string;
}

export interface Magaziny {
  city: string;
  stores: Shop[]
}

@Injectable({
  providedIn: 'root'
})
export class MagazinyService {

  constructor(readonly http: HttpClient) { }

  getMagaziny(): Observable<Magaziny[]> {
    return this.http.get<Magaziny[]>('/data/nashi-magaziny.json')
  }
}
