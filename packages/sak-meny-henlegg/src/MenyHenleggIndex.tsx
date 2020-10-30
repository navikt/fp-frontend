import React, { FunctionComponent, useCallback, useState } from 'react';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';

import { Kodeverk, KodeverkMedNavn } from '@fpsak-frontend/types';

import HenleggBehandlingModal from './components/HenleggBehandlingModal';
import HenlagtBehandlingModal from './components/HenlagtBehandlingModal';

import messages from '../i18n/nb_NO.json';

const cache = createIntlCache();

const intl = createIntl({
  locale: 'nb-NO',
  messages,
}, cache);

export const getMenytekst = () => intl.formatMessage({ id: 'MenyHenleggIndex.HenleggBehandling' });

interface OwnProps {
  behandlingId?: number;
  behandlingVersjon?: number;
  henleggBehandling: (params: {
    behandlingVersjon: number;
    behandlingId: number;
    årsakKode: string;
    begrunnelse: string;
  }) => Promise<any>;
  forhandsvisHenleggBehandling: (erHenleggelse: boolean, data: any) => void;
  ytelseType: Kodeverk;
  behandlingType: Kodeverk;
  behandlingUuid: string;
  behandlingResultatTyper: KodeverkMedNavn[];
  gaaTilSokeside: () => void;
  lukkModal: () => void;
}

const MenyHenleggIndex: FunctionComponent<OwnProps> = ({
  behandlingId,
  behandlingVersjon,
  henleggBehandling,
  forhandsvisHenleggBehandling,
  ytelseType,
  behandlingType,
  behandlingUuid,
  behandlingResultatTyper,
  gaaTilSokeside,
  lukkModal,
}) => {
  const [erHenlagt, setHenlagt] = useState(false);

  const submit = useCallback((formValues) => {
    const henleggBehandlingDto = {
      behandlingVersjon,
      behandlingId,
      årsakKode: formValues.årsakKode,
      begrunnelse: formValues.begrunnelse,
      fritekst: formValues.fritekst,
    };
    henleggBehandling(henleggBehandlingDto).then(() => {
      setHenlagt(true);
    });
  }, [behandlingId, behandlingVersjon]);

  return (
    <RawIntlProvider value={intl}>
      {!erHenlagt && (
        <HenleggBehandlingModal
          showModal
          onSubmit={submit}
          cancelEvent={lukkModal}
          previewHenleggBehandling={forhandsvisHenleggBehandling}
          behandlingId={behandlingId}
          ytelseType={ytelseType}
          behandlingType={behandlingType}
          behandlingUuid={behandlingUuid}
          behandlingResultatTyper={behandlingResultatTyper}
        />
      )}
      {erHenlagt && (
        <HenlagtBehandlingModal
          showModal
          closeEvent={gaaTilSokeside}
        />
      )}
    </RawIntlProvider>
  );
};

export default MenyHenleggIndex;
