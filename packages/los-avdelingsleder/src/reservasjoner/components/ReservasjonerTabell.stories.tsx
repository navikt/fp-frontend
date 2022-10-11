import React, { useState, useCallback } from 'react';
import { action } from '@storybook/addon-actions';
import { BehandlingType } from '@navikt/ft-kodeverk';

import { alleKodeverkLos } from '@fpsak-frontend/storybook-utils';
import getIntlDecorator from '@fpsak-frontend/storybook-utils/decorators/withIntl';

import ReservasjonerTabell from './ReservasjonerTabell';

import messages from '../../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

export default {
  title: 'los/avdelingsleder/reservasjoner/ReservasjonerTabell',
  component: ReservasjonerTabell,
  decorators: [withIntl],
};

export const ViseAtIngenReservasjonerBleFunnet = () => (
  <ReservasjonerTabell
    reservasjoner={[]}
    opphevReservasjon={action('button-click') as () => Promise<string>}
    hentAvdelingensReservasjoner={action('button-click')}
    alleKodeverk={alleKodeverkLos as any}
  />
);

export const VisTabellMedReservasjoner = () => {
  const [reservasjoner, fjernReservasjon] = useState([{
    reservertAvUid: 'wsfwer-sdsfd',
    reservertAvNavn: 'Espen Utvikler',
    reservertTilTidspunkt: '2020-01-10',
    oppgaveId: 1,
    oppgaveSaksNr: 122234,
    behandlingType: BehandlingType.FORSTEGANGSSOKNAD,
  }, {
    reservertAvUid: 'gtfbrt-tbrtb',
    reservertAvNavn: 'Eirik Utvikler',
    reservertTilTidspunkt: '2020-01-01',
    oppgaveId: 2,
    oppgaveSaksNr: 23454,
    behandlingType: BehandlingType.KLAGE,
  }]);

  const opphevReservasjon = useCallback((oppgaveId: number) => {
    fjernReservasjon((oldState) => oldState.filter((s) => s.oppgaveId !== oppgaveId));
  }, []);

  return (
    <ReservasjonerTabell
      reservasjoner={reservasjoner}
      opphevReservasjon={opphevReservasjon as () => Promise<string>}
      hentAvdelingensReservasjoner={action('button-click')}
      alleKodeverk={alleKodeverkLos as any}
    />
  );
};
