import Waterwheel from 'waterwheel';
import { parse } from 'jsonapi-parse';
import { env } from './env';

const config = {
  base: env.base,
  timeout: 3000,
  accessCheck: false,
  jsonapiPrefix: env.jsonapiPrefix
};

const waterwheel = new Waterwheel(config);

export class ApiClient {
  request(method, ...args) {
    return waterwheel.jsonapi[method](...args)
      .then(response => parse(response).data);
  }

  get(resource, params = {}, id) {
    return this.request('get', resource, params, id);
  }

  post(resource, body) {
    return this.request('post', resource, body);
  }

  delete(resource, id) {
    return this.request('delete', resource, id);
  }
}
