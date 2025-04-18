import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import Swiper from 'swiper';
import {BanersComponent} from '../../components/baners/baners.component';
import {CybersecurityComponent} from '../../components/cybersecurity/cybersecurity.component';

@Component({
  selector: 'app-h.page',
  standalone: true,
  imports: [
    BanersComponent,
    CybersecurityComponent
  ],
  templateUrl: './home.page.component.html',
  styleUrl: './home.page.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePageComponent {

  swiperConfig = {
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
      delay: 1000
    }
  }


  constructor() {
  }

}
