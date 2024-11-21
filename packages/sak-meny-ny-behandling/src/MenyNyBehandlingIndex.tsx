import React, { useCallback } from 'react';
import { RawIntlProvider } from 'react-intl';

import { BehandlingType } from '@navikt/fp-kodeverk';
import { KodeverkMedNavn } from '@navikt/fp-types';
import { createIntl } from '@navikt/ft-utils';

import { NyBehandlingModal, BehandlingOppretting, FormValues } from './components/NyBehandlingModal';

import messages from '../i18n/nb_NO.json';

const TILBAKEKREVING_BEHANDLINGSTYPER = [BehandlingType.TILBAKEKREVING, BehandlingType.TILBAKEKREVING_REVURDERING];

const intl = createIntl(messages);

export const getMenytekst = (): string => intl.formatMessage({ id: 'MenyNyBehandlingIndex.NyForstegangsbehandling' });

interface Props {
  ytelseType: string;
  saksnummer: string;
  behandlingUuid?: string;
  behandlingVersjon?: number;
  lagNyBehandling: (
    isTilbakekreving: boolean,
    data: {
      saksnummer: string;
      behandlingUuid?: string;
    } & FormValues,
  ) => void;
  behandlingstyper: KodeverkMedNavn[];
  tilbakekrevingRevurderingArsaker: KodeverkMedNavn[];
  revurderingArsaker: KodeverkMedNavn[];
  behandlingOppretting: BehandlingOppretting[];
  kanTilbakekrevingOpprettes: {
    kanBehandlingOpprettes: boolean;
    kanRevurderingOpprettes: boolean;
  };
  uuidForSistLukkede?: string;
  lukkModal: () => void;
}

export const MenyNyBehandlingIndex = ({
  saksnummer,
  behandlingUuid,
  behandlingVersjon,
  lagNyBehandling,
  lukkModal,
  ...rest
}: Props) => {
  const submit = useCallback(
    (formValues: FormValues) => {
      const isTilbakekreving =
        !!formValues.behandlingType && TILBAKEKREVING_BEHANDLINGSTYPER.some(bt => bt === formValues.behandlingType);
      const tilbakekrevingBehandlingUuid = behandlingUuid && isTilbakekreving ? { behandlingUuid } : {};
      const params = {
        saksnummer,
        ...tilbakekrevingBehandlingUuid,
        ...formValues,
      };

      lagNyBehandling(isTilbakekreving, params);

      lukkModal();
    },
    [behandlingUuid, behandlingVersjon],
  );
  return (
    <RawIntlProvider value={intl}>
      <NyBehandlingModal cancelEvent={lukkModal} submitCallback={submit} {...rest} />
    </RawIntlProvider>
  );
};
