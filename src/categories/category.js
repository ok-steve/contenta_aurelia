import { inject } from 'aurelia-framework';
import { UmamiService } from '../resources/services/umami-service';

@inject(UmamiService)
export class Category {
  constructor(service) {
    this.service = service;
  }

  async activate(params) {
    this.category = params.name;
    this.recipes = await this.service.findAllRecipesByCategoryName(params.name, 20);
  }
}
