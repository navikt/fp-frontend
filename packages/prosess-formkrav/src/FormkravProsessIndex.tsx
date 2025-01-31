import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { KlageVurdering } from '@navikt/fp-types';
import { usePanelContext } from '@navikt/fp-utils';

import { FormkravKlageFormNfp } from './components/FormkravKlageFormNfp';
import { FormkravKlageKa } from './components/FormkravKlageKa';
import { AvsluttetBehandling } from './types/avsluttetBehandlingTsType';
import { FormkravMellomlagretDataType } from './types/FormkravMellomlagretDataType';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  klageVurdering?: KlageVurdering;
  avsluttedeBehandlinger: AvsluttetBehandling[];
  lagreFormkravVurdering: (data: FormkravMellomlagretDataType) => void;
  readOnlySubmitButton: boolean;
}

export const FormkravProsessIndex = ({
  klageVurdering = {},
  avsluttedeBehandlinger,
  readOnlySubmitButton,
  lagreFormkravVurdering,
}: Props) => {
  const { aksjonspunkterForPanel } = usePanelContext();

  return (
    <RawIntlProvider value={intl}>
      {aksjonspunkterForPanel.some(a => a.definisjon === AksjonspunktKode.VURDERING_AV_FORMKRAV_KLAGE_NFP) && (
        <FormkravKlageFormNfp
          klageVurdering={klageVurdering}
          readOnlySubmitButton={readOnlySubmitButton}
          avsluttedeBehandlinger={avsluttedeBehandlinger}
          lagreFormkravVurdering={lagreFormkravVurdering}
        />
      )}
      {klageVurdering.klageFormkravResultatKA && (
        <FormkravKlageKa klageVurdering={klageVurdering} avsluttedeBehandlinger={avsluttedeBehandlinger} />
      )}
    </RawIntlProvider>
  );
};
