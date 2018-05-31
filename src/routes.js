import { PLATFORM } from 'aurelia-pal';

export const routes = [
  {
    route: [
      '',
      'node'
    ],
    name: 'front',
    moduleId: PLATFORM.moduleName('./front/front'),
    nav: true,
    title: 'Home'
  }
];
