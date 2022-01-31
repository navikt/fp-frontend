import React from 'react';
import { action } from '@storybook/addon-actions';

import behandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import behandlingStatus from '@fpsak-frontend/kodeverk/src/behandlingStatus';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import {
  Behandling, Medlemskap, Soknad, MedlemPeriode, PersonopplysningMedlem,
} from '@fpsak-frontend/types';
import { alleKodeverk } from '@fpsak-frontend/storybook-utils';

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
} as Soknad;

const medlemskap = {
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
      '5021',
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
    aksjonspunkter: [
      '5021',
    ],
    årsaker: [
      'SKJÆRINGSTIDSPUNKT',
    ],
  }] as MedlemPeriode[],
} as Medlemskap;

const merknaderFraBeslutter = {
  notAccepted: false,
};

const standardFaktaProps = {
  aksjonspunkter: [],
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  readOnly: false,
  harApneAksjonspunkter: true,
  submittable: true,
  alleMerknaderFraBeslutter: {},
  setFormData: () => undefined,
};

export default {
  title: 'fakta/fakta-medlemskap',
  component: MedlemskapFaktaIndex,
};

export const visAksjonspunktForOverstyringAvStartdatoForForeldrepengerperioden = () => (
  <MedlemskapFaktaIndex
    {...standardFaktaProps}
    behandling={behandling}
    medlemskap={medlemskap}
    soknad={soknad}
    isForeldrepengerFagsak
    alleKodeverk={alleKodeverk as any}
    readOnlyForStartdatoForForeldrepenger={false}
  />
);

export const visAksjonspunktForAlleAndreMedlemskapsaksjonspunkter = () => (
  <MedlemskapFaktaIndex
    {...standardFaktaProps}
    behandling={behandling}
    medlemskap={medlemskap}
    soknad={soknad}
    aksjonspunkter={[{
      definisjon: aksjonspunktCodes.AVKLAR_OM_BRUKER_ER_BOSATT,
      status: aksjonspunktStatus.OPPRETTET,
      begrunnelse: undefined,
      kanLoses: true,
      erAktivt: true,
    }, {
      definisjon: aksjonspunktCodes.AVKLAR_FORTSATT_MEDLEMSKAP,
      status: aksjonspunktStatus.OPPRETTET,
      begrunnelse: undefined,
      kanLoses: true,
      erAktivt: true,
    }, {
      definisjon: aksjonspunktCodes.AVKLAR_OM_BRUKER_HAR_GYLDIG_PERIODE,
      status: aksjonspunktStatus.OPPRETTET,
      begrunnelse: undefined,
      kanLoses: true,
      erAktivt: true,
    }, {
      definisjon: aksjonspunktCodes.AVKLAR_OPPHOLDSRETT,
      status: aksjonspunktStatus.OPPRETTET,
      begrunnelse: undefined,
      kanLoses: true,
      erAktivt: true,
    }]}
    isForeldrepengerFagsak
    alleKodeverk={alleKodeverk as any}
    alleMerknaderFraBeslutter={{
      [aksjonspunktCodes.AVKLAR_OM_BRUKER_ER_BOSATT]: merknaderFraBeslutter,
      [aksjonspunktCodes.AVKLAR_FORTSATT_MEDLEMSKAP]: merknaderFraBeslutter,
      [aksjonspunktCodes.AVKLAR_OM_BRUKER_HAR_GYLDIG_PERIODE]: merknaderFraBeslutter,
      [aksjonspunktCodes.AVKLAR_OPPHOLDSRETT]: merknaderFraBeslutter,
    }}
    readOnlyForStartdatoForForeldrepenger={false}
  />
);
