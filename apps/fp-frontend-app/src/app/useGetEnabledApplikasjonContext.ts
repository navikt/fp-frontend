import { useQuery } from '@tanstack/react-query';

import { initFetchFpTilbakeOptions } from '../data/fagsakApi';
import { ApplicationContextPath } from './ApplicationContextPath';

export const useGetEnabledApplikasjonContext = (): ApplicationContextPath[] => {
  const enabledApplicationContexts = [ApplicationContextPath.FPSAK];

  const { status } = useQuery(initFetchFpTilbakeOptions());

  if (status !== 'error') {
    enabledApplicationContexts.push(ApplicationContextPath.FPTILBAKE);
  }

  return enabledApplicationContexts;
};
