import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { HistorikkAktor } from '@navikt/fp-kodeverk';
import { skjermlenkeCodes } from '@navikt/fp-konstanter';
import { alleKodeverk, alleKodeverkTilbakekreving, withRouter } from '@navikt/fp-storybook-utils';
import { Historikkinnslag } from '@navikt/fp-types';

import HistorikkSakIndex from './HistorikkSakIndex';

const locationMock = { key: 'test', pathname: 'test', search: 'test', state: {}, hash: 'test' };

const historikkInnslag: Historikkinnslag[] = [
  {
    behandlingUuid: 'b88a9745-6e08-4f72-831b-20fb0dd53b34',
    aktør: {
      type: HistorikkAktor.SAKSBEHANDLER,
      ident: 'Z994283',
    },
    skjermlenke: skjermlenkeCodes.FAKTA_UTTAK.kode,
    opprettetTidspunkt: '2024-12-06T11:59:56.891',
    dokumenter: [],
    tittel: null,
    linjer: [
      {
        type: 'TEKST',
        tekst:
          '__Perioden 09.07.2024 - 07.10.2024__ er satt til __Lagt til Uttak, Konto: Mødrekvoten, Gradering: 810008032 - Arbeid: 40%__.',
      },
      {
        type: 'TEKST',
        tekst:
          '__Perioden 08.10.2024 - 20.10.2024__ er satt til __Lagt til Utsettelse, Årsak: Barn er innlagt i helseinstitusjon__.',
      },
      {
        type: 'TEKST',
        tekst:
          '__Perioden 21.10.2024 - 30.11.2024__ er satt til __Lagt til Opphold, Årsak: Annen forelder har uttak av Fellesperiode__.',
      },
      { type: 'LINJESKIFT' },
      {
        type: 'TEKST',
        tekst: 'Bruker har rett på uttak med gradering',
      },
    ],
  },
  {
    behandlingUuid: 'bf4b6b71-f3a3-4fbf-8cde-0d1cbc182f4f',
    aktør: {
      type: HistorikkAktor.SAKSBEHANDLER,
      ident: 'Z991198',
    },
    skjermlenke: null,
    opprettetTidspunkt: '2024-08-04T19:39:14.237',
    dokumenter: [],
    tittel: 'Revurdering opprettet',
    linjer: [
      {
        type: 'TEKST',
        tekst: 'Opplysninger uttak',
      },
    ],
  },
  {
    behandlingUuid: '999951',
    aktør: { type: HistorikkAktor.VEDTAKSLOSNINGEN, ident: null },
    opprettetTidspunkt: '2024-09-19T12:16:14.499',
    tittel: 'Dette er en tittel',
    skjermlenke: null,
    linjer: [],
    dokumenter: [
      { dokumentId: '1', journalpostId: '2', tag: 'Søknad foreldrepenger', url: 'www.test.no', utgått: false },
      { dokumentId: '1', journalpostId: '2', tag: 'Vedlegg', url: 'www.test.no', utgått: true },
    ],
  },
  {
    behandlingUuid: 'b1f9bd3b-d6b9-4de8-b214-0f0c53cbbe1f',
    aktør: {
      type: HistorikkAktor.SAKSBEHANDLER,
      ident: 'Z991198',
    },
    skjermlenke: 'PUNKT_FOR_MEDLEMSKAP_LØPENDE',
    opprettetTidspunkt: '2024-08-04T20:07:08.962',
    dokumenter: null,
    tittel: null,
    linjer: [
      {
        type: 'TEKST',
        tekst: '__Overstyrt vurdering: Utfallet__ er endret fra Vilkåret er oppfylt til __Vilkåret er ikke oppfylt__',
      },
      {
        type: 'TEKST',
        tekst: 'Burde ha fanget dette',
      },
    ],
  },
  {
    behandlingUuid: 'd63aa31e-f3bb-4f50-a1c1-d4395c052c54',
    aktør: {
      type: HistorikkAktor.BESLUTTER,
      ident: 'Z993179',
    },
    skjermlenke: skjermlenkeCodes.VEDTAK.kode,
    opprettetTidspunkt: '2024-09-27T16:02:59.251',
    dokumenter: null,
    tittel: null,
    linjer: [
      {
        type: 'TEKST',
        tekst: 'Vedtak fattet: Opphør',
      },
    ],
  },
  {
    behandlingUuid: '6488585a-8320-4b48-bc20-bc67fb714643',
    aktør: {
      type: HistorikkAktor.VEDTAKSLOSNINGEN,
      ident: null,
    },
    skjermlenke: null,
    opprettetTidspunkt: '2024-08-04T20:26:04.122',
    dokumenter: [],
    tittel: 'Bytt enhet',
    linjer: [
      {
        type: 'TEKST',
        tekst:
          '__Behandlende enhet__ er endret fra 4806 NAV Familie- og pensjonsytelser Drammen til __4817 NAV Familie- og pensjonsytelser Steinkjer__',
      },
      {
        type: 'TEKST',
        tekst: 'Enhetsomlegging',
      },
    ],
  },
  {
    behandlingUuid: 'd63aa31e-f3bb-4f50-a1c1-d4395c052c54',
    aktør: {
      type: HistorikkAktor.SAKSBEHANDLER,
      ident: 'Z991753',
    },
    skjermlenke: skjermlenkeCodes.FAKTA_OM_MEDLEMSKAP.kode,
    opprettetTidspunkt: '2024-09-19T16:33:54.789',
    dokumenter: [],
    tittel: null,
    linjer: [
      {
        type: 'TEKST',
        tekst: '__Medlemskap__ er satt til __ikke oppfylt__.',
      },
      {
        type: 'TEKST',
        tekst: 'Bruker er registrert som utflyttet 01/08',
      },
    ],
  },
  {
    behandlingUuid: '1b1b6855-5069-42ba-855d-e3d201999db4',
    aktør: {
      type: HistorikkAktor.VEDTAKSLOSNINGEN,
      ident: null,
    },
    skjermlenke: null,
    opprettetTidspunkt: '2024-07-10T15:15:43.274',
    dokumenter: null,
    tittel: 'Behandling på vent 17.07.2024',
    linjer: [
      {
        type: 'TEKST',
        tekst: 'Venter på inntektsmelding',
      },
    ],
  },
  {
    behandlingUuid: null,
    aktør: {
      type: HistorikkAktor.ARBEIDSGIVER,
      ident: null,
    },
    skjermlenke: null,
    opprettetTidspunkt: '2024-07-11T15:28:06.352',
    dokumenter: [
      {
        tag: 'Inntektsmelding',
        url: 'https://192.168.26.220:8080/fpsak/api/dokument/hent-dokument?journalpostId=453877951&dokumentId=454273800',
        journalpostId: '453877951',
        dokumentId: '454273800',
        utgått: false,
      },
    ],
    tittel: 'Vedlegg mottatt',
    linjer: [],
  },
  {
    behandlingUuid: '1b1b6855-5069-42ba-855d-e3d201999db4',
    aktør: { type: HistorikkAktor.SOKER, ident: null },
    skjermlenke: null,
    opprettetTidspunkt: '2024-07-10T15:15:41.879',
    dokumenter: [
      {
        tag: 'Søknad',
        url: 'www.test.no',
        journalpostId: '0',
        dokumentId: '1',
        utgått: false,
      },
    ],
    tittel: 'Behandling startet',
    linjer: [],
  },
];

const meta = {
  title: 'sak-historikk',
  component: HistorikkSakIndex,
  decorators: [withRouter, story => <div style={{ width: '600px' }}>{story()}</div>],
  args: {
    valgtBehandlingUuid: undefined,
    historikkFpSak: historikkInnslag,
    historikkFpTilbake: [],
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
