import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import {
  Fagsak, SimuleringResultat, TilbakekrevingValg, StandardProsessPanelProps,
} from '@fpsak-frontend/types';
import { createIntl } from '@fpsak-frontend/utils';
import { ReduxWrapper } from '@fpsak-frontend/form';

import AvregningPanel from './components/AvregningPanel';
import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface OwnProps {
  fagsak: Fagsak;
  simuleringResultat?: SimuleringResultat;
  tilbakekrevingvalg?: TilbakekrevingValg;
  previewFptilbakeCallback: (mottaker: string, brevmalkode: string, fritekst: string) => Promise<any>;
}

const AvregningProsessIndex: FunctionComponent<OwnProps & StandardProsessPanelProps> = ({
  fagsak,
  behandling,
  aksjonspunkter,
  simuleringResultat,
  tilbakekrevingvalg,
  submitCallback,
  isReadOnly,
  readOnlySubmitButton,
  isAksjonspunktOpen,
  previewFptilbakeCallback,
  formData,
  setFormData,
}) => (
  <RawIntlProvider value={intl}>
    <ReduxWrapper formName="AvregningProsessIndex" formData={formData} setFormData={setFormData}>
      <AvregningPanel
        fagsak={fagsak}
        sprakkode={behandling.sprakkode}
        aksjonspunkter={aksjonspunkter}
        simuleringResultat={simuleringResultat}
        tilbakekrevingvalg={tilbakekrevingvalg}
        submitCallback={submitCallback}
        readOnly={isReadOnly}
        readOnlySubmitButton={readOnlySubmitButton}
        apCodes={aksjonspunkter.map((a) => a.definisjon.kode)}
        isApOpen={isAksjonspunktOpen}
        previewCallback={previewFptilbakeCallback}
      />
    </ReduxWrapper>
  </RawIntlProvider>
);

export default AvregningProsessIndex;
