import {Component, Input} from '@angular/core';
import {ICollectionItem} from '../../services/collection.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-collection-item',
  imports: [],
  standalone: true,
  templateUrl: './collection-item.component.html',
  styleUrl: './collection-item.component.scss'
})
export class CollectionItemComponent {
  @Input() item: ICollectionItem | null = null;

  constructor(private readonly router: Router) {}
}
