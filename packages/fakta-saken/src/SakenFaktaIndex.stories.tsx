import React from 'react';
import { StoryFn } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';

import { AksjonspunktCode, behandlingType, behandlingStatus, aksjonspunktStatus } from '@navikt/fp-kodeverk';
import { Behandling, Aksjonspunkt, Soknad } from '@navikt/fp-types';
import { alleKodeverk } from '@navikt/fp-storybook-utils';
import { FaktaAksjonspunkt } from '@navikt/fp-types-avklar-aksjonspunkter';
import SakenFaktaIndex from './SakenFaktaIndex';

import '@navikt/ds-css';
import '@navikt/ft-ui-komponenter/dist/style.css';
import '@navikt/ft-form-hooks/dist/style.css';

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

const Template: StoryFn<{
  aksjonspunkter: Aksjonspunkt[];
  alleMerknaderFraBeslutter?: { [key: string]: { notAccepted?: boolean } };
  submitCallback: (aksjonspunktData: FaktaAksjonspunkt | FaktaAksjonspunkt[]) => Promise<void>;
  erSvangerskapspenger?: boolean;
}> = ({ aksjonspunkter, alleMerknaderFraBeslutter = {}, submitCallback, erSvangerskapspenger = false }) => (
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
    harApneAksjonspunkter={aksjonspunkter.some(ap => ap.status === aksjonspunktStatus.OPPRETTET)}
    soknad={
      {
        oppgittFordeling: {
          startDatoForPermisjon: '2019-01-01',
        },
      } as Soknad
    }
  />
);

export const EndringAvUtland = Template.bind({});
EndringAvUtland.args = {
  aksjonspunkter: [],
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const ApentAksjonspunktForInnhentingAvDokumentasjon = Template.bind({});
ApentAksjonspunktForInnhentingAvDokumentasjon.args = {
  aksjonspunkter: [
    {
      definisjon: AksjonspunktCode.AUTOMATISK_MARKERING_AV_UTENLANDSSAK,
      status: aksjonspunktStatus.OPPRETTET,
      kanLoses: true,
    },
  ],
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const ApentAksjonspunktForInnhentingAvDokumentasjonVedSvp = Template.bind({});
ApentAksjonspunktForInnhentingAvDokumentasjonVedSvp.args = {
  aksjonspunkter: [
    {
      definisjon: AksjonspunktCode.AUTOMATISK_MARKERING_AV_UTENLANDSSAK,
      status: aksjonspunktStatus.OPPRETTET,
      kanLoses: true,
    },
  ],
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  erSvangerskapspenger: true,
};

export const AksjonspunktErIkkeGodkjentAvBeslutter = Template.bind({});
AksjonspunktErIkkeGodkjentAvBeslutter.args = {
  aksjonspunkter: [
    {
      definisjon: AksjonspunktCode.AUTOMATISK_MARKERING_AV_UTENLANDSSAK,
      status: aksjonspunktStatus.OPPRETTET,
      kanLoses: true,
    },
  ],
  alleMerknaderFraBeslutter: {
    [AksjonspunktCode.AUTOMATISK_MARKERING_AV_UTENLANDSSAK]: {
      notAccepted: true,
    },
  },
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};
