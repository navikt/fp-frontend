import React, { FunctionComponent, useCallback, useState } from 'react';
import { RawIntlProvider } from 'react-intl';

import { BehandlingAppKontekst, Kodeverk, KodeverkMedNavn } from '@fpsak-frontend/types';
import { createIntl } from '@fpsak-frontend/utils';
import { ReduxWrapper } from '@fpsak-frontend/form';

import HenleggBehandlingModal from './components/HenleggBehandlingModal';
import HenlagtBehandlingModal from './components/HenlagtBehandlingModal';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

export const getMenytekst = (): string => intl.formatMessage({ id: 'MenyHenleggIndex.HenleggBehandling' });

interface OwnProps {
  valgtBehandling: BehandlingAppKontekst;
  henleggBehandling: (params: {
    behandlingVersjon: number;
    behandlingId: number;
    årsakKode: string;
    begrunnelse: string;
  }) => Promise<any>;
  forhandsvisHenleggBehandling: (erHenleggelse: boolean, data: any) => void;
  ytelseType: Kodeverk;
  behandlingResultatTyper: KodeverkMedNavn[];
  gaaTilSokeside: () => void;
  lukkModal: () => void;
}

const MenyHenleggIndex: FunctionComponent<OwnProps> = ({
  valgtBehandling,
  henleggBehandling,
  forhandsvisHenleggBehandling,
  ytelseType,
  behandlingResultatTyper,
  gaaTilSokeside,
  lukkModal,
}) => {
  const [erHenlagt, setHenlagt] = useState(false);

  const submit = useCallback((formValues) => {
    const henleggBehandlingDto = {
      behandlingVersjon: valgtBehandling.versjon,
      behandlingId: valgtBehandling.id,
      årsakKode: formValues.årsakKode,
      begrunnelse: formValues.begrunnelse,
      fritekst: formValues.fritekst,
    };
    henleggBehandling(henleggBehandlingDto).then(() => {
      setHenlagt(true);
    });
  }, [valgtBehandling]);

  return (
    <RawIntlProvider value={intl}>
      {!erHenlagt && (
      <ReduxWrapper formName="MenyHenleggIndex">
        <HenleggBehandlingModal
          // @ts-ignore Fiks denne
          onSubmit={submit}
          cancelEvent={lukkModal}
          previewHenleggBehandling={forhandsvisHenleggBehandling}
          behandlingId={valgtBehandling.id}
          ytelseType={ytelseType}
          behandlingType={valgtBehandling.type}
          behandlingUuid={valgtBehandling.uuid}
          behandlingResultatTyper={behandlingResultatTyper}
        />
      </ReduxWrapper>
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
