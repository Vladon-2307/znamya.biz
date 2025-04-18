import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {CollectionService} from '../../services/collection.service';

@Component({
  selector: 'app-collection-list.page',
  imports: [
    RouterLink
  ],
  standalone: true,
  templateUrl: './collection-list.page.component.html',
  styleUrl: './collection-list.page.component.scss'
})
export class CollectionListPageComponent {

  data: { name: string; img: string; url: string; }[]

  constructor(private readonly collectionService: CollectionService ) {
      this.data = collectionService.getCollections()
  }
}
