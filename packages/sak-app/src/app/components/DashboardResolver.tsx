import React, { FunctionComponent, useState, useEffect } from 'react';
import axios from 'axios';

import { useRestApiErrorDispatcher } from '@fpsak-frontend/rest-api-hooks';
import { LoadingPanel } from '@fpsak-frontend/shared-components';

import { getPathToFplos } from '../paths';
import FagsakSearchIndex from '../../fagsakSearch/FagsakSearchIndex';

const isDevelopment = () => process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test';

/**
 * DashboardResolver
 *
 * Komponent som redirecter til Fplos eller går til fremsiden til Fpsak. Går alltid til Fpsak på utviklingsmiljø eller når Fplos ikke kan nåes
 */
export const DashboardResolver: FunctionComponent = () => {
  const [isLoading, setLoading] = useState(true);

  const { addErrorMessage } = useRestApiErrorDispatcher();

  useEffect(() => {
    if (isDevelopment()) {
      return;
    }

    const gotoLosOrSetErrorMsg = async () => {
      try {
        const url = getPathToFplos(window.location.href);
        await axios.get(url); // Sjekk om LOS er oppe
        window.location.assign(url);
      } catch (e) {
        setLoading(false);
        addErrorMessage('Forsiden har nedetid');
      }
    };
    gotoLosOrSetErrorMsg();
  }, []);

  return !isDevelopment() && isLoading ? <LoadingPanel /> : <FagsakSearchIndex />;
};

export default DashboardResolver;
