import React from 'react';
import { StoryFn } from '@storybook/react';

import { HistorikkinnslagV2 } from '@navikt/fp-types';
import { alleKodeverk, alleKodeverkTilbakekreving, withRouter } from '@navikt/fp-storybook-utils';
import HistorikkSakIndex from './HistorikkSakIndex';
import { historikkAktor as HistorikkAktor, navBrukerKjonn } from '@navikt/fp-kodeverk';
import { skjermlenkeCodes } from '@navikt/fp-konstanter';

const historikkInnslag: HistorikkinnslagV2[] = [
  {
    behandlingUuid: '999951',
    aktør: { type: HistorikkAktor.VEDTAKSLOSNINGEN, ident: 'Srvengangsstonad' },
    opprettetTidspunkt: '2019-09-19T12:16:14.499',
    title: 'Dette er en tittel',
    body: [],
    dokumenter: [{ dokumentId: '1', journalpostId: '2', tag: 'Vedlegg', url: 'www.test.no', utgått: false }],
  },
  {
    behandlingUuid: '999951',
    aktør: { type: HistorikkAktor.SAKSBEHANDLER, ident: 'Z991110' },
    opprettetTidspunkt: '2019-09-18T15:25:31.291',
    title: 'Dette er en tittel',
    body: [],
    skjermlenke: skjermlenkeCodes.FAKTA_OM_AKTIVITETSKRAV.kode,
  },
  {
    behandlingUuid: '999952',
    aktør: { type: HistorikkAktor.SOKER, ident: 'Srvengangsstonad' },
    opprettetTidspunkt: '2019-09-18T13:12:48.874',
    title: 'Dette er en tittel',
    body: [],
  },
  {
    behandlingUuid: '999952',
    aktør: { type: HistorikkAktor.ARBEIDSGIVER, ident: '' },
    opprettetTidspunkt: '2019-09-23T16:22:45.874',
    title: 'Dette er en inntektsmelding',
    body: [],
  },
  {
    behandlingUuid: '999952',
    aktør: { type: HistorikkAktor.BESLUTTER, ident: 'Z984523' },
    opprettetTidspunkt: '2019-09-20T14:11:45.874',
    title: 'Dette er en en besluttning',
    body: [
      '<b>Behandlende enhet</b> endret fra 4867 NAV Familie- og pensjonsytelser Foreldrepenger til <b>4806 NAV Familie- og pensjonsytelser Drammen</b>',
      'Dette er ein lang begrunnelsestekst',
      'Personopplysning',
    ],
  },
];

const locationMock = { key: 'test', pathname: 'test', search: 'test', state: {}, hash: 'test' };

export default {
  title: 'sak/sak-historikk',
  component: HistorikkSakIndex,
  decorators: [withRouter],
};

const Template: StoryFn<{
  valgtBehandlingUuid?: string;
  historikkFpSak?: HistorikkinnslagV2[];
  historikkFpTilbake?: HistorikkinnslagV2[];
  kjønn: 'K' | 'M';
}> = ({ valgtBehandlingUuid, historikkFpSak = [], historikkFpTilbake = [], kjønn = navBrukerKjonn.KVINNE }) => (
  <div
    style={{
      width: '600px',
      backgroundColor: 'white',
      padding: '30px',
    }}
  >
    <HistorikkSakIndex
      historikkFpSak={historikkFpSak}
      historikkFpTilbake={historikkFpTilbake}
      valgtBehandlingUuid={valgtBehandlingUuid}
      alleKodeverkFpSak={alleKodeverk as any}
      alleKodeverkFpTilbake={alleKodeverkTilbakekreving as any}
      saksnummer="2"
      getBehandlingLocation={() => locationMock}
      createLocationForSkjermlenke={() => locationMock}
      kjønn={kjønn}
    />
  </div>
);

export const BehandlingIkkeErValgt = Template.bind({});
BehandlingIkkeErValgt.args = { historikkFpSak: historikkInnslag };

export const BehandlingErValgt = Template.bind({});
BehandlingErValgt.args = { historikkFpSak: historikkInnslag, valgtBehandlingUuid: '999951' };
