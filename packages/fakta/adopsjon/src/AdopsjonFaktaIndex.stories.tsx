import { type ComponentProps } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import {
  AksjonspunktKode,
  AksjonspunktStatus,
  AksjonspunktType,
  FarSøkerType,
  SoknadType,
  VilkarType,
} from '@navikt/fp-kodeverk';
import { type PanelDataArgs, withMellomlagretFormData, withPanelData } from '@navikt/fp-storybook-utils';
import type {
  Aksjonspunkt,
  foreldrepenger_familiehendelse_rest_AvklartDataAdopsjonDto,
  Soknad,
} from '@navikt/fp-types';

import { AdopsjonFaktaIndex } from './AdopsjonFaktaIndex';

const familieHendelse = {
  adopsjonFodelsedatoer: {
    1: '2018-01-01',
    2: '2000-01-02',
  },
  mannAdoptererAlene: null,
  ektefellesBarn: null,
  omsorgsovertakelseDato: null,
  ankomstNorge: null,
  fødselsdatoer: null,
  soknadType: 'ST-002',
  skjaringstidspunkt: '',
} satisfies foreldrepenger_familiehendelse_rest_AvklartDataAdopsjonDto;

const soknad = {
  antallBarn: 1,
  adopsjonFodelsedatoer: { 1: '2019-01-10' },
  soknadType: SoknadType.ADOPSJON,
  farSokerType: FarSøkerType.ADOPTERER_ALENE,
  mottattDato: '',
  begrunnelseForSenInnsending: null,
  omsorgsovertakelseDato: '2022-09-14',
  barnetsAnkomstTilNorgeDato: '2022-09-13',
  oppgittTilknytning: {
    oppholdNorgeNa: false,
    oppholdSistePeriode: false,
    oppholdNestePeriode: false,
    utlandsoppholdFor: [],
    utlandsoppholdEtter: [],
  },
  manglendeVedlegg: [],
  oppgittFordeling: {
    startDatoForPermisjon: null,
    dekningsgrader: {
      avklartDekningsgrad: null,
      søker: {
        søknadsdato: '',
        dekningsgrad: 0,
      },
      annenPart: null,
    },
  },
  søknadsfrist: {
    mottattDato: null,
    utledetSøknadsfrist: null,
    søknadsperiodeStart: null,
    søknadsperiodeSlutt: null,
    dagerOversittetFrist: null,
  },
} satisfies Soknad;

const merknaderFraBeslutter = {
  notAccepted: false,
};

const meta = {
  title: 'fakta/fakta-adopsjon',
  component: AdopsjonFaktaIndex,
  decorators: [withMellomlagretFormData, withPanelData],
  args: {
    soknad,
    gjeldendeFamiliehendelse: familieHendelse,
    submittable: true,
    isForeldrepengerFagsak: true,
  },
  render: args => <AdopsjonFaktaIndex {...args} />,
} satisfies Meta<PanelDataArgs & ComponentProps<typeof AdopsjonFaktaIndex>>;
export default meta;

type Story = StoryObj<typeof meta>;

const aksjonspunktDefault = {
  definisjon: AksjonspunktKode.OMSORGSOVERTAKELSE,
  status: AksjonspunktStatus.OPPRETTET,
  begrunnelse: null,
  kanLoses: true,
  toTrinnsBehandling: false,
  toTrinnsBehandlingGodkjent: null,
  vurderPaNyttArsaker: null,
  besluttersBegrunnelse: null,
  aksjonspunktType: AksjonspunktType.AUTOPUNKT,
  vilkarType: VilkarType.OMSORGSVILKARET,
  erAktivt: true,
  fristTid: null,
  endretTidspunkt: null,
  endretAv: null,
} satisfies Aksjonspunkt;

export const AksjonspunktForAdopsjonsvilkåret: Story = {
  args: {
    aksjonspunkterForPanel: [
      {
        ...aksjonspunktDefault,
        definisjon: AksjonspunktKode.ADOPSJONSDOKUMENTAJON,
        status: AksjonspunktStatus.OPPRETTET,
        begrunnelse: null,
        kanLoses: true,
      },
    ],
    alleMerknaderFraBeslutter: {
      [AksjonspunktKode.ADOPSJONSDOKUMENTAJON]: merknaderFraBeslutter,
    },
  },
};

export const AksjonspunktForOmSøkerErMannSomAdoptererAlene: Story = {
  args: {
    aksjonspunkterForPanel: [
      {
        ...aksjonspunktDefault,
        definisjon: AksjonspunktKode.OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE,
        status: AksjonspunktStatus.OPPRETTET,
        begrunnelse: null,
        kanLoses: true,
      },
    ],
    alleMerknaderFraBeslutter: {
      [AksjonspunktKode.OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE]: merknaderFraBeslutter,
    },
  },
};

export const AksjonspunktForOmAdopsjonGjelderEktefellesBarn: Story = {
  args: {
    aksjonspunkterForPanel: [
      {
        ...aksjonspunktDefault,
        definisjon: AksjonspunktKode.OM_ADOPSJON_GJELDER_EKTEFELLES_BARN,
        status: AksjonspunktStatus.OPPRETTET,
        begrunnelse: null,
        kanLoses: true,
      },
    ],
    alleMerknaderFraBeslutter: {
      [AksjonspunktKode.OM_ADOPSJON_GJELDER_EKTEFELLES_BARN]: merknaderFraBeslutter,
    },
  },
};

export const IkkeVisBarnetsAnkomstDatoForEngangsstønad: Story = {
  args: {
    aksjonspunkterForPanel: [
      {
        ...aksjonspunktDefault,
        definisjon: AksjonspunktKode.OM_ADOPSJON_GJELDER_EKTEFELLES_BARN,
        status: AksjonspunktStatus.OPPRETTET,
        begrunnelse: null,
        kanLoses: true,
      },
    ],
    alleMerknaderFraBeslutter: {
      [AksjonspunktKode.OM_ADOPSJON_GJELDER_EKTEFELLES_BARN]: merknaderFraBeslutter,
    },
    isForeldrepengerFagsak: false,
  },
};
