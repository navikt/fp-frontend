import RequestAdditionalConfig from './RequestAdditionalConfigTsType';
import RequestConfig from './RequestConfig';

/**
 * RestApiConfigBuilder
 *
 * Brukes for å sette opp server-endepunkter.
 */
class RestApiConfigBuilder {
  endpoints: RequestConfig[] = [];

  withGet(path: string, key: string, config?: RequestAdditionalConfig): this {
    this.endpoints.push(new RequestConfig(key, path, config).withGetMethod());
    return this;
  }

  withAsyncGet(path: string, key: string, config?: RequestAdditionalConfig): this {
    this.endpoints.push(new RequestConfig(key, path, config).withGetAsyncMethod());
    return this;
  }

  withPost(path: string, key: string, config?: RequestAdditionalConfig): this {
    this.endpoints.push(new RequestConfig(key, path, config).withPostMethod());
    return this;
  }

  withAsyncPost(path: string, key: string, config?: RequestAdditionalConfig): this {
    this.endpoints.push(new RequestConfig(key, path, config).withPostAsyncMethod());
    return this;
  }

  withPut(path: string, key: string, config?: RequestAdditionalConfig): this {
    this.endpoints.push(new RequestConfig(key, path, config).withPutMethod());
    return this;
  }

  withAsyncPut(path: string, key: string, config?: RequestAdditionalConfig): this {
    this.endpoints.push(new RequestConfig(key, path, config).withPutAsyncMethod());
    return this;
  }

  withRel(rel: string, key: string, config?: RequestAdditionalConfig): this {
    this.endpoints.push(new RequestConfig(key, undefined, config).withRel(rel));
    return this;
  }

  build(): RequestConfig[] {
    return this.endpoints;
  }
}

export default RestApiConfigBuilder;
