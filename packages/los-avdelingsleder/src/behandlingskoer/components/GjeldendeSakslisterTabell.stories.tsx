import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies

import RestApiMock from '@fpsak-frontend/utils-test/src/rest/RestApiMock';
import { alleKodeverk } from '@fpsak-frontend/storybook-utils';

import { RestApiGlobalStatePathsKeys, RestApiPathsKeys, requestApi } from '../../data/fplosRestApi';
import Saksliste from '../../typer/sakslisteAvdelingTsType';
import { GjeldendeSakslisterTabell } from './GjeldendeSakslisterTabell';

export default {
  title: 'avdelingsleder/behandlingskoer/GjeldendeSakslisterTabell',
  component: GjeldendeSakslisterTabell,
};

interface Props {
  saksliste: Saksliste[];
  nyeSakslister: Saksliste[];
  valgtSakslisteId?: number;
  oppgaverForAvdelingAntall?: number;
  hentAvdelingensSakslister: () => Saksliste[];
}

const Template: Story<Props> = ({
  saksliste,
  nyeSakslister,
  valgtSakslisteId,
  oppgaverForAvdelingAntall,
  hentAvdelingensSakslister,
}) => {
  const [sakslister, setSaksliste] = useState<Saksliste[]>(saksliste || []);

  const data = [
    { key: RestApiGlobalStatePathsKeys.KODEVERK.name, data: alleKodeverk },
    { key: RestApiPathsKeys.SLETT_SAKSLISTE.name, data: {} },
  ];

  return (
    <RestApiMock data={data} requestApi={requestApi}>
      <GjeldendeSakslisterTabell
        sakslister={sakslister}
        valgtAvdelingEnhet="1"
        setValgtSakslisteId={action('button-click')}
        lagNySaksliste={() => setSaksliste((oldState) => oldState.concat(nyeSakslister))}
        resetValgtSakslisteId={action('button-click')}
        hentAvdelingensSakslister={hentAvdelingensSakslister}
        valgtSakslisteId={valgtSakslisteId}
        oppgaverForAvdelingAntall={oppgaverForAvdelingAntall}
      />
    </RestApiMock>
  );
};

export const TabellNårDetIkkeFinnesBehandlingskøer = Template.bind({});
TabellNårDetIkkeFinnesBehandlingskøer.args = {
  nyeSakslister: [{
    sakslisteId: 1,
    navn: 'Ny liste',
    sistEndret: '2020-01-01',
    saksbehandlerIdenter: [],
    antallBehandlinger: 1,
  }],
  hentAvdelingensSakslister: action('button-click') as () => Saksliste[],
};

export const TabellNårDetFinnesEnBehandlingskø = Template.bind({});
TabellNårDetFinnesEnBehandlingskø.args = {
  saksliste: [{
    sakslisteId: 1,
    navn: 'Saksliste 1',
    sistEndret: '2020-01-01',
    saksbehandlerIdenter: ['R23233'],
    antallBehandlinger: 1,
  }],
  valgtSakslisteId: 1,
  nyeSakslister: [{
    sakslisteId: 2,
    navn: 'Ny liste',
    sistEndret: '2020-01-01',
    saksbehandlerIdenter: [],
    antallBehandlinger: 1,
  }],
  oppgaverForAvdelingAntall: 1,
  hentAvdelingensSakslister: action('button-click') as () => Saksliste[],
};
