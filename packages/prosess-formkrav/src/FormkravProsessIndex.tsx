import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { KlageVurdering, StandardProsessPanelProps } from '@navikt/fp-types';

import FormkravKlageFormNfp from './components/FormkravKlageFormNfp';
import FormkravKlageKa from './components/FormkravKlageKa';
import AvsluttetBehandling from './types/avsluttetBehandlingTsType';
import FormkravMellomlagretDataType from './types/FormkravMellomlagretDataType';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  klageVurdering?: KlageVurdering;
  avsluttedeBehandlinger: AvsluttetBehandling[];
  lagreFormkravVurdering: (data: FormkravMellomlagretDataType) => void;
}

export const FormkravProsessIndex = ({
  behandling,
  klageVurdering = {},
  avsluttedeBehandlinger,
  aksjonspunkter,
  submitCallback,
  isReadOnly,
  readOnlySubmitButton,
  alleKodeverk,
  lagreFormkravVurdering,
}: Props & StandardProsessPanelProps) => (
  <RawIntlProvider value={intl}>
    {aksjonspunkter.some(a => a.definisjon === AksjonspunktKode.VURDERING_AV_FORMKRAV_KLAGE_NFP) && (
      <FormkravKlageFormNfp
        behandlingUuid={behandling.uuid}
        klageVurdering={klageVurdering}
        submitCallback={submitCallback}
        readOnly={isReadOnly}
        readOnlySubmitButton={readOnlySubmitButton}
        alleKodeverk={alleKodeverk}
        avsluttedeBehandlinger={avsluttedeBehandlinger}
        lagreFormkravVurdering={lagreFormkravVurdering}
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
