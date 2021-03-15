import React, { FunctionComponent } from 'react';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { KlageVurdering, StandardProsessPanelProps } from '@fpsak-frontend/types';

import messages from '../i18n/nb_NO.json';
import FormkravKlageFormNfp from './components/FormkravKlageFormNfp';
import FormkravKlageFormKa from './components/FormkravKlageFormKa';
import AvsluttetBehandling from './types/avsluttetBehandlingTsType';

const cache = createIntlCache();

const intl = createIntl({
  locale: 'nb-NO',
  messages,
}, cache);

interface OwnProps {
  klageVurdering?: KlageVurdering;
  avsluttedeBehandlinger: AvsluttetBehandling[];
}

const FormkravProsessIndex: FunctionComponent<OwnProps & StandardProsessPanelProps> = ({
  behandling,
  klageVurdering,
  avsluttedeBehandlinger,
  aksjonspunkter,
  submitCallback,
  isReadOnly,
  readOnlySubmitButton,
  alleKodeverk,
}) => (
  <RawIntlProvider value={intl}>
    {aksjonspunkter.some((a) => a.definisjon.kode === aksjonspunktCodes.VURDERING_AV_FORMKRAV_KLAGE_NFP) && (
      <FormkravKlageFormNfp
        behandlingId={behandling.id}
        behandlingVersjon={behandling.versjon}
        klageVurdering={klageVurdering}
        submitCallback={submitCallback}
        readOnly={isReadOnly}
        readOnlySubmitButton={readOnlySubmitButton}
        alleKodeverk={alleKodeverk}
        avsluttedeBehandlinger={avsluttedeBehandlinger}
      />
    )}
    {aksjonspunkter.some((a) => a.definisjon.kode === aksjonspunktCodes.VURDERING_AV_FORMKRAV_KLAGE_KA) && (
      <FormkravKlageFormKa
        behandlingId={behandling.id}
        behandlingVersjon={behandling.versjon}
        klageVurdering={klageVurdering}
        submitCallback={submitCallback}
        readOnly={isReadOnly}
        readOnlySubmitButton={readOnlySubmitButton}
        alleKodeverk={alleKodeverk}
        avsluttedeBehandlinger={avsluttedeBehandlinger}
      />
    )}
  </RawIntlProvider>
);

FormkravProsessIndex.defaultProps = {
  klageVurdering: {},
};

export default FormkravProsessIndex;
