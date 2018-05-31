import { inject } from 'aurelia-framework';
import { UmamiService } from '../resources/services/umami-service';

@inject(UmamiService)
export class Front {
  constructor(service) {
    this.service = service;
  }

  async activate() {
    this.latestRecipes = await this.service.findAllLatestRecipes(4);
    this.latestPromoted = await this.service.findHomePromotedArticlesAndRecipes(3);
    this.recipePromoted = await this.service.findAllPromotedRecipes(1).then(res => res[0]);
  }
}
