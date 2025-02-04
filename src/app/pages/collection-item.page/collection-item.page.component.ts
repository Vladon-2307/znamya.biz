import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CollectionItem} from '../../services/collection.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-collection-item.page',
  imports: [],
  standalone: true,
  templateUrl: './collection-item.page.component.html',
  styleUrl: './collection-item.page.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CollectionItemPageComponent {
  item: CollectionItem

  constructor(private readonly router: Router) {
      // @ts-ignore
    this.item = JSON.parse(localStorage.getItem('item'))
  }

  back(){
    this.router.navigateByUrl('/collection')
  }
}
