import NotificationMapper from './NotificationMapper';
import Link from './LinkTsType';

/**
 * AbstractRequestApi
 *
 * Denne klassen opprettes med en referanse til et HttpClientApi (for eksempel Axios), context-path og konfig for
 * de enkelte endepunktene. Det blir så satt opp RequestRunner's for endepunktene. Desse kan hentes via metoden @see getRequestRunner.
 */
abstract class AbstractRequestApi {
  public abstract startRequest(endpointName: string, params?: any, notificationMapper?: NotificationMapper);

  public abstract hasPath(endpointName: string);

  public abstract setLinks(links: Link[]);

  public abstract setRequestPendingHandler(requestPendingHandler): void;

  public abstract setAddErrorMessageHandler(addErrorMessage): void;

  public abstract resetCache(): void;

  public abstract isMock(): boolean;

  public abstract mock(endpointName: string, data?: any): void;

  public abstract getRequestMockData(endpointName: string): { params: any }[];

  public abstract setMissingPath(endpointName: string): void;

  public abstract clearAllMockData(): void;
}

export default AbstractRequestApi;
