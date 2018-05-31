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
  },
  {
    route: [
      'recipes'
    ],
    name: 'recipes',
    moduleId: PLATFORM.moduleName('./recipes/recipes'),
    nav: true,
    title: 'Recipes'
  },
  {
    route: [
      'recipes/:id'
    ],
    name: 'recipe',
    moduleId: PLATFORM.moduleName('./recipes/recipe')
  },
  {
    route: [
      'categories/:name'
    ],
    name: 'category',
    moduleId: PLATFORM.moduleName('./categories/category')
  },
  {
    route: [
      'latest'
    ],
    name: 'latest',
    moduleId: PLATFORM.moduleName('./latest/latest'),
    title: 'Latest Recipes'
  }
];
