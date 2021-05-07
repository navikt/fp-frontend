import React, { FunctionComponent, useCallback } from 'react';
import { RawIntlProvider } from 'react-intl';

import BehandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import { Kodeverk, KodeverkMedNavn } from '@fpsak-frontend/types';
import { createIntl } from '@fpsak-frontend/utils';
import { ReduxWrapper } from '@fpsak-frontend/form';

import NyBehandlingModal, { BehandlingOppretting, FormValues } from './components/NyBehandlingModal';

import messages from '../i18n/nb_NO.json';

const TILBAKEKREVING_BEHANDLINGSTYPER = [BehandlingType.TILBAKEKREVING, BehandlingType.TILBAKEKREVING_REVURDERING];

const intl = createIntl(messages);

export const getMenytekst = (): string => intl.formatMessage({ id: 'MenyNyBehandlingIndex.NyForstegangsbehandling' });

interface OwnProps {
  ytelseType: Kodeverk;
  saksnummer: string;
  behandlingId?: number;
  behandlingUuid?: string;
  behandlingVersjon?: number;
  behandlingType?: Kodeverk;
  lagNyBehandling: (isTilbakekreving: boolean, data: {
    saksnummer: string;
    behandlingId?: number;
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
  erTilbakekrevingAktivert: boolean;
  sjekkOmTilbakekrevingKanOpprettes: (params: {
    saksnummer: string;
    uuid: string;
  }) => void;
  sjekkOmTilbakekrevingRevurderingKanOpprettes: (params: {
    uuid: string;
  }) => void;
  lukkModal: () => void;
}

const MenyNyBehandlingIndex: FunctionComponent<OwnProps> = ({
  ytelseType,
  saksnummer,
  behandlingId,
  behandlingUuid,
  behandlingVersjon,
  behandlingType,
  lagNyBehandling,
  behandlingstyper,
  tilbakekrevingRevurderingArsaker,
  revurderingArsaker,
  behandlingOppretting,
  kanTilbakekrevingOpprettes,
  uuidForSistLukkede,
  erTilbakekrevingAktivert,
  sjekkOmTilbakekrevingKanOpprettes,
  sjekkOmTilbakekrevingRevurderingKanOpprettes,
  lukkModal,
}) => {
  const submit = useCallback((formValues: FormValues) => {
    const isTilbakekreving = !!formValues.behandlingType && TILBAKEKREVING_BEHANDLINGSTYPER.includes(formValues.behandlingType);
    const tilbakekrevingBehandlingId = behandlingId && isTilbakekreving ? { behandlingId } : {};
    const params = {
      saksnummer,
      ...tilbakekrevingBehandlingId,
      ...formValues,
    };

    lagNyBehandling(isTilbakekreving, params);

    lukkModal();
  }, [behandlingId, behandlingVersjon]);
  return (
    <RawIntlProvider value={intl}>
      <ReduxWrapper formName="MenyNyBehandlingIndex">
        <NyBehandlingModal
          ytelseType={ytelseType}
          saksnummer={saksnummer}
          cancelEvent={lukkModal}
          submitCallback={submit}
          behandlingOppretting={behandlingOppretting}
          behandlingstyper={behandlingstyper}
          tilbakekrevingRevurderingArsaker={tilbakekrevingRevurderingArsaker}
          revurderingArsaker={revurderingArsaker}
          kanTilbakekrevingOpprettes={kanTilbakekrevingOpprettes}
          behandlingType={behandlingType}
          behandlingId={behandlingId}
          behandlingUuid={behandlingUuid}
          uuidForSistLukkede={uuidForSistLukkede}
          erTilbakekrevingAktivert={erTilbakekrevingAktivert}
          sjekkOmTilbakekrevingKanOpprettes={sjekkOmTilbakekrevingKanOpprettes}
          sjekkOmTilbakekrevingRevurderingKanOpprettes={sjekkOmTilbakekrevingRevurderingKanOpprettes}
        />
      </ReduxWrapper>
    </RawIntlProvider>
  );
};

export default MenyNyBehandlingIndex;
