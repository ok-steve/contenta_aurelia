import { inject } from 'aurelia-framework';
import { UmamiService } from '../resources/services/umami-service';

@inject(UmamiService)
export class Latest {
  constructor(service) {
    this.service = service;
  }

  async activate() {
    this.recipes = await this.service.findAllLatestRecipes(20);
  }
}
