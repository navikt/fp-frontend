import React from 'react';
import { action } from '@storybook/addon-actions';

import kommunikasjonsretning from '@fpsak-frontend/kodeverk/src/kommunikasjonsretning';
import behandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import InnsynProsessIndex from '@fpsak-frontend/prosess-innsyn';
import {
  Aksjonspunkt, Behandling, Innsyn, InnsynDokument,
} from '@fpsak-frontend/types';

import alleKodeverk from '../../mocks/alleKodeverk.json';

const behandling = {
  uuid: '1',
  versjon: 1,
  behandlingPaaVent: false,
} as Behandling;

const aksjonspunkter = [{
  definisjon: {
    kode: aksjonspunktCodes.VURDER_INNSYN,
    kodeverk: '',
  },
  status: {
    kode: aksjonspunktStatus.OPPRETTET,
    kodeverk: '',
  },
  begrunnelse: undefined,
}] as Aksjonspunkt[];

const standardProsessProps = {
  behandling,
  alleKodeverk: alleKodeverk as any,
  aksjonspunkter,
  submitCallback: action('button-click') as () => Promise<any>,
  isReadOnly: false,
  isAksjonspunktOpen: true,
  readOnlySubmitButton: false,
  status: '',
  vilkar: [],
  alleMerknaderFraBeslutter: {},
  setFormData: () => undefined,
};

export default {
  title: 'prosess/innsyn/prosess-innsyn',
  component: InnsynProsessIndex,
};

export const visPanelForVurderingAvInnsyn = () => (
  <InnsynProsessIndex
    {...standardProsessProps}
    innsyn={{
      dokumenter: [] as InnsynDokument[],
      vedtaksdokumentasjon: [{
        dokumentId: '1',
        tittel: behandlingType.FORSTEGANGSSOKNAD,
        opprettetDato: '2019-01-01',
      }],
    } as Innsyn}
    saksnummer="123434"
    alleDokumenter={[{
      journalpostId: '2',
      dokumentId: '3',
      tittel: 'Dette er et dokument',
      tidspunkt: '2017-08-02T00:54:25.455',
      kommunikasjonsretning: kommunikasjonsretning.INN,
    }]}
  />
);
