import React, { FunctionComponent, useCallback, useState } from 'react';
import { RawIntlProvider } from 'react-intl';

import { BehandlingAppKontekst, KodeverkMedNavn } from '@fpsak-frontend/types';
import { createIntl } from '@fpsak-frontend/utils';

import HenleggBehandlingModal, { FormValues } from './components/HenleggBehandlingModal';
import HenlagtBehandlingModal from './components/HenlagtBehandlingModal';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

export const getMenytekst = (): string => intl.formatMessage({ id: 'MenyHenleggIndex.HenleggBehandling' });

interface OwnProps {
  valgtBehandling: BehandlingAppKontekst;
  henleggBehandling: (params: {
    årsakKode: string;
    begrunnelse: string;
    fritekst: string;
  }) => Promise<any>;
  forhandsvisHenleggBehandling: (erHenleggelse: boolean, data: any) => void;
  ytelseType: string;
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

  const submit = useCallback((formValues: Required<FormValues>) => {
    const henleggBehandlingDto = {
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
        <HenleggBehandlingModal
          handleSubmit={submit}
          cancelEvent={lukkModal}
          previewHenleggBehandling={forhandsvisHenleggBehandling}
          ytelseType={ytelseType}
          behandlingType={valgtBehandling.type}
          behandlingUuid={valgtBehandling.uuid}
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
