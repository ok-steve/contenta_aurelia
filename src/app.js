import { routes } from './routes';

export class App {
  configureRouter(config, router) {
    config.title = 'Umami';
    config.map(routes);
    config.options.pushState = true;

    this.router = router;
  }
}
