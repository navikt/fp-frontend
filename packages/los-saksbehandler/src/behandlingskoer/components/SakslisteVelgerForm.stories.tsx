import React from 'react';
import { action } from '@storybook/addon-actions';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { BehandlingType, FagsakYtelseType } from '@navikt/ft-kodeverk';

import RestApiMock from '@fpsak-frontend/utils-test/src/rest/RestApiMock';
import getIntlDecorator from '@fpsak-frontend/storybook-utils/decorators/withIntl';
import { alleKodeverkLos } from '@fpsak-frontend/storybook-utils';

import koSortering from '../../kodeverk/KoSortering';
import andreKriterierType from '../../kodeverk/andreKriterierType';
import Saksliste from '../../typer/sakslisteTsType';
import Saksbehandler from '../../typer/saksbehandlerTsType';
import { RestApiPathsKeys, RestApiGlobalStatePathsKeys, requestApi } from '../../data/fplosSaksbehandlerRestApi';
import SakslisteVelgerForm from './SakslisteVelgerForm';

import messages from '../../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

export default {
  title: 'los/saksbehandler/behandlingskoer/SakslisteVelgerForm',
  component: SakslisteVelgerForm,
  decorators: [withIntl],
};

const Template: Story<{ saksbehandlere: Saksbehandler[], sakslister: Saksliste[] }> = ({
  saksbehandlere,
  sakslister,
}) => {
  const data = [
    { key: RestApiPathsKeys.SAKSLISTE_SAKSBEHANDLERE.name, data: saksbehandlere },
    { key: RestApiGlobalStatePathsKeys.KODEVERK_LOS.name, data: alleKodeverkLos, global: true },
  ];

  return (
    <RestApiMock data={data} requestApi={requestApi}>
      <SakslisteVelgerForm
        sakslister={sakslister}
        setValgtSakslisteId={action('button-click')}
        fetchAntallOppgaver={action('button-click')}
        getValueFromLocalStorage={() => ''}
        setValueInLocalStorage={action('button-click')}
        removeValueFromLocalStorage={action('button-click')}
      />
    </RestApiMock>
  );
};

export const Default = Template.bind({});
Default.args = {
  saksbehandlere: [{
    brukerIdent: {
      brukerIdent: '32434',
      verdi: '32434',
    },
    navn: 'Espen Utvikler',
    avdelingsnavn: [],
  }, {
    brukerIdent: {
      brukerIdent: '31111',
      verdi: '32111',
    },
    navn: 'Auto Joakim',
    avdelingsnavn: [],
  }],
  sakslister: [{
    sakslisteId: 1,
    navn: 'Saksliste 1',
    behandlingTyper: [BehandlingType.FORSTEGANGSSOKNAD, BehandlingType.REVURDERING],
    fagsakYtelseTyper: [FagsakYtelseType.FORELDREPENGER],
    andreKriterier: [{
      andreKriterierType: andreKriterierType.TIL_BESLUTTER,
      inkluder: true,
    }],
    sortering: {
      sorteringType: koSortering.BEHANDLINGSFRIST,
      fra: 2,
      til: 4,
      erDynamiskPeriode: true,
    },
  }],
};

export const MedToSakslister = Template.bind({});
MedToSakslister.args = {
  saksbehandlere: [{
    brukerIdent: {
      brukerIdent: '32434',
      verdi: '32434',
    },
    navn: 'Espen Utvikler',
    avdelingsnavn: [],
  }, {
    brukerIdent: {
      brukerIdent: '31111',
      verdi: '32111',
    },
    navn: 'Auto Joakim',
    avdelingsnavn: [],
  }],
  sakslister: [{
    sakslisteId: 1,
    navn: 'Saksliste 1',
    behandlingTyper: [BehandlingType.FORSTEGANGSSOKNAD, BehandlingType.REVURDERING],
    fagsakYtelseTyper: [FagsakYtelseType.FORELDREPENGER],
    andreKriterier: [{
      andreKriterierType: andreKriterierType.TIL_BESLUTTER,
      inkluder: true,
    }],
    sortering: {
      sorteringType: koSortering.BEHANDLINGSFRIST,
      fra: 2,
      til: 4,
      erDynamiskPeriode: true,
    },
  }, {
    sakslisteId: 2,
    navn: 'Saksliste 2',
    behandlingTyper: [BehandlingType.FORSTEGANGSSOKNAD, BehandlingType.KLAGE],
    fagsakYtelseTyper: [FagsakYtelseType.SVANGERSKAPSPENGER],
    andreKriterier: [{
      andreKriterierType: andreKriterierType.UTBETALING_TIL_BRUKER,
      inkluder: true,
    }],
    sortering: {
      sorteringType: koSortering.BEHANDLINGSFRIST,
      fra: 2,
      til: 4,
      erDynamiskPeriode: true,
    },
  }],
};
