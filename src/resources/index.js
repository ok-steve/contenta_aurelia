import { PLATFORM } from 'aurelia-pal';

export async function configure(config) {
  config.globalResources([
    PLATFORM.moduleName('./elements/app-image/app-image'),
    PLATFORM.moduleName('./elements/app-gallery/app-gallery'),
    PLATFORM.moduleName('./elements/app-section/app-section'),
    PLATFORM.moduleName('./elements/grid-item/grid-item'),
    PLATFORM.moduleName('./elements/grid-row/grid-row'),
    PLATFORM.moduleName('./elements/nav-bar/nav-bar'),
    PLATFORM.moduleName('./elements/recipe-card/recipe-card'),
    PLATFORM.moduleName('./elements/recipe-promoted/recipe-promoted')
  ]);
}
