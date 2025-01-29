import { TIDENES_ENDE } from '@navikt/ft-utils';
import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';

import { AdresseType, AksjonspunktKode, AksjonspunktStatus, SivilstandType } from '@navikt/fp-kodeverk';
import { alleKodeverk, withFormData } from '@navikt/fp-storybook-utils';
import { Behandling, KjønnkodeEnum, PersonopplysningerBasis, Ytelsefordeling } from '@navikt/fp-types';

import { OmsorgFaktaIndex } from './OmsorgFaktaIndex';

import '@navikt/ds-css';
import '@navikt/ft-form-hooks/dist/style.css';
import '@navikt/ft-ui-komponenter/dist/style.css';

const behandling = {
  uuid: '1',
  versjon: 1,
} as Behandling;

const adresse1 = {
  fom: '2023-01-01',
  tom: TIDENES_ENDE,
  adresseType: AdresseType.BOSTEDSADRESSE,
  adresselinje1: 'Industrigata 2B',
  postNummer: '4123',
  poststed: 'Bobygda',
  land: 'Norge',
};
const adresse2 = {
  fom: '2019-01-01',
  tom: '2023-01-01',
  adresseType: AdresseType.BOSTEDSADRESSE,
  adresselinje1: 'Veigata 1',
  postNummer: '0203',
  poststed: 'Bobygda',
  land: 'Norge',
};

const defaultBruker: PersonopplysningerBasis = {
  navn: 'Espen Utvikler',
  aktoerId: '1',
  kjønn: KjønnkodeEnum.MANN,
  sivilstand: SivilstandType.SAMBOER,
  fødselsdato: '1989-01-01',
  adresser: [adresse1, adresse2],
};
const defaultAnnenPart: PersonopplysningerBasis = {
  navn: 'Petra Utvikler',
  aktoerId: '2',
  kjønn: KjønnkodeEnum.KVINNE,
  sivilstand: SivilstandType.SAMBOER,
  fødselsdato: '1989-01-01',
  adresser: [adresse1, adresse2],
};
const defaultBarn: PersonopplysningerBasis = {
  navn: 'Tutta Utvikler',
  dødsdato: '2023-04-01',
  fødselsdato: '2023-04-01',
  adresser: [adresse2],
  aktoerId: '3',
  kjønn: KjønnkodeEnum.KVINNE,
  sivilstand: SivilstandType.UGIFT,
};

const ytelsefordeling = {} as Ytelsefordeling;

const merknaderFraBeslutter = {
  notAccepted: false,
};

const meta = {
  title: 'fakta/fakta-omsorg',
  component: OmsorgFaktaIndex,
  decorators: [withFormData],
  args: {
    submitCallback: action('button-click') as (data: any) => Promise<void>,
    readOnly: false,
    harApneAksjonspunkter: true,
    submittable: true,
    behandling,
    ytelsefordeling,
    alleKodeverk: alleKodeverk as any,
  },
} satisfies Meta<typeof OmsorgFaktaIndex>;
export default meta;

type Story = StoryObj<typeof meta>;

export const ÅpentAksjonspunktForKontrollAvOmBrukerHarOmsorg: Story = {
  args: {
    personoversikt: { barn: [defaultBarn], annenPart: defaultAnnenPart, bruker: defaultBruker },
    aksjonspunkter: [
      {
        definisjon: AksjonspunktKode.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG,
        status: AksjonspunktStatus.OPPRETTET,
        begrunnelse: undefined,
        kanLoses: true,
      },
    ],
    alleMerknaderFraBeslutter: {
      [AksjonspunktKode.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG]: merknaderFraBeslutter,
    },
  },
};
