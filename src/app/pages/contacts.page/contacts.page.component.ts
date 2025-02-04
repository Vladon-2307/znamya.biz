import { Component } from '@angular/core';
import {Magaziny, MagazinyService} from '../../services/magaziny.service';
import {Observable, Subscription} from 'rxjs';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-contacts.page',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  templateUrl: './contacts.page.component.html',
  styleUrl: './contacts.page.component.scss'
})
export class ContactsPageComponent {

  data: Observable<Magaziny[]>

  constructor(private readonly magazinyService: MagazinyService) {
    this.data = this.magazinyService.getMagaziny()
  }

  protected readonly console = console;
}
