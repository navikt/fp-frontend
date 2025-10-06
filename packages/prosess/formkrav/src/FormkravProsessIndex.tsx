import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import type { KlageVurdering } from '@navikt/fp-types';
import { usePanelDataContext } from '@navikt/fp-utils';

import { FormkravKlageFormNfp } from './components/FormkravKlageFormNfp';
import { FormkravKlageKa } from './components/FormkravKlageKa';
import type { AvsluttetBehandling } from './types/avsluttetBehandlingTsType';
import type { FormkravMellomlagretDataType } from './types/FormkravMellomlagretDataType';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  klageVurdering?: KlageVurdering;
  avsluttedeBehandlinger: AvsluttetBehandling[];
  lagreFormkravVurdering: (data: FormkravMellomlagretDataType) => void;
}

const tomKlageVurdering = {};

export const FormkravProsessIndex = ({
  klageVurdering = tomKlageVurdering,
  avsluttedeBehandlinger,
  lagreFormkravVurdering,
}: Props) => {
  const { aksjonspunkterForPanel } = usePanelDataContext();

  return (
    <RawIntlProvider value={intl}>
      {aksjonspunkterForPanel.some(a => a.definisjon === '5082') && (
        <FormkravKlageFormNfp
          klageVurdering={klageVurdering}
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
