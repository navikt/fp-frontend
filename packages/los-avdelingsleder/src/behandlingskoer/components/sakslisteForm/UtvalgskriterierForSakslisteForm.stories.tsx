import React from 'react';
import { action } from '@storybook/addon-actions';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { BehandlingType, FagsakYtelseType } from '@navikt/ft-kodeverk';

import { RestApiMock } from '@navikt/fp-utils-test';
import { getIntlDecorator, alleKodeverkLos } from '@navikt/fp-storybook-utils';

import UtvalgskriterierForSakslisteForm from './UtvalgskriterierForSakslisteForm';
import koSortering from '../../../kodeverk/KoSortering';
import andreKriterierType from '../../../kodeverk/andreKriterierType';

import { RestApiGlobalStatePathsKeys, RestApiPathsKeys, requestApi } from '../../../data/fplosRestApi';

import messages from '../../../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

export default {
  title: 'los/avdelingsleder/behandlingskoer/UtvalgskriterierForSakslisteForm',
  component: UtvalgskriterierForSakslisteForm,
  decorators: [withIntl],
};

const Template: Story<{ sakslisteNavn: string }> = ({
  sakslisteNavn,
}) => {
  const data = [
    { key: RestApiGlobalStatePathsKeys.KODEVERK_LOS.name, data: alleKodeverkLos, global: true },
    { key: RestApiPathsKeys.OPPGAVE_ANTALL.name, data: 1 },
    { key: RestApiPathsKeys.LAGRE_SAKSLISTE_NAVN.name, data: undefined },
    { key: RestApiPathsKeys.LAGRE_SAKSLISTE_SORTERING.name, data: undefined },
    { key: RestApiPathsKeys.LAGRE_SAKSLISTE_SORTERING_INTERVALL.name, data: undefined },
    { key: RestApiPathsKeys.LAGRE_SAKSLISTE_SORTERING_DYNAMISK_PERIDE.name, data: undefined },
    { key: RestApiPathsKeys.LAGRE_SAKSLISTE_SORTERING_TIDSINTERVALL_DATO.name, data: undefined },
    { key: RestApiPathsKeys.LAGRE_SAKSLISTE_FAGSAK_YTELSE_TYPE.name, data: undefined },
    { key: RestApiPathsKeys.LAGRE_SAKSLISTE_BEHANDLINGSTYPE.name, data: undefined },
    { key: RestApiPathsKeys.LAGRE_SAKSLISTE_ANDRE_KRITERIER.name, data: undefined },
  ];

  return (
    <RestApiMock data={data} requestApi={requestApi}>
      <UtvalgskriterierForSakslisteForm
        valgtSaksliste={{
          sakslisteId: 1,
          navn: sakslisteNavn,
          sistEndret: '2020-10-10',
          saksbehandlerIdenter: [],
          antallBehandlinger: 1,
          sortering: {
            sorteringType: koSortering.BEHANDLINGSFRIST,
            fra: 1,
            til: 4,
            erDynamiskPeriode: true,
          },
          behandlingTyper: [BehandlingType.FORSTEGANGSSOKNAD],
          fagsakYtelseTyper: [FagsakYtelseType.FORELDREPENGER],
          andreKriterier: [{
            andreKriterierType: andreKriterierType.TIL_BESLUTTER,
            inkluder: true,
          }, {
            andreKriterierType: andreKriterierType.REGISTRER_PAPIRSOKNAD,
            inkluder: false,
          }],
        }}
        valgtAvdelingEnhet=""
        hentAvdelingensSakslister={action('button-click')}
        hentOppgaverForAvdelingAntall={action('button-click')}
      />
    </RestApiMock>
  );
};

export const MedGittNavn = Template.bind({});
MedGittNavn.args = {
  sakslisteNavn: 'liste',
};

export const MedDefaultNavn = Template.bind({});
MedDefaultNavn.args = {
  sakslisteNavn: undefined,
};
