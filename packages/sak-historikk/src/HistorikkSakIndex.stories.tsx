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
  type: {
    kode: 'NYE_REGOPPLYSNINGER',
    kodeverk: 'HISTORIKKINNSLAG_TYPE',
  },
  aktoer: {
    kode: 'VL',
    kodeverk: 'HISTORIKK_AKTOER',
  },
  kjoenn: {
    kode: '-',
    kodeverk: 'BRUKER_KJOENN',
  },
  opprettetAv: 'Srvengangsstonad',
  opprettetTidspunkt: '2019-09-19T12:16:14.499',
  dokumentLinks: [],
  historikkinnslagDeler: [
    {
      begrunnelse: {
        kode: 'SAKSBEH_START_PA_NYTT',
        kodeverk: 'HISTORIKK_BEGRUNNELSE_TYPE',
      },
      hendelse: {
        navn: {
          kode: 'NYE_REGOPPLYSNINGER',
          kodeverk: 'HISTORIKKINNSLAG_TYPE',
        },
      },
      opplysninger: [],
      endredeFelter: [],
    },
  ],
},
{
  behandlingUuid: '999951',
  type: {
    kode: 'INNSYN_OPPR',
    kodeverk: 'HISTORIKKINNSLAG_TYPE',
  },
  aktoer: {
    kode: 'SBH',
    kodeverk: 'HISTORIKK_AKTOER',
  },
  kjoenn: {
    kode: '-',
    kodeverk: 'BRUKER_KJOENN',
  },
  opprettetAv: 'Z991110',
  opprettetTidspunkt: '2019-09-18T15:25:31.291',
  dokumentLinks: [],
  historikkinnslagDeler: [
    {
      begrunnelseFritekst: 'Krav om innsyn mottatt 18.09.2019',
      hendelse: {
        navn: {
          kode: 'INNSYN_OPPR',
          kodeverk: 'HISTORIKKINNSLAG_TYPE',
        },
      },
      opplysninger: [],
      endredeFelter: [],
    },
  ],
},
{
  behandlingUuid: '999952',
  type: {
    kode: 'BEH_STARTET',
    kodeverk: 'HISTORIKKINNSLAG_TYPE',
  },
  aktoer: {
    kode: 'SOKER',
    kodeverk: 'HISTORIKK_AKTOER',
  },
  kjoenn: {
    kode: 'K',
    kodeverk: 'BRUKER_KJOENN',
  },
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
        navn: {
          kode: 'BEH_STARTET',
          kodeverk: 'HISTORIKKINNSLAG_TYPE',
        },
      },
      opplysninger: [],
      endredeFelter: [],
    },
  ],
}] as Historikkinnslag[];

const locationMock = {
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
    type: {
      kode: historikkinnslagType.AVKLART_AKTIVITETSKRAV,
      kodeverk: 'HISTORIKKINNSLAG_TYPE',
    },
    aktoer: {
      kode: 'SOKER',
      kodeverk: 'HISTORIKK_AKTOER',
    },
    kjoenn: {
      kode: 'K',
      kodeverk: 'BRUKER_KJOENN',
    },
    opprettetAv: 'Srvengangsstonad',
    opprettetTidspunkt: '2019-09-19T12:16:14.499',
    dokumentLinks: [],
    historikkinnslagDeler: [{
      begrunnelseFritekst: 'Dette er en begrunnelse',
      opplysninger: [{
        opplysningType: {
          kode: historikkOpplysningTypeCodes.UTTAK_PERIODE_FOM.kode,
          kodeverk: 'HISTORIKK_OPPLYSNING_TYPE',
        },
        tilVerdi: '05.01.2021',
      }, {
        opplysningType: {
          kode: historikkOpplysningTypeCodes.UTTAK_PERIODE_TOM.kode,
          kodeverk: 'HISTORIKK_OPPLYSNING_TYPE',
        },
        tilVerdi: '19.01.2021',
      }],
      skjermlenke: {
        kode: skjermlenkeCodes.FAKTA_OM_AKTIVITETSKRAV.kode,
        kodeverk: 'SKJERMLENKE_TYPE',
      },
      endredeFelter: [{
        endretFeltNavn: {
          kode: 'AKTIVITETSKRAV_AVKLARING',
          kodeverk: 'HISTORIKK_ENDRET_FELT_TYPE',
        },
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
    type: {
      kode: historikkinnslagType.FORELDELSE,
      kodeverk: 'HISTORIKKINNSLAG_TYPE',
    },
    aktoer: {
      kode: 'SOKER',
      kodeverk: 'HISTORIKK_AKTOER',
    },
    kjoenn: {
      kode: 'K',
      kodeverk: 'BRUKER_KJOENN',
    },
    opprettetAv: 'Srvengangsstonad',
    opprettetTidspunkt: '2019-09-19T12:16:14.499',
    dokumentLinks: [],
    historikkinnslagDeler: [{
      skjermlenke: {
        kode: 'FORELDELSE',
      },
      endredeFelter: [{
        endretFeltNavn: {
          kode: 'feltkode',
        },
        fraVerdi: 'Ja',
        tilVerdi: 'Nei',
      }, {
        endretFeltNavn: {
          kode: 'Anna feltkode',
        },
        tilVerdi: 'Dette er en ny verdi',
      }],
      opplysninger: [{
        opplysningType: {
          kode: historikkOpplysningTypeCodes.PERIODE_FOM.kode,
          kodeverk: '',
        },
        tilVerdi: '10.10.2018',
      }, {
        opplysningType: {
          kode: historikkOpplysningTypeCodes.PERIODE_TOM.kode,
          tilVerdi: '10.12.2018',
        },
      }],
    }] as HistorikkinnslagDel[],
  }],
  valgtBehandlingUuid: '999951',
};

export const HistorikkinnslagTilbakekreving = Template.bind({});
HistorikkinnslagTilbakekreving.args = {
  historikkFpTilbake: [{
    behandlingUuid: '999951',
    type: {
      kode: historikkinnslagType.TILBAKEKREVING,
      kodeverk: 'HISTORIKKINNSLAG_TYPE',
    },
    aktoer: {
      kode: 'SOKER',
      kodeverk: 'HISTORIKK_AKTOER',
    },
    kjoenn: {
      kode: 'K',
      kodeverk: 'BRUKER_KJOENN',
    },
    opprettetAv: 'Srvengangsstonad',
    opprettetTidspunkt: '2019-09-19T12:16:14.499',
    dokumentLinks: [],
    historikkinnslagDeler: [{
      skjermlenke: {
        kode: 'TILBAKEKREVING',
      },
      endredeFelter: [{
        endretFeltNavn: {
          kode: historikkEndretFeltType.ER_VILKARENE_TILBAKEKREVING_OPPFYLT,
        },
        fraVerdi: 'Ja',
        tilVerdi: 'Nei',
      }, {
        endretFeltNavn: {
          kode: 'Anna feltkode',
        },
        tilVerdi: 'Dette er ny verdi',
      }],
      opplysninger: [{
        opplysningType: {
          kode: historikkOpplysningTypeCodes.PERIODE_FOM.kode,
          kodeverk: '',
        },
        tilVerdi: '10.10.2018',
      }, {
        opplysningType: {
          kode: historikkOpplysningTypeCodes.PERIODE_TOM.kode,
          tilVerdi: '10.12.2018',
        },
      }, {
        opplysningType: {
          kode: historikkOpplysningTypeCodes.TILBAKEKREVING_OPPFYLT_BEGRUNNELSE.kode,
          tilVerdi: 'test',
        },
      },
      {
        opplysningType: {
          kode: historikkOpplysningTypeCodes.SÆRLIG_GRUNNER_BEGRUNNELSE.kode,
          tilVerdi: 'test',
        },
      }],
    }] as HistorikkinnslagDel[],
  }],
  valgtBehandlingUuid: '999951',
};
