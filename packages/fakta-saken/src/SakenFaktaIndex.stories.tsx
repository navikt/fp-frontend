import React from 'react';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import behandlingStatus from '@fpsak-frontend/kodeverk/src/behandlingStatus';
import behandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import { Behandling, Aksjonspunkt } from '@fpsak-frontend/types';
import SakenFaktaIndex from '@fpsak-frontend/fakta-saken';
import { alleKodeverk } from '@fpsak-frontend/storybook-utils';
import { FaktaAksjonspunkt } from '@fpsak-frontend/types-avklar-aksjonspunkter';

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
}> = ({
  aksjonspunkter,
  alleMerknaderFraBeslutter = {},
  submitCallback,
}) => (
  <SakenFaktaIndex
    aksjonspunkter={aksjonspunkter}
    submitCallback={submitCallback}
    readOnly={false}
    submittable
    alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
    // @ts-ignore Fiks
    alleKodeverk={alleKodeverk}
    setFormData={() => undefined}
    behandling={behandling as Behandling}
    harApneAksjonspunkter={aksjonspunkter.some((ap) => ap.status === aksjonspunktStatus.OPPRETTET)}
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
