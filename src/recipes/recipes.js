import { inject } from 'aurelia-framework';
import { UmamiService } from '../resources/services/umami-service';

@inject(UmamiService)
export class Recipes {
  constructor(service) {
    this.service = service;
  }

  async activate() {
    this.recipesLatest = await this.service.findAllLatestRecipes(4);

    this.recipesByCategories = await this.service.findAllRecipesCategories().then(categories => {
      return Promise.all(categories.map(category => {
        return this.service.findAllRecipesByCategoryName(category.name, 4);
      })).then(recipesByCategory => {
        return categories.map((category, i) => {
          category.recipes = recipesByCategory[i];
          return category;
        });
      });
    });

    this.recipePromoted = await this.service.findAllPromotedRecipes(1)
      .then(res => res[0]);
  }
}
