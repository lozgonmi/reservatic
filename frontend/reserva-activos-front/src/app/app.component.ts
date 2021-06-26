import { Component } from '@angular/core';
import { faCoffee, faDog, faHome, faShippingFast } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  title = 'lozano';
  faCoffee = faCoffee;
  faDog = faDog;
  faShippingFast = faShippingFast;
  faHome = faHome;
}
