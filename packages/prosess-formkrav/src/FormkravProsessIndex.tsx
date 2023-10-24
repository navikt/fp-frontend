import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import { AksjonspunktCode } from '@navikt/fp-kodeverk';
import { KlageVurdering, StandardProsessPanelProps } from '@navikt/fp-types';
import { createIntl } from '@navikt/ft-utils';

import messages from '../i18n/nb_NO.json';
import FormkravKlageFormNfp from './components/FormkravKlageFormNfp';
import FormkravKlageKa from './components/FormkravKlageKa';
import AvsluttetBehandling from './types/avsluttetBehandlingTsType';
import FormkravMellomlagretDataType from './types/FormkravMellomlagretDataType';

const intl = createIntl(messages);

interface OwnProps {
  klageVurdering?: KlageVurdering;
  avsluttedeBehandlinger: AvsluttetBehandling[];
  lagreFormkravVurdering: (data: FormkravMellomlagretDataType) => Promise<void>;
}

const FormkravProsessIndex: FunctionComponent<OwnProps & StandardProsessPanelProps> = ({
  behandling,
  klageVurdering = {},
  avsluttedeBehandlinger,
  aksjonspunkter,
  submitCallback,
  isReadOnly,
  readOnlySubmitButton,
  alleKodeverk,
  formData,
  setFormData,
  lagreFormkravVurdering,
}) => (
  <RawIntlProvider value={intl}>
    {aksjonspunkter.some(a => a.definisjon === AksjonspunktCode.VURDERING_AV_FORMKRAV_KLAGE_NFP) && (
      <FormkravKlageFormNfp
        behandlingUuid={behandling.uuid}
        klageVurdering={klageVurdering}
        submitCallback={submitCallback}
        readOnly={isReadOnly}
        readOnlySubmitButton={readOnlySubmitButton}
        alleKodeverk={alleKodeverk}
        avsluttedeBehandlinger={avsluttedeBehandlinger}
        lagreFormkravVurdering={lagreFormkravVurdering}
        formData={formData}
        setFormData={setFormData}
      />
    )}
    {klageVurdering.klageFormkravResultatKA && (
      <FormkravKlageKa
        klageVurdering={klageVurdering}
        alleKodeverk={alleKodeverk}
        avsluttedeBehandlinger={avsluttedeBehandlinger}
      />
    )}
  </RawIntlProvider>
);

export default FormkravProsessIndex;
