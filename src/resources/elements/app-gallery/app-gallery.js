import { bindable } from 'aurelia-framework';
import './app-gallery.css';

export class AppGalleryCustomElement {
  @bindable columns = 4;
  @bindable items;

  get itemClass() {
    return `is-1of${this.columns}`;
  }
}
