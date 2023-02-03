import React from 'react';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';
import { Aksjonspunkt } from '@navikt/ft-types';

import behandlingType from '@navikt/fp-kodeverk/src/behandlingType';
import behandlingStatus from '@navikt/fp-kodeverk/src/behandlingStatus';
import aksjonspunktCodes from '@navikt/fp-kodeverk/src/aksjonspunktCodes';
import aksjonspunktStatus from '@navikt/fp-kodeverk/src/aksjonspunktStatus';
import {
  Behandling, Medlemskap, Soknad, MedlemPeriode, PersonopplysningMedlem,
} from '@navikt/fp-types';
import { FaktaAksjonspunkt } from '@navikt/fp-types-avklar-aksjonspunkter';
import { alleKodeverk } from '@navikt/fp-storybook-utils';

import MedlemskapFaktaIndex from './MedlemskapFaktaIndex';

const behandling = {
  uuid: '1',
  versjon: 1,
  type: behandlingType.FORSTEGANGSSOKNAD,
  behandlingPaaVent: false,
  status: behandlingStatus.BEHANDLING_UTREDES,
} as Behandling;

const soknad = {
  oppgittFordeling: {
    startDatoForPermisjon: '2019-01-01',
  },
  oppgittTilknytning: {
    oppholdNorgeNa: true,
    oppholdNestePeriode: true,
    oppholdSistePeriode: true,
    utlandsoppholdFor: [{
      landNavn: 'SVERIGE',
      fom: '2010-01-01',
      tom: '2011-01-01',
    }],
    utlandsoppholdEtter: [{
      landNavn: 'DANMARK',
      fom: '2018-01-01',
      tom: '2019-01-01',
    }],
  },
  termindato: '2018-01-01',
} as Soknad;

const merknaderFraBeslutter = {
  notAccepted: false,
};

export default {
  title: 'fakta/fakta-medlemskap',
  component: MedlemskapFaktaIndex,
};

const Template: Story<{
  medlemskap: Medlemskap;
  aksjonspunkter: Aksjonspunkt[];
  submitCallback: (aksjonspunktData: FaktaAksjonspunkt | FaktaAksjonspunkt[]) => Promise<void>;
  alleMerknaderFraBeslutter: { [key: string] : { notAccepted?: boolean }};
}> = ({
  medlemskap,
  aksjonspunkter,
  submitCallback,
  alleMerknaderFraBeslutter,
}) => (
  <MedlemskapFaktaIndex
    behandling={behandling}
    medlemskap={medlemskap}
    soknad={soknad}
    aksjonspunkter={aksjonspunkter}
    alleKodeverk={alleKodeverk as any}
    alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
    submitCallback={submitCallback}
    readOnly={false}
    harApneAksjonspunkter
    submittable
    setFormData={() => undefined}
  />
);

export const AvklarOmBrukerErBosatt = Template.bind({});
AvklarOmBrukerErBosatt.args = {
  medlemskap: {
    opphold: [{
      fom: '2019-01-01',
      tom: '2021-10-13',
      oppholdstillatelseType: 'MIDLERTIDIG',
    }, {
      tom: '2021-01-13',
      oppholdstillatelseType: 'MIDLERTIDIG',
    }],
    medlemskapPerioder: [{
      fom: '2019-01-01',
      tom: '2021-10-13',
      medlemskapType: 'AVKLARES',
      dekningType: 'OPPHOR',
      kildeType: 'FS22',
    }],
    perioder: [{
      vurderingsdato: '2018-11-07',
      personopplysningBruker: {
        personstatus: 'BOSA',
        navn: 'Mygg Robust',
        adresser: [],
        region: 'NORDEN',
      } as PersonopplysningMedlem,
      aksjonspunkter: [aksjonspunktCodes.AVKLAR_OM_BRUKER_ER_BOSATT],
      årsaker: [
        'SKJÆRINGSTIDSPUNKT',
      ],
    }] as MedlemPeriode[],
  },
  aksjonspunkter: [{
    definisjon: aksjonspunktCodes.AVKLAR_OM_BRUKER_ER_BOSATT,
    status: aksjonspunktStatus.OPPRETTET,
    begrunnelse: undefined,
    kanLoses: true,
  }],
  alleMerknaderFraBeslutter: {},
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const AvklarOmBrukerHarGyldigPeriode = Template.bind({});
AvklarOmBrukerHarGyldigPeriode.args = {
  medlemskap: {
    medlemskapPerioder: [{
      fom: '2021-06-30',
      tom: '2025-06-30',
      medlemskapType: 'ENDELIG',
      dekningType: 'IHT_AVTALE',
      kildeType: 'ANNEN',
      beslutningsdato: '2021-06-30',
    }],
    perioder: [{
      vurderingsdato: '2022-06-28',
      aksjonspunkter: [aksjonspunktCodes.AVKLAR_OM_BRUKER_HAR_GYLDIG_PERIODE],
      årsaker: ['SKJÆRINGSTIDSPUNKT'],
      oppholdsrettVurdering: null,
      erEosBorger: null,
      lovligOppholdVurdering: null,
      bosattVurdering: null,
      medlemskapManuellVurderingType: null,
      begrunnelse: null,
      personopplysningBruker: {
        navn: 'Papegøye Margaret',
        personstatus: 'BOSA',
        region: 'NORDEN',
        adresser: [{
          adresseType: 'BOSTEDSADRESSE',
          postNummer: '2500',
          poststed: 'Ukjent',
          land: 'NOR',
        }],
      },
      personopplysningAnnenPart: {
        navn: 'Papegøye Runar',
        personstatus: 'BOSA',
        region: 'NORDEN',
        adresser: [{
          adresseType: 'BOSTEDSADRESSE',
          postNummer: '2500',
          poststed: 'Ukjent',
          land: 'NOR',
        }],
      },
    }],
    opphold: [],
    fom: null,
  },
  aksjonspunkter: [{
    definisjon: aksjonspunktCodes.AVKLAR_OM_BRUKER_HAR_GYLDIG_PERIODE,
    status: aksjonspunktStatus.OPPRETTET,
    begrunnelse: undefined,
    kanLoses: true,
  }],
  alleMerknaderFraBeslutter: {},
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const AvklarOmBrukerHarOppholdsrett = Template.bind({});
AvklarOmBrukerHarOppholdsrett.args = {
  medlemskap: {
    opphold: [{
      fom: '2019-01-01',
      tom: '2021-10-13',
      oppholdstillatelseType: 'MIDLERTIDIG',
    }, {
      tom: '2021-01-13',
      oppholdstillatelseType: 'MIDLERTIDIG',
    }],
    medlemskapPerioder: [{
      fom: '2019-01-01',
      tom: '2021-10-13',
      medlemskapType: 'AVKLARES',
      dekningType: 'OPPHOR',
      kildeType: 'FS22',
    }],
    perioder: [{
      vurderingsdato: '2018-11-07',
      personopplysningBruker: {
        personstatus: 'BOSA',
        navn: 'Mygg Robust',
        adresser: [],
        region: 'NORDEN',
      } as PersonopplysningMedlem,
      aksjonspunkter: [aksjonspunktCodes.AVKLAR_OPPHOLDSRETT],
      årsaker: [
        'SKJÆRINGSTIDSPUNKT',
      ],
    }] as MedlemPeriode[],
  },
  aksjonspunkter: [{
    definisjon: aksjonspunktCodes.AVKLAR_OPPHOLDSRETT,
    status: aksjonspunktStatus.OPPRETTET,
    begrunnelse: undefined,
    kanLoses: true,
  }],
  alleMerknaderFraBeslutter: {},
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const AvklarOmBrukerHarLovligOpphold = Template.bind({});
AvklarOmBrukerHarLovligOpphold.args = {
  medlemskap: {
    opphold: [{
      fom: '2019-01-01',
      tom: '2021-10-13',
      oppholdstillatelseType: 'MIDLERTIDIG',
    }, {
      tom: '2021-01-13',
      oppholdstillatelseType: 'MIDLERTIDIG',
    }],
    medlemskapPerioder: [{
      fom: '2019-01-01',
      tom: '2021-10-13',
      medlemskapType: 'AVKLARES',
      dekningType: 'OPPHOR',
      kildeType: 'FS22',
    }],
    perioder: [{
      vurderingsdato: '2018-11-07',
      personopplysningBruker: {
        personstatus: 'BOSA',
        navn: 'Mygg Robust',
        adresser: [],
        region: 'NORDEN',
      } as PersonopplysningMedlem,
      aksjonspunkter: [aksjonspunktCodes.AVKLAR_LOVLIG_OPPHOLD],
      årsaker: [
        'SKJÆRINGSTIDSPUNKT',
      ],
    }] as MedlemPeriode[],
  },
  aksjonspunkter: [{
    definisjon: aksjonspunktCodes.AVKLAR_LOVLIG_OPPHOLD,
    status: aksjonspunktStatus.OPPRETTET,
    begrunnelse: undefined,
    kanLoses: true,
  }],
  alleMerknaderFraBeslutter: {},
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const BrukerHarLovligOppholdSomErSendtTilbakeFraBeslutter = Template.bind({});
BrukerHarLovligOppholdSomErSendtTilbakeFraBeslutter.args = {
  medlemskap: {
    opphold: [{
      fom: '2019-01-01',
      tom: '2021-10-13',
      oppholdstillatelseType: 'MIDLERTIDIG',
    }, {
      tom: '2021-01-13',
      oppholdstillatelseType: 'MIDLERTIDIG',
    }],
    medlemskapPerioder: [{
      fom: '2019-01-01',
      tom: '2021-10-13',
      medlemskapType: 'AVKLARES',
      dekningType: 'OPPHOR',
      kildeType: 'FS22',
    }],
    perioder: [{
      vurderingsdato: '2018-11-07',
      personopplysningBruker: {
        personstatus: 'BOSA',
        navn: 'Mygg Robust',
        adresser: [],
        region: 'NORDEN',
      } as PersonopplysningMedlem,
      lovligOppholdVurdering: true,
      aksjonspunkter: [aksjonspunktCodes.AVKLAR_LOVLIG_OPPHOLD],
      årsaker: [
        'SKJÆRINGSTIDSPUNKT',
      ],
      begrunnelse: 'Denne er vurdert',
    }] as MedlemPeriode[],
  },
  aksjonspunkter: [{
    definisjon: aksjonspunktCodes.AVKLAR_LOVLIG_OPPHOLD,
    status: aksjonspunktStatus.OPPRETTET,
    begrunnelse: undefined,
    kanLoses: true,
  }],
  alleMerknaderFraBeslutter: {
    [aksjonspunktCodes.AVKLAR_LOVLIG_OPPHOLD]: { notAccepted: true },
  },
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const AvklarFortsattMedlemskap = Template.bind({});
AvklarFortsattMedlemskap.args = {
  medlemskap: {
    opphold: [{
      fom: '2019-01-01',
      tom: '2021-10-13',
      oppholdstillatelseType: 'MIDLERTIDIG',
    }, {
      tom: '2021-01-13',
      oppholdstillatelseType: 'MIDLERTIDIG',
    }],
    medlemskapPerioder: [{
      fom: '2019-01-01',
      tom: '2021-10-13',
      medlemskapType: 'AVKLARES',
      dekningType: 'OPPHOR',
      kildeType: 'FS22',
    }],
    perioder: [{
      vurderingsdato: '2019-11-07',
      personopplysningBruker: {
        personstatus: 'BOSA',
        adresser: [{
          adresseType: 'BOSTEDSADRESSE',
          adresselinje1: 'Skogvegen 3',
          postNummer: '4353',
          poststed: 'Klepp Stasjon',
          land: 'NOR',
        }],
        region: 'NORDEN',
      } as PersonopplysningMedlem,
      aksjonspunkter: [
        aksjonspunktCodes.AVKLAR_OM_BRUKER_ER_BOSATT,
      ],
      årsaker: [
        'SKJÆRINGSTIDSPUNKT',
      ],
    }, {
      vurderingsdato: '2018-11-07',
      personopplysningBruker: {
        personstatus: 'BOSA',
        navn: 'Mygg Robust',
        adresser: [],
        region: 'NORDEN',
      } as PersonopplysningMedlem,
      aksjonspunkter: [],
      årsaker: [
        'SKJÆRINGSTIDSPUNKT',
      ],
    }, {
      vurderingsdato: '2016-01-01',
      personopplysningBruker: {
        personstatus: 'BOSA',
        navn: 'Mygg Robust',
        adresser: [],
        region: 'NORDEN',
      } as PersonopplysningMedlem,
      aksjonspunkter: [],
      årsaker: [
        'SKJÆRINGSTIDSPUNKT',
      ],
    }, {
      vurderingsdato: '2017-10-05',
      personopplysningBruker: {
        personstatus: 'BOSA',
        adresser: [{
          adresseType: 'BOSTEDSADRESSE',
          adresselinje1: 'Skogvegen 3',
          postNummer: '4353',
          poststed: 'Klepp Stasjon',
          land: 'NOR',
        }],
        region: 'NORDEN',
      } as PersonopplysningMedlem,
      aksjonspunkter: [
        aksjonspunktCodes.AVKLAR_LOVLIG_OPPHOLD,
      ],
      årsaker: [
        'SKJÆRINGSTIDSPUNKT',
      ],
    }] as MedlemPeriode[],
  },
  aksjonspunkter: [{
    definisjon: aksjonspunktCodes.AVKLAR_OM_BRUKER_ER_BOSATT,
    status: aksjonspunktStatus.UTFORT,
    begrunnelse: undefined,
    kanLoses: true,
  }, {
    definisjon: aksjonspunktCodes.AVKLAR_LOVLIG_OPPHOLD,
    status: aksjonspunktStatus.UTFORT,
    begrunnelse: undefined,
    kanLoses: true,
  }, {
    definisjon: aksjonspunktCodes.AVKLAR_FORTSATT_MEDLEMSKAP,
    status: aksjonspunktStatus.OPPRETTET,
    begrunnelse: undefined,
    kanLoses: true,
  }],
  alleMerknaderFraBeslutter: {
    [aksjonspunktCodes.AVKLAR_OM_BRUKER_ER_BOSATT]: merknaderFraBeslutter,
    [aksjonspunktCodes.AVKLAR_FORTSATT_MEDLEMSKAP]: merknaderFraBeslutter,
  },
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};
