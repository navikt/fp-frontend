import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, object } from '@storybook/addon-knobs';

import innsynResultatType from '@fpsak-frontend/kodeverk/src/innsynResultatType';
import kommunikasjonsretning from '@fpsak-frontend/kodeverk/src/kommunikasjonsretning';
import behandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import VedtakInnsynProsessIndex from '@fpsak-frontend/prosess-vedtak-innsyn';
import { Aksjonspunkt, Behandling } from '@fpsak-frontend/types';

import alleKodeverk from '../../mocks/alleKodeverk.json';

const behandling = {
  uuid: '1',
  versjon: 1,
  sprakkode: {
    kode: 'NO',
  },
} as Behandling;

const aksjonspunkter = [{
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

const standardProsessProps = {
  behandling: object('behandling', behandling),
  alleKodeverk: alleKodeverk as any,
  aksjonspunkter,
  submitCallback: action('button-click') as () => Promise<any>,
  isReadOnly: boolean('readOnly', false),
  isAksjonspunktOpen: boolean('harApneAksjonspunkter', true),
  readOnlySubmitButton: boolean('readOnly', false),
  status: '',
  vilkar: [],
  alleMerknaderFraBeslutter: {},
  setFormData: () => undefined,
};

export default {
  title: 'prosess/innsyn/prosess-vedtak-innsyn',
  component: VedtakInnsynProsessIndex,
  decorators: [withKnobs],
};

export const visPanelForInnvilgetVedtak = () => (
  <VedtakInnsynProsessIndex
    {...standardProsessProps}
    innsyn={object('innsyn', {
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
    })}
    saksnummer="123434"
    alleDokumenter={[{
      journalpostId: '2',
      dokumentId: '3',
      tittel: 'Dette er et dokument',
      tidspunkt: '2017-08-02T00:54:25.455',
      kommunikasjonsretning: kommunikasjonsretning.INN,
    }]}
    previewCallback={action('button-click') as any}
  />
);

export const visPanelForAvvistVedtak = () => (
  <VedtakInnsynProsessIndex
    {...standardProsessProps}
    innsyn={object('innsyn', {
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
    })}
    saksnummer="123434"
    alleDokumenter={[{
      journalpostId: '2',
      dokumentId: '3',
      tittel: 'Dette er et dokument',
      tidspunkt: '2017-08-02T00:54:25.455',
      kommunikasjonsretning: kommunikasjonsretning.INN,
    }]}
    previewCallback={action('button-click') as any}
  />
);
