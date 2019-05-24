import { HttpClient } from 'aurelia-fetch-client';
import { parse } from 'jsonapi-parse';
import qs from 'qs';

const httpClient = new HttpClient();

httpClient.configure(config => {
  config
    .useStandardConfiguration()
    .withBaseUrl('https://live-contentacms.pantheonsite.io/api');
});

export class ApiClient {
  request(method, url) {
    return httpClient
      .fetch(url, {
        method
      })
      .then(res => res.json())
      .then(res => parse(res).data);
  }

  get(resource, params = {}, id = false) {
    const format = 'api_json';
    const url = `/${resource}${id ? `/${id}` : ''}?_format=${format}${Object.keys(params).length ? `&${qs.stringify(params, {indices: false})}` : ''}`;
    return this.request('get', url, params);
  }
}
