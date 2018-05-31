import { bindable } from 'aurelia-framework';
import './nav-bar.css';

export class NavBarCustomElement {
  @bindable router;

  open = false;

  toggleMenu(e) {
    this.open = !this.open;
  }
}
