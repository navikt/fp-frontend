import React from 'react';
import dayjs from 'dayjs';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { ISO_DATE_FORMAT } from '@navikt/ft-utils';
import { BehandlingType } from '@navikt/ft-kodeverk';

import { RestApiMock } from '@navikt/fp-utils-test';
import { getIntlDecorator, alleKodeverkLos } from '@navikt/fp-storybook-utils';

import OppgaverSomErApneEllerPaVentPanel from './OppgaverSomErApneEllerPaVentPanel';
import OppgaverSomErApneEllerPaVent from '../../../typer/oppgaverSomErApneEllerPaVentTsType';
import behandlingVenteStatus from '../../../kodeverk/behandlingVenteStatus';
import { RestApiGlobalStatePathsKeys, requestApi } from '../../../data/fplosRestApi';

import messages from '../../../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

export default {
  title: 'los/avdelingsleder/nokkeltall/OppgaverSomErApneEllerPaVentPanel',
  component: OppgaverSomErApneEllerPaVentPanel,
  decorators: [withIntl],
};

const Template: Story<{ oppgaverApneEllerPaVent: OppgaverSomErApneEllerPaVent[] }> = ({
  oppgaverApneEllerPaVent,
}) => {
  const data = [
    { key: RestApiGlobalStatePathsKeys.KODEVERK_LOS.name, data: alleKodeverkLos, global: true },
  ];

  return (
    <RestApiMock data={data} requestApi={requestApi}>
      <OppgaverSomErApneEllerPaVentPanel
        height={300}
        oppgaverApneEllerPaVent={oppgaverApneEllerPaVent}
        getValueFromLocalStorage={() => ''}
      />
    </RestApiMock>
  );
};

export const Default = Template.bind({});
Default.args = {
  oppgaverApneEllerPaVent: [{
    behandlingVenteStatus: behandlingVenteStatus.PA_VENT,
    behandlingType: BehandlingType.FORSTEGANGSSOKNAD,
    førsteUttakMåned: dayjs().startOf('month').format(ISO_DATE_FORMAT),
    antall: 2,
  }, {
    behandlingVenteStatus: behandlingVenteStatus.IKKE_PA_VENT,
    behandlingType: BehandlingType.FORSTEGANGSSOKNAD,
    førsteUttakMåned: dayjs().startOf('month').format(ISO_DATE_FORMAT),
    antall: 5,
  }, {
    behandlingVenteStatus: behandlingVenteStatus.IKKE_PA_VENT,
    behandlingType: BehandlingType.REVURDERING,
    førsteUttakMåned: dayjs().startOf('month').subtract(4, 'M').format(ISO_DATE_FORMAT),
    antall: 2,
  }, {
    behandlingVenteStatus: behandlingVenteStatus.IKKE_PA_VENT,
    behandlingType: BehandlingType.KLAGE,
    antall: 2,
  }, {
    behandlingVenteStatus: behandlingVenteStatus.PA_VENT,
    behandlingType: BehandlingType.KLAGE,
    antall: 6,
  }, {
    behandlingVenteStatus: behandlingVenteStatus.PA_VENT,
    behandlingType: BehandlingType.REVURDERING,
    førsteUttakMåned: dayjs().startOf('month').subtract(4, 'M').format(ISO_DATE_FORMAT),
    antall: 6,
  }, {
    behandlingVenteStatus: behandlingVenteStatus.PA_VENT,
    behandlingType: BehandlingType.DOKUMENTINNSYN,
    førsteUttakMåned: dayjs().startOf('month').subtract(10, 'M').format(ISO_DATE_FORMAT),
    antall: 3,
  }, {
    behandlingVenteStatus: behandlingVenteStatus.IKKE_PA_VENT,
    behandlingType: BehandlingType.DOKUMENTINNSYN,
    førsteUttakMåned: dayjs().startOf('month').subtract(10, 'M').format(ISO_DATE_FORMAT),
    antall: 5,
  }],
};
