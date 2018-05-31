import { inject } from 'aurelia-framework';
import { ApiClient } from './api-client';

@inject(ApiClient)
export class UmamiService {
  constructor(api) {
    this.api = api;
  }

  findOneRecipeByUuid(uuid) {
    const query = {
      include: 'image,category,image.thumbnail',
      filter: {
        isPublished: {
          path: 'isPublished',
          value: 1
        }
      }
    };

    return this.api.get('recipes', query, uuid);
  }

  findAllPromotedRecipes(limit = 4) {
    const query = {
      page: {
        limit
      },
      filter: {
        isPromoted: {
          path: 'isPromoted',
          value: 1
        },
        isPublished: {
          path: 'isPublished',
          value: 1
        }
      },
      include: 'image,image.thumbnail',
      fields: {
        recipes: 'title,difficulty,image',
        images: 'name,thumbnail',
        files: 'filename,url'
      },
      sort: '-created'
    };

    return this.api.get('recipes', query);
  }

  findAllRecipesCategories(limit = 20) {
    const query = {
      page: {
        limit
      }
    };

    return this.api.get('categories', query);
  }

  findAllLatestRecipes(limit = 4, offset = 0) {
    const query = {
      sort: '-created',
      page: {
        offset,
        limit
      },
      include: 'image,image.thumbnail',
      fields: {
        recipes: 'title,difficulty,image',
        images: 'name,thumbnail',
        files: 'filename,url'
      }
    };

    return this.api.get('recipes', query);
  }

  findHomePromotedArticlesAndRecipes(limit = 3) {
    const query = {
      page: {
        limit
      },
      filter: {
        isPromoted: {
          path: 'isPromoted',
          value: 1
        },
        isPublished: {
          path: 'isPublished',
          value: 1
        }
      },
      include: 'contentType,image,image.thumbnail',
      fields: {
        recipes: 'contentType,title,difficulty,image',
        images: 'name,thumbnail',
        files: 'filename,url',
        contentTypes: 'type'
      },
      sort: '-created'
    };

    return this.api.get('recipes', query);
  }

  findAllRecipesByCategoryName(categoryName, limit = 4, offset = 0) {
    const query = {
      sort: '-created',
      include: 'image,image.thumbnail',
      filter: {
        categoryName: {
          condition: {
            path: 'category.name',
            value: categoryName
          }
        }
      },
      fields: {
        recipes: 'title,difficulty,image',
        images: 'name,thumbnail',
        files: 'filename,url'
      },
      page: {
        offset,
        limit
      }
    };

    return this.api.get('recipes', query);
  }
}
