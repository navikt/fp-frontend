import axios, { AxiosResponse } from 'axios';

import initRestMethods from './initRestMethods';
import HttpClientApi from '../HttpClientApiTsType';

const konverterKodeverkTilKode = (data: any, erTilbakekreving: boolean) => {
  if (data === undefined || data === null) {
    return;
  }
  const lengdeKodeverkObjekt = erTilbakekreving ? 3 : 2;
  Object.keys(data).forEach((key) => {
    if (data[key]?.kode) {
      const antallAttr = Object.keys(data[key]).length;
      if ((data[key]?.kodeverk && antallAttr === lengdeKodeverkObjekt) || antallAttr === 1) {
        // eslint-disable-next-line no-param-reassign
        data[key] = data[key].kode;
      }
    }
    if (typeof data[key] === 'object' && data[key] !== null) {
      konverterKodeverkTilKode(data[key], erTilbakekreving);
    }
  });
};

/**
 * getAxiosHttpClientApi
 * Oppretter nytt http-klient api basert på Axios.
 */
const getAxiosHttpClientApi = (): HttpClientApi => {
  const axiosInstance = axios.create();

  axiosInstance.interceptors.request.use((c): any => {
    const navCallId = `CallId_${(new Date()).getTime()}_${Math.floor(Math.random() * 1000000000)}`;
    const config = { ...c };
    config.headers['Nav-Callid'] = navCallId;
    return config;
  });

  // TODO Temp kode til backend returnerer string i staden for Kodeverk
  axiosInstance.interceptors.response.use((response: AxiosResponse): any => {
    if (response.status === 200
      && response.config.url.includes('/api/')
      && !response.config.url.includes('/api/kodeverk')
      && !response.config.url.includes('/api/behandling/uttak/resultat-perioder')) {
      const erTilbakekreving = response.config.url.includes('/fptilbake/api/');
      konverterKodeverkTilKode(response.data, erTilbakekreving);
    }
    return response;
  });

  const restMethods = initRestMethods(axiosInstance);
  return {
    get: restMethods.get,
    post: restMethods.post,
    put: restMethods.put,
    getBlob: restMethods.getBlob,
    postBlob: restMethods.postBlob,
    getAsync: restMethods.getAsync,
    postAsync: restMethods.postAsync,
    putAsync: restMethods.putAsync,
    axiosInstance,
  };
};

export default getAxiosHttpClientApi;
