import React from 'react';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies

import { skjermlenkeCodes } from '@fpsak-frontend/konstanter';
import { Historikkinnslag, HistorikkinnslagDel } from '@fpsak-frontend/types';
import { alleKodeverk, withRouter } from '@fpsak-frontend/storybook-utils';
import historikkOpplysningTypeCodes from './kodeverk/historikkOpplysningTypeCodes';
import HistorikkSakIndex from './HistorikkSakIndex';
import historikkEndretFeltType from './kodeverk/historikkEndretFeltType';
import historikkinnslagType from './kodeverk/historikkinnslagType';

const historikkInnslag = [{
  behandlingUuid: '999951',
  type: 'NYE_REGOPPLYSNINGER',
  aktoer: 'VL',
  kjoenn: '-',
  opprettetAv: 'Srvengangsstonad',
  opprettetTidspunkt: '2019-09-19T12:16:14.499',
  dokumentLinks: [],
  historikkinnslagDeler: [
    {
      begrunnelse: 'SAKSBEH_START_PA_NYTT',
      hendelse: {
        navn: 'NYE_REGOPPLYSNINGER',
      },
      opplysninger: [],
      endredeFelter: [],
    },
  ],
},
{
  behandlingUuid: '999951',
  type: 'INNSYN_OPPR',
  aktoer: 'SBH',
  kjoenn: '-',
  opprettetAv: 'Z991110',
  opprettetTidspunkt: '2019-09-18T15:25:31.291',
  dokumentLinks: [],
  historikkinnslagDeler: [
    {
      begrunnelseFritekst: 'Krav om innsyn mottatt 18.09.2019',
      hendelse: {
        navn: 'INNSYN_OPPR',
      },
      opplysninger: [],
      endredeFelter: [],
    },
  ],
},
{
  behandlingUuid: '999952',
  type: 'BEH_STARTET',
  aktoer: 'SOKER',
  kjoenn: 'K',
  opprettetAv: 'Srvengangsstonad',
  opprettetTidspunkt: '2019-09-18T13:12:48.874',
  dokumentLinks: [
    {
      tag: 'Søknad',
      url: 'http://127.0.0.1:8080/fpsak/api/dokument/hent-dokument?journalpostId=453471722&dokumentId=470153809',
      journalpostId: '453471722',
      dokumentId: '470153809',
      utgått: false,
    },
  ],
  historikkinnslagDeler: [
    {
      hendelse: {
        navn: 'BEH_STARTET',
      },
      opplysninger: [],
      endredeFelter: [],
    },
  ],
}] as Historikkinnslag[];

const locationMock = {
  key: 'test',
  pathname: 'test',
  search: 'test',
  state: {},
  hash: 'test',
};

export default {
  title: 'sak/sak-historikk',
  component: HistorikkSakIndex,
  decorators: [withRouter],
};

const Template: Story<{
  valgtBehandlingUuid?: string;
  historikkFpSak?: Historikkinnslag[],
  historikkFpTilbake?: Historikkinnslag[],
}> = ({
  valgtBehandlingUuid,
  historikkFpSak = [],
  historikkFpTilbake = [],
}) => (
  <div style={{
    width: '600px', backgroundColor: 'white', padding: '30px',
  }}
  >
    <HistorikkSakIndex
      historikkFpSak={historikkFpSak}
      historikkFpTilbake={historikkFpTilbake}
      alleKodeverkFpSak={alleKodeverk as any}
      alleKodeverkFpTilbake={alleKodeverk as any}
      saksnummer="2"
      getBehandlingLocation={() => locationMock}
      createLocationForSkjermlenke={() => locationMock}
      valgtBehandlingUuid={valgtBehandlingUuid}
    />
  </div>
);

export const BehandlingIkkeErValgt = Template.bind({});
BehandlingIkkeErValgt.args = {
  historikkFpSak: historikkInnslag,
};

export const BehandlingErValgt = Template.bind({});
BehandlingErValgt.args = {
  historikkFpSak: historikkInnslag,
  valgtBehandlingUuid: '999951',
};

export const HistorikkinnslagAktivitetskrav = Template.bind({});
HistorikkinnslagAktivitetskrav.args = {
  historikkFpSak: [{
    behandlingUuid: '999951',
    type: historikkinnslagType.AVKLART_AKTIVITETSKRAV,
    aktoer: 'SOKER',
    kjoenn: 'K',
    opprettetAv: 'Srvengangsstonad',
    opprettetTidspunkt: '2019-09-19T12:16:14.499',
    dokumentLinks: [],
    historikkinnslagDeler: [{
      begrunnelseFritekst: 'Dette er en begrunnelse',
      opplysninger: [{
        opplysningType: historikkOpplysningTypeCodes.UTTAK_PERIODE_FOM.kode,
        tilVerdi: '05.01.2021',
      }, {
        opplysningType: historikkOpplysningTypeCodes.UTTAK_PERIODE_TOM.kode,
        tilVerdi: '19.01.2021',
      }],
      skjermlenke: skjermlenkeCodes.FAKTA_OM_AKTIVITETSKRAV.kode,
      endredeFelter: [{
        endretFeltNavn: 'AKTIVITETSKRAV_AVKLARING',
        klNavn: 'HISTORIKK_ENDRET_FELT_TYPE',
        fraVerdi: undefined,
        tilVerdi: 'I_AKTIVITET',
        klTilVerdi: 'AKTIVITETSKRAV_AVKLARING',
      }],
    }] as HistorikkinnslagDel[],
  }],
  valgtBehandlingUuid: '999951',
};

export const HistorikkinnslagForeldelse = Template.bind({});
HistorikkinnslagForeldelse.args = {
  historikkFpTilbake: [{
    behandlingUuid: '999951',
    type: historikkinnslagType.FORELDELSE,
    aktoer: 'SOKER',
    kjoenn: 'K',
    opprettetAv: 'Srvengangsstonad',
    opprettetTidspunkt: '2019-09-19T12:16:14.499',
    dokumentLinks: [],
    historikkinnslagDeler: [{
      skjermlenke: 'FORELDELSE',
      endredeFelter: [{
        endretFeltNavn: 'feltkode',
        fraVerdi: 'Ja',
        tilVerdi: 'Nei',
      }, {
        endretFeltNavn: 'Anna feltkode',
        tilVerdi: 'Dette er en ny verdi',
      }],
      opplysninger: [{
        opplysningType: historikkOpplysningTypeCodes.PERIODE_FOM.kode,
        tilVerdi: '10.10.2018',
      }, {
        opplysningType: historikkOpplysningTypeCodes.PERIODE_TOM.kode,
      }],
    }] as HistorikkinnslagDel[],
  }],
  valgtBehandlingUuid: '999951',
};

export const HistorikkinnslagTilbakekreving = Template.bind({});
HistorikkinnslagTilbakekreving.args = {
  historikkFpTilbake: [{
    behandlingUuid: '999951',
    type: historikkinnslagType.TILBAKEKREVING,
    aktoer: 'SOKER',
    kjoenn: 'K',
    opprettetAv: 'Srvengangsstonad',
    opprettetTidspunkt: '2019-09-19T12:16:14.499',
    dokumentLinks: [],
    historikkinnslagDeler: [{
      skjermlenke: 'TILBAKEKREVING',
      endredeFelter: [{
        endretFeltNavn: historikkEndretFeltType.ER_VILKARENE_TILBAKEKREVING_OPPFYLT,
        fraVerdi: 'Ja',
        tilVerdi: 'Nei',
      }, {
        endretFeltNavn: 'Anna feltkode',
        tilVerdi: 'Dette er ny verdi',
      }],
      opplysninger: [{
        opplysningType: historikkOpplysningTypeCodes.PERIODE_FOM.kode,
        tilVerdi: '10.10.2018',
      }, {
        opplysningType: historikkOpplysningTypeCodes.PERIODE_TOM.kode,
      }, {
        opplysningType: historikkOpplysningTypeCodes.TILBAKEKREVING_OPPFYLT_BEGRUNNELSE.kode,
      },
      {
        opplysningType: historikkOpplysningTypeCodes.SÆRLIG_GRUNNER_BEGRUNNELSE.kode,
      }],
    }] as HistorikkinnslagDel[],
  }],
  valgtBehandlingUuid: '999951',
};
