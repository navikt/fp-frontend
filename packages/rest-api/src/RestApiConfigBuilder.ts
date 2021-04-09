import RequestAdditionalConfig from './RequestAdditionalConfigTsType';
import RequestConfig from './RequestConfig';
import RestKey from './RestKey';

/**
 * RestApiConfigBuilder
 *
 * Brukes for å sette opp server-endepunkter.
 */
class RestApiConfigBuilder {
  endpoints: RequestConfig[] = [];

  withGet(path: string, key: RestKey<any, any>, config?: RequestAdditionalConfig): this {
    this.endpoints.push(new RequestConfig(key.name, path, config).withGetMethod());
    return this;
  }

  withAsyncGet(path: string, key: RestKey<any, any>, config?: RequestAdditionalConfig): this {
    this.endpoints.push(new RequestConfig(key.name, path, config).withGetAsyncMethod());
    return this;
  }

  withPost(path: string, key: RestKey<any, any>, config?: RequestAdditionalConfig): this {
    this.endpoints.push(new RequestConfig(key.name, path, config).withPostMethod());
    return this;
  }

  withAsyncPost(path: string, key: RestKey<any, any>, config?: RequestAdditionalConfig): this {
    this.endpoints.push(new RequestConfig(key.name, path, config).withPostAsyncMethod());
    return this;
  }

  withPut(path: string, key: RestKey<any, any>, config?: RequestAdditionalConfig): this {
    this.endpoints.push(new RequestConfig(key.name, path, config).withPutMethod());
    return this;
  }

  withAsyncPut(path: string, key: RestKey<any, any>, config?: RequestAdditionalConfig): this {
    this.endpoints.push(new RequestConfig(key.name, path, config).withPutAsyncMethod());
    return this;
  }

  withRel(rel: string, key: RestKey<any, any>, config?: RequestAdditionalConfig): this {
    this.endpoints.push(new RequestConfig(key.name, undefined, config).withRel(rel));
    return this;
  }

  build(): RequestConfig[] {
    return this.endpoints;
  }
}

export default RestApiConfigBuilder;
