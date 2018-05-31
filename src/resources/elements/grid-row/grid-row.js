import { bindable, inject } from 'aurelia-framework';
import './grid-row.css';

@inject(Element)
export class GridRowCustomElement {
  @bindable breakpoint = 'mobile';

  constructor(el) {
    this.el =  el;
  }

  bind() {
    this.el.classList.add(`is-${this.breakpoint}`);
  }
}
