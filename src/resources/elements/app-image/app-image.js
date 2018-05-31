import { bindable } from 'aurelia-framework';
import './app-image.css';

export class AppImageCustomElement {
  @bindable alt;
  @bindable src;
}
