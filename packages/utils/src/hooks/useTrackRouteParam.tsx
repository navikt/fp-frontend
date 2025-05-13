import { useLocation, useParams } from 'react-router-dom';

import { parseQueryString } from '@navikt/ft-utils';
import type { Location } from 'history';

type ParamType = string | boolean | number;

type Config<T extends ParamType> = {
  paramName: string;
  parse?: (a: string | undefined) => T;
  isQueryParam?: boolean;
};

export const useTrackRouteParam = <T extends ParamType>(config: Config<T>): { location: Location; selected: T } => {
  const trackingConfig = {
    parse: (a: string | undefined) => a as T,
    isQueryParam: false,
    ...config,
  };

  const location = useLocation();
  const params = useParams();

  const newParams = trackingConfig.isQueryParam ? parseQueryString(location.search) : params;
  const paramFromUrl = trackingConfig.parse(newParams[trackingConfig.paramName]);

  return {
    location,
    selected: paramFromUrl,
  };
};
