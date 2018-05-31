import { inject } from 'aurelia-framework';
import { UmamiService } from '../resources/services/umami-service';

@inject(UmamiService)
export class Recipe {
  constructor(service) {
    this.service = service;
  }

  async activate(params) {
    this.recipe = await this.service.findOneRecipeByUuid(params.id);
    this.recipesByCategory = await this.service.findAllRecipesByCategoryName(this.recipe.category.name, 4);
  }
}
