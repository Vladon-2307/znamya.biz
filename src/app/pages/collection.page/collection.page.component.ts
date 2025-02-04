import { Component } from '@angular/core';
import {CollectionItem, CollectionService} from '../../services/collection.service';
import {CollectionItemComponent} from '../../components/collection-item/collection-item.component';

@Component({
  selector: 'app-collection.page',
  standalone: true,
  imports: [
    CollectionItemComponent
  ],
  templateUrl: './collection.page.component.html',
  styleUrl: './collection.page.component.scss'
})
export class CollectionPageComponent {
  data: CollectionItem[] = []

  constructor(private readonly collectionService: CollectionService) {
    this.collectionService.getCollections().subscribe(res => this.data = res);
  }
}
