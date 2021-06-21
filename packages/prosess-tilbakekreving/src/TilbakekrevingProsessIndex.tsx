import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import {
  FeilutbetalingPerioderWrapper, StandardProsessPanelPropsTilbakekreving, VilkarsVurdertePerioderWrapper, DetaljerteFeilutbetalingsperioder,
} from '@fpsak-frontend/types';
import { createIntl } from '@fpsak-frontend/utils';
import { ReduxWrapper } from '@fpsak-frontend/form';

import TilbakekrevingForm from './components/TilbakekrevingForm';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface OwnProps {
  perioderForeldelse: FeilutbetalingPerioderWrapper;
  vilkarvurderingsperioder: DetaljerteFeilutbetalingsperioder;
  vilkarvurdering: VilkarsVurdertePerioderWrapper;
  navBrukerKjonn: string;
  alleMerknaderFraBeslutter: { [key: string] : { notAccepted?: boolean }};
  beregnBelop: (data: any) => Promise<any>;
}

const TilbakekrevingProsessIndex: FunctionComponent<OwnProps & StandardProsessPanelPropsTilbakekreving> = ({
  behandling,
  perioderForeldelse,
  vilkarvurderingsperioder,
  vilkarvurdering,
  submitCallback,
  isReadOnly,
  readOnlySubmitButton,
  navBrukerKjonn,
  alleMerknaderFraBeslutter,
  alleKodeverk,
  beregnBelop,
  formData,
  setFormData,
}) => (
  <RawIntlProvider value={intl}>
    <ReduxWrapper formName="TilbakekrevingProsessIndex" formData={formData} setFormData={setFormData}>
      <TilbakekrevingForm
        behandlingVersjon={behandling.versjon}
        behandlingUuid={behandling.uuid}
        perioderForeldelse={perioderForeldelse}
        perioder={vilkarvurderingsperioder.perioder}
        rettsgebyr={vilkarvurderingsperioder.rettsgebyr}
        vilkarvurdering={vilkarvurdering}
        submitCallback={submitCallback}
        readOnly={isReadOnly}
        readOnlySubmitButton={readOnlySubmitButton}
        navBrukerKjonn={navBrukerKjonn}
        alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
        alleKodeverk={alleKodeverk}
        beregnBelop={beregnBelop}
      />
    </ReduxWrapper>
  </RawIntlProvider>
);

export default TilbakekrevingProsessIndex;
