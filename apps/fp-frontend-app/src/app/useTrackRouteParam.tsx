import { type Params, useLocation, useParams } from 'react-router-dom';

import { parseQueryString } from '@navikt/ft-utils';
import type { Location } from 'history';

const defaultConfig = {
  paramName: '',
  parse: (a: any) => a,
  isQueryParam: false,
};

interface Config {
  paramName?: string;
  parse?: (a: any) => any;
  isQueryParam?: boolean;
}

const mapMatchToParam = (params: Params, location: Location, trackingConfig: Config) => {
  const newParams = trackingConfig.isQueryParam ? parseQueryString(location.search) : params;
  return trackingConfig.paramName && trackingConfig.parse
    ? trackingConfig.parse(newParams[trackingConfig.paramName])
    : undefined;
};

export function useTrackRouteParam<T>(config: Config): { location: Location; selected: T } {
  const trackingConfig = { ...defaultConfig, ...config };

  const location = useLocation();
  const params = useParams();

  const paramFromUrl = mapMatchToParam(params, location, trackingConfig);
  return {
    location,
    selected: paramFromUrl,
  };
}
