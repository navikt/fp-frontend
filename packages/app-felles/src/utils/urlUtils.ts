import type { Location, Search } from 'history';

type QueryParams = Record<string, string | boolean | undefined>;

export const parseQueryString = (queryString = ''): { [paramName: string]: string } =>
  Object.fromEntries(new URLSearchParams(queryString));

export const formatQueryString = (queryParams: QueryParams = {}): string => {
  const params = new URLSearchParams();
  for (const [key, value] of Object.entries(queryParams)) {
    if (value !== undefined && value !== '') {
      params.set(key, String(value));
    }
  }
  const query = params.toString();
  return query ? `?${query}` : '';
};

export const updateQueryParams = (queryString: string, nextParams: QueryParams): Search => {
  const prevParams = parseQueryString(queryString);
  return formatQueryString({
    ...prevParams,
    ...nextParams,
  });
};

export const getLocationWithQueryParams = (location: Location, queryParams: QueryParams): Location => ({
  ...location,
  search: updateQueryParams(location.search, queryParams),
});
