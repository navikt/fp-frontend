import React, { FunctionComponent, useCallback } from 'react';
import { RawIntlProvider } from 'react-intl';

import BehandlingType from '@navikt/fp-kodeverk/src/behandlingType';
import { KodeverkMedNavn } from '@navikt/fp-types';
import { createIntl } from '@navikt/ft-utils';

import NyBehandlingModal, { BehandlingOppretting, FormValues } from './components/NyBehandlingModal';

import messages from '../i18n/nb_NO.json';

const TILBAKEKREVING_BEHANDLINGSTYPER = [BehandlingType.TILBAKEKREVING, BehandlingType.TILBAKEKREVING_REVURDERING];

const intl = createIntl(messages);

export const getMenytekst = (): string => intl.formatMessage({ id: 'MenyNyBehandlingIndex.NyForstegangsbehandling' });

interface OwnProps {
  ytelseType: string;
  saksnummer: string;
  behandlingUuid?: string;
  behandlingVersjon?: number;
  lagNyBehandling: (isTilbakekreving: boolean, data: {
    saksnummer: string;
    behandlingUuid?: string;
  } & FormValues) => void;
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

const MenyNyBehandlingIndex: FunctionComponent<OwnProps> = ({
  ytelseType,
  saksnummer,
  behandlingUuid,
  behandlingVersjon,
  lagNyBehandling,
  behandlingstyper,
  tilbakekrevingRevurderingArsaker,
  revurderingArsaker,
  behandlingOppretting,
  kanTilbakekrevingOpprettes,
  uuidForSistLukkede,
  lukkModal,
}) => {
  const submit = useCallback((formValues: FormValues) => {
    const isTilbakekreving = !!formValues.behandlingType && TILBAKEKREVING_BEHANDLINGSTYPER.includes(formValues.behandlingType);
    const tilbakekrevingBehandlingUuid = behandlingUuid && isTilbakekreving ? { behandlingUuid } : {};
    const params = {
      saksnummer,
      ...tilbakekrevingBehandlingUuid,
      ...formValues,
    };

    lagNyBehandling(isTilbakekreving, params);

    lukkModal();
  }, [behandlingUuid, behandlingVersjon]);
  return (
    <RawIntlProvider value={intl}>
      <NyBehandlingModal
        ytelseType={ytelseType}
        cancelEvent={lukkModal}
        submitCallback={submit}
        behandlingOppretting={behandlingOppretting}
        behandlingstyper={behandlingstyper}
        tilbakekrevingRevurderingArsaker={tilbakekrevingRevurderingArsaker}
        revurderingArsaker={revurderingArsaker}
        kanTilbakekrevingOpprettes={kanTilbakekrevingOpprettes}
        uuidForSistLukkede={uuidForSistLukkede}
      />
    </RawIntlProvider>
  );
};

export default MenyNyBehandlingIndex;
