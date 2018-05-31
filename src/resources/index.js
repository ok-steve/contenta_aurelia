import { PLATFORM } from 'aurelia-pal';

export async function configure(config) {
  config.globalResources([
    PLATFORM.moduleName('./elements/app-section/app-section'),
    PLATFORM.moduleName('./elements/grid-item/grid-item'),
    PLATFORM.moduleName('./elements/grid-row/grid-row'),
    PLATFORM.moduleName('./elements/nav-bar/nav-bar')
  ]);
}
