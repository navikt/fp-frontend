// eslint-disable-next-line no-shadow
enum ResponseCacheStatus {
  FETCHED = 'FETCHED',
  FETCHING = 'FETCHING',
}

class ResponseCache {
  cache: {[key: string]:{ status: ResponseCacheStatus, data: any }} = {};

  public addData = (endpointName: string, data: any) => {
    this.cache = {
      ...this.cache,
      [endpointName]: { status: ResponseCacheStatus.FETCHED, data },
    };
  }

  public setToFetching = (endpointName: string) => {
    this.cache = {
      ...this.cache,
      [endpointName]: { status: ResponseCacheStatus.FETCHING, data: undefined },
    };
  }

  public getData = (endpointName: string) => (this.cache[endpointName] ? this.cache[endpointName].data : undefined);

  public hasFetched = (endpointName: string) => this.cache[endpointName] && this.cache[endpointName].status === ResponseCacheStatus.FETCHED

  public isFetching = (endpointName: string) => this.cache[endpointName] && this.cache[endpointName].status === ResponseCacheStatus.FETCHING
}

export default ResponseCache;
