import { useState } from 'react';
import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import type { FagsakYtelseType } from '@navikt/fp-kodeverk';
import type { Behandling, KodeverkMedNavn, KodeverkMedNavnTilbakekreving } from '@navikt/fp-types';

import { HenlagtBehandlingModal } from './components/HenlagtBehandlingModal';
import {
  type ForhåndsvisHenleggParams,
  type FormValues,
  HenleggBehandlingModal,
} from './components/HenleggBehandlingModal';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

export const getMenytekst = (): string => intl.formatMessage({ id: 'MenyHenleggIndex.HenleggBehandling' });

interface Props {
  valgtBehandling: Behandling;
  henleggBehandling: (params: { årsakKode: string; begrunnelse: string; fritekst?: string }) => Promise<void>;
  forhandsvisHenleggBehandling: (data: ForhåndsvisHenleggParams) => void;
  ytelseType: FagsakYtelseType;
  behandlingResultatTyper:
    | KodeverkMedNavn<'BehandlingResultatType'>[]
    | KodeverkMedNavnTilbakekreving<'BehandlingResultatType'>[];
  gaaTilSokeside: () => void;
  lukkModal: () => void;
}

export const MenyHenleggIndex = ({
  valgtBehandling,
  henleggBehandling,
  forhandsvisHenleggBehandling,
  ytelseType,
  behandlingResultatTyper,
  gaaTilSokeside,
  lukkModal,
}: Props) => {
  const [erHenlagt, setErHenlagt] = useState(false);

  const submit = (formValues: FormValues) => {
    const henleggBehandlingDto = {
      årsakKode: formValues.årsakKode ?? '',
      begrunnelse: formValues.begrunnelse ?? '',
      fritekst: formValues.fritekst,
    };
    henleggBehandling(henleggBehandlingDto).then(() => {
      setErHenlagt(true);
    });
  };

  return (
    <RawIntlProvider value={intl}>
      {!erHenlagt && (
        <HenleggBehandlingModal
          handleSubmit={submit}
          cancelEvent={lukkModal}
          forhandsvisHenleggBehandling={forhandsvisHenleggBehandling}
          ytelseType={ytelseType}
          behandlingType={valgtBehandling.type}
          behandlingUuid={valgtBehandling.uuid}
          behandlingResultatTyper={behandlingResultatTyper}
        />
      )}
      {erHenlagt && <HenlagtBehandlingModal showModal closeEvent={gaaTilSokeside} />}
    </RawIntlProvider>
  );
};
