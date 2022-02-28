import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ad-banner',
  templateUrl: './ad-banner.component.html',
  styleUrls: ['./ad-banner.component.css'],
  template:`
  <div class="ad-banner-example">
    <h3>Advertisements</h3>
    <ng-template ad-host></ng-template>
  </div>`
})
export class AdBannerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
