import {Component} from '@angular/core';
import {ICollectionItem, CollectionService} from '../../services/collection.service';
import {CollectionItemComponent} from '../../components/collection-item/collection-item.component';
import {ActivatedRoute, Router} from '@angular/router';

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
  data: { name: string; img: string; url: string; } | null = null
  id: number = 0;
  collections: ICollectionItem[] = [];

  constructor(
    private readonly router: Router,
    private readonly collectionService: CollectionService,
    private route: ActivatedRoute
  ) {
    route.params.subscribe(value => {
      this.id = value['id']
    })
    this.data = collectionService.getCollection(this.id)
    collectionService.getCollectionsItems(this.id).subscribe(data => {
      this.collections = data
    })
  }

  back() {
    this.router.navigateByUrl('/collection')
  }
}
