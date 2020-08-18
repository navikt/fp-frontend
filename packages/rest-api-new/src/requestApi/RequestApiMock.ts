import RequestRunner from './RequestRunner';
import AbstractRequestApi from './AbstractRequestApi';

/**
 * RequestApi
 *
 * Denne klassen opprettes med en referanse til et HttpClientApi (for eksempel Axios), context-path og konfig for
 * de enkelte endepunktene. Det blir så satt opp RequestRunner's for endepunktene. Desse kan hentes via metoden @see getRequestRunner.
 */
class RequestApiMock extends AbstractRequestApi {
  mockdata: {[key: string]: RequestRunner} = {};

  execData: { endpointName: string; params: any }[] = [];

  missingPaths: string[] = [];

  public startRequest = (endpointName: string, params: any) => {
    const data = this.mockdata[endpointName];
    if (!data) {
      throw new Error(`Det er ikke satt opp mock-data for endepunkt ${endpointName}`);
    }
    this.execData.push({
      endpointName,
      params,
    });
    return data;
  }

  public cancelRequest = () => undefined;

  public hasPath = (endpointName: string) => !this.missingPaths.some((p) => p === endpointName);

  public injectPaths = () => {}

  public isMock = () => true;

  public mock = (endpointName: string, data?: any): void => {
    if (Object.keys(this.mockdata).includes(endpointName)) {
      throw new Error(`Det er satt opp mock-data for endepunkt ${endpointName} allerede`);
    }

    this.mockdata = {
      ...this.mockdata,
      [endpointName]: data || {},
    };
  };

  public getRequestMockData = (endpointName: string) => this.execData
    .filter((d) => d.endpointName === endpointName)
    .map((d) => ({
      params: d.params,
    }));

  public setMissingPath = (endpointName: string) => {
    this.missingPaths.push(endpointName);
  }

  public clearAllMockData = () => {
    this.mockdata = {};
    this.execData = [];
    this.missingPaths = [];
  };
}

export default RequestApiMock;
