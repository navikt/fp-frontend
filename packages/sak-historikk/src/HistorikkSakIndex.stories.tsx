import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { HistorikkAktor, NavBrukerKjonn } from '@navikt/fp-kodeverk';
import { skjermlenkeCodes } from '@navikt/fp-konstanter';
import { alleKodeverk, alleKodeverkTilbakekreving, withRouter } from '@navikt/fp-storybook-utils';
import { Historikkinnslag } from '@navikt/fp-types';

import HistorikkSakIndex from './HistorikkSakIndex';

const historikkInnslag: Historikkinnslag[] = [
  {
    behandlingUuid: '999951',
    aktør: { type: HistorikkAktor.VEDTAKSLOSNINGEN, ident: 'Srvengangsstonad' },
    opprettetTidspunkt: '2019-09-19T12:16:14.499',
    tittel: 'Dette er en tittel',
    skjermlenke: null,
    body: [],
    dokumenter: [{ dokumentId: '1', journalpostId: '2', tag: 'Vedlegg', url: 'www.test.no', utgått: false }],
  },
  {
    behandlingUuid: '999951',
    aktør: { type: HistorikkAktor.SAKSBEHANDLER, ident: 'Z991110' },
    opprettetTidspunkt: '2019-09-18T15:25:31.291',
    tittel: 'Dette er en tittel',
    skjermlenke: skjermlenkeCodes.FAKTA_OM_AKTIVITETSKRAV.kode,
    dokumenter: [],
    body: [],
  },
  {
    behandlingUuid: '999952',
    aktør: { type: HistorikkAktor.SOKER, ident: 'Srvengangsstonad' },
    opprettetTidspunkt: '2019-09-18T13:12:48.874',
    tittel: 'Dette er en tittel',
    skjermlenke: null,
    dokumenter: [],
    body: [],
  },
  {
    behandlingUuid: '999952',
    aktør: { type: HistorikkAktor.ARBEIDSGIVER, ident: '' },
    opprettetTidspunkt: '2019-09-23T16:22:45.874',
    tittel: 'Dette er en inntektsmelding',
    skjermlenke: null,
    dokumenter: [],
    body: [],
  },
  {
    behandlingUuid: '999952',
    aktør: { type: HistorikkAktor.BESLUTTER, ident: 'Z984523' },
    opprettetTidspunkt: '2019-09-20T14:11:45.874',
    tittel: 'Dette er en en besluttning',
    skjermlenke: null,
    dokumenter: [],
    body: [
      '__Behandlende enhet__ endret fra 4867 NAV Familie- og pensjonsytelser Foreldrepenger til __4806 NAV Familie- og pensjonsytelser Drammen__',
      'Dette er ein lang begrunnelsestekst',
      'Personopplysning',
    ],
  },
];

const locationMock = { key: 'test', pathname: 'test', search: 'test', state: {}, hash: 'test' };

const meta = {
  title: 'sak-historikk',
  component: HistorikkSakIndex,
  decorators: [
    withRouter,
    (story: any) => <div style={{ width: '600px', backgroundColor: 'white', padding: '30px' }}>{story()}</div>,
  ],
  args: {
    valgtBehandlingUuid: undefined,
    historikkFpSak: historikkInnslag,
    historikkFpTilbake: [],
    kjønn: NavBrukerKjonn.KVINNE,
    alleKodeverkFpSak: alleKodeverk as any,
    alleKodeverkFpTilbake: alleKodeverkTilbakekreving as any,
    saksnummer: '2',
    getBehandlingLocation: () => locationMock,
    createLocationForSkjermlenke: () => locationMock,
  },
} satisfies Meta<typeof HistorikkSakIndex>;

export default meta;

type Story = StoryObj<typeof meta>;

export const BehandlingIkkeErValgt: Story = {};

export const BehandlingErValgt: Story = { args: { valgtBehandlingUuid: '999951' } };
