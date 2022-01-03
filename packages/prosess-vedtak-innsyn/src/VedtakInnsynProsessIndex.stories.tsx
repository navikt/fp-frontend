import React from 'react';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';

import innsynResultatType from '@fpsak-frontend/kodeverk/src/innsynResultatType';
import kommunikasjonsretning from '@fpsak-frontend/kodeverk/src/kommunikasjonsretning';
import behandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { Aksjonspunkt, Behandling, Innsyn } from '@fpsak-frontend/types';
import { alleKodeverk } from '@fpsak-frontend/storybook-utils';
import { ProsessAksjonspunkt } from '@fpsak-frontend/types-avklar-aksjonspunkter';

import VedtakInnsynProsessIndex from './VedtakInnsynProsessIndex';

const behandling = {
  uuid: '1',
  versjon: 1,
  sprakkode: {
    kode: 'NO',
  },
} as Behandling;

const defaultAksjonspunkter = [{
  definisjon: {
    kode: aksjonspunktCodes.VURDER_INNSYN,
    kodeverk: '',
  },
  status: {
    kode: aksjonspunktStatus.UTFORT,
    kodeverk: '',
  },
  begrunnelse: 'Dette er utført',
}, {
  definisjon: {
    kode: aksjonspunktCodes.FORESLA_VEDTAK,
    kodeverk: '',
  },
  status: {
    kode: aksjonspunktStatus.OPPRETTET,
    kodeverk: '',
  },
  begrunnelse: undefined,
}] as Aksjonspunkt[];

export default {
  title: 'prosess/innsyn/prosess-vedtak-innsyn',
  component: VedtakInnsynProsessIndex,
};

const Template: Story<{
  submitCallback: (aksjonspunktData: ProsessAksjonspunkt | ProsessAksjonspunkt[]) => Promise<void>;
  innsyn: Innsyn;
  forhandsvisCallback: (data: any) => Promise<any>;
  readOnly?: boolean;
  aksjonspunkter?: Aksjonspunkt[];
}> = ({
  submitCallback,
  innsyn,
  forhandsvisCallback,
  readOnly = false,
  aksjonspunkter = defaultAksjonspunkter,
}) => (
  <VedtakInnsynProsessIndex
    behandling={behandling}
    alleKodeverk={alleKodeverk as any}
    aksjonspunkter={aksjonspunkter}
    submitCallback={submitCallback}
    isReadOnly={readOnly}
    isAksjonspunktOpen
    readOnlySubmitButton={false}
    status=""
    vilkar={[]}
    alleMerknaderFraBeslutter={{}}
    setFormData={() => undefined}
    innsyn={innsyn}
    saksnummer="123434"
    alleDokumenter={[{
      journalpostId: '2',
      dokumentId: '3',
      tittel: 'Dette er et dokument',
      tidspunkt: '2017-08-02T00:54:25.455',
      kommunikasjonsretning: kommunikasjonsretning.INN,
    }]}
    previewCallback={forhandsvisCallback}
  />
);

export const PanelForInnvilgetVedtak = Template.bind({});
PanelForInnvilgetVedtak.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  forhandsvisCallback: action('button-click') as any,
  innsyn: {
    dokumenter: [{
      journalpostId: '2',
      dokumentId: '3',
      fikkInnsyn: true,
    }],
    vedtaksdokumentasjon: [{
      dokumentId: '1',
      tittel: behandlingType.FORSTEGANGSSOKNAD,
      opprettetDato: '2019-01-01',
    }],
    innsynResultatType: {
      kode: innsynResultatType.INNVILGET,
      kodeverk: '',
    },
    innsynMottattDato: '2019-01-01',
  },
};

export const PanelForAvvistVedtak = Template.bind({});
PanelForAvvistVedtak.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  forhandsvisCallback: action('button-click') as any,
  innsyn: {
    dokumenter: [{
      journalpostId: '2',
      dokumentId: '3',
      fikkInnsyn: true,
    }],
    vedtaksdokumentasjon: [{
      dokumentId: '1',
      tittel: behandlingType.FORSTEGANGSSOKNAD,
      opprettetDato: '2019-01-01',
    }],
    innsynResultatType: {
      kode: innsynResultatType.AVVIST,
      kodeverk: '',
    },
    innsynMottattDato: '2019-01-01',
  },
};

export const PanelForAvvistVedtakReadonly = Template.bind({});
PanelForAvvistVedtakReadonly.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  forhandsvisCallback: action('button-click') as any,
  readOnly: true,
  aksjonspunkter: [defaultAksjonspunkter[0], {
    ...defaultAksjonspunkter[1],
    status: {
      kode: aksjonspunktStatus.UTFORT,
      kodeverk: '',
    },
    begrunnelse: 'Dette er en vurdering',
  }],
  innsyn: {
    dokumenter: [{
      journalpostId: '2',
      dokumentId: '3',
      fikkInnsyn: true,
    }],
    vedtaksdokumentasjon: [{
      dokumentId: '1',
      tittel: behandlingType.FORSTEGANGSSOKNAD,
      opprettetDato: '2019-01-01',
    }],
    innsynResultatType: {
      kode: innsynResultatType.AVVIST,
      kodeverk: '',
    },
    innsynMottattDato: '2019-01-01',
  },
};
