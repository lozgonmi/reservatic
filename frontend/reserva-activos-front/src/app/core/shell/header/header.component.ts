import { Component, OnInit } from '@angular/core';
import { faCoffee, faDog, faHome, faShippingFast } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {
  faHome = faHome;
  faShippingFast = faShippingFast;

  constructor() { }

  ngOnInit(): void {
  }

}
