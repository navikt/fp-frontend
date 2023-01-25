import React from 'react';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';

import aksjonspunktCodes from '@navikt/fp-kodeverk/src/aksjonspunktCodes';
import behandlingStatus from '@navikt/fp-kodeverk/src/behandlingStatus';
import behandlingType from '@navikt/fp-kodeverk/src/behandlingType';
import aksjonspunktStatus from '@navikt/fp-kodeverk/src/aksjonspunktStatus';
import { Behandling, Aksjonspunkt, Soknad } from '@navikt/fp-types';
import SakenFaktaIndex from '@navikt/fp-fakta-saken';
import { alleKodeverk } from '@navikt/fp-storybook-utils';
import { FaktaAksjonspunkt } from '@navikt/fp-types-avklar-aksjonspunkter';

const behandling = {
  uuid: '1',
  versjon: 2,
  status: behandlingStatus.BEHANDLING_UTREDES,
  type: behandlingType.FORSTEGANGSSOKNAD,
  behandlingPaaVent: false,
  behandlingHenlagt: false,
};

export default {
  title: 'fakta/fakta-saken',
  component: SakenFaktaIndex,
};

const Template: Story<{
  aksjonspunkter: Aksjonspunkt[];
  alleMerknaderFraBeslutter?: { [key: string] : { notAccepted?: boolean }};
  submitCallback: (aksjonspunktData: FaktaAksjonspunkt | FaktaAksjonspunkt[]) => Promise<void>;
  erSvangerskapspenger?: boolean;
}> = ({
  aksjonspunkter,
  alleMerknaderFraBeslutter = {},
  submitCallback,
  erSvangerskapspenger = false,
}) => (
  <SakenFaktaIndex
    aksjonspunkter={aksjonspunkter}
    erSvangerskapspenger={erSvangerskapspenger}
    submitCallback={submitCallback}
    readOnly={false}
    submittable
    alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
    alleKodeverk={alleKodeverk as any}
    setFormData={() => undefined}
    behandling={behandling as Behandling}
    harApneAksjonspunkter={aksjonspunkter.some((ap) => ap.status === aksjonspunktStatus.OPPRETTET)}
    soknad={{
      oppgittFordeling: {
        startDatoForPermisjon: '2019-01-01',
      },
    } as Soknad}
  />
);

export const EndringAvUtland = Template.bind({});
EndringAvUtland.args = {
  aksjonspunkter: [],
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const ApentAksjonspunktForInnhentingAvDokumentasjon = Template.bind({});
ApentAksjonspunktForInnhentingAvDokumentasjon.args = {
  aksjonspunkter: [{
    definisjon: aksjonspunktCodes.AUTOMATISK_MARKERING_AV_UTENLANDSSAK,
    status: aksjonspunktStatus.OPPRETTET,
    kanLoses: true,
    erAktivt: true,
  }],
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const ApentAksjonspunktForInnhentingAvDokumentasjonVedSvp = Template.bind({});
ApentAksjonspunktForInnhentingAvDokumentasjonVedSvp.args = {
  aksjonspunkter: [{
    definisjon: aksjonspunktCodes.AUTOMATISK_MARKERING_AV_UTENLANDSSAK,
    status: aksjonspunktStatus.OPPRETTET,
    kanLoses: true,
    erAktivt: true,
  }],
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  erSvangerskapspenger: true,
};

export const AksjonspunktErIkkeGodkjentAvBeslutter = Template.bind({});
AksjonspunktErIkkeGodkjentAvBeslutter.args = {
  aksjonspunkter: [{
    definisjon: aksjonspunktCodes.AUTOMATISK_MARKERING_AV_UTENLANDSSAK,
    status: aksjonspunktStatus.OPPRETTET,
    kanLoses: true,
    erAktivt: true,
  }],
  alleMerknaderFraBeslutter: {
    [aksjonspunktCodes.AUTOMATISK_MARKERING_AV_UTENLANDSSAK]: {
      notAccepted: true,
    },
  },
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};
