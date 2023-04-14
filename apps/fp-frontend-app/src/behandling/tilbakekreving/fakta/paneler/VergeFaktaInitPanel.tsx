import React, { FunctionComponent, useMemo, useCallback } from 'react';

import { Aksjonspunkt } from '@navikt/ft-types';
import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { RestApiState } from '@navikt/fp-rest-api-hooks';
import { FaktaPanelCode } from '@navikt/fp-konstanter';
import { VergeFaktaIndex } from '@navikt/fp-fakta-verge';
import { AlleKodeverk, Behandling } from '@navikt/fp-types';
import { AksjonspunktCode, aksjonspunktStatus } from '@navikt/fp-kodeverk';

import { restApiTilbakekrevingHooks } from '../../data/tilbakekrevingBehandlingApi';
import getAlleMerknaderFraBeslutter from '../../felles/util/getAlleMerknaderFraBeslutter';
import { BehandlingFellesApiKeys } from '../../../felles/data/behandlingFellesApi';

interface OwnProps {
  behandling: Behandling;
  erReadOnlyFn: (aksjonspunkter: Aksjonspunkt[]) => boolean;
  fpsakKodeverk: AlleKodeverk;
  submitCallback: (aksjonspunktData: any) => Promise<void>;
  formData: any;
  setFormData: (data: any) => void;
}

const VergeFaktaInitPanel: FunctionComponent<OwnProps> = ({
  behandling,
  erReadOnlyFn,
  fpsakKodeverk,
  submitCallback,
  formData,
  setFormData,
}) => {
  const aksjonspunkter = behandling.aksjonspunkt || [];

  const aksjonspunkterForVergeFakta = useMemo(
    () => aksjonspunkter.filter(ap => AksjonspunktCode.AVKLAR_VERGE === ap.definisjon),
    [aksjonspunkter],
  );

  const alleMerknaderFraBeslutter = useMemo(
    () => getAlleMerknaderFraBeslutter(behandling, aksjonspunkterForVergeFakta),
    [behandling, aksjonspunkterForVergeFakta],
  );
  const readOnly = useMemo(() => erReadOnlyFn(aksjonspunkterForVergeFakta), [aksjonspunkterForVergeFakta]);

  const setFormDataVerge = useCallback(
    (data: any) =>
      setFormData(oldData => ({
        ...oldData,
        [FaktaPanelCode.VERGE]: data,
      })),
    [setFormData],
  );

  const { data: verge, state } = restApiTilbakekrevingHooks.useRestApi(BehandlingFellesApiKeys.VERGE);

  if (state !== RestApiState.SUCCESS) {
    return <LoadingPanel />;
  }

  return (
    <VergeFaktaIndex
      behandling={behandling}
      verge={verge}
      aksjonspunkter={aksjonspunkter}
      alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
      alleKodeverk={fpsakKodeverk}
      submitCallback={submitCallback}
      readOnly={readOnly}
      harApneAksjonspunkter={aksjonspunkterForVergeFakta.some(
        ap => ap.status === aksjonspunktStatus.OPPRETTET && ap.kanLoses,
      )}
      submittable={
        !aksjonspunkterForVergeFakta.some(ap => ap.status === aksjonspunktStatus.OPPRETTET) ||
        aksjonspunkter.some(ap => ap.kanLoses)
      }
      formData={formData[FaktaPanelCode.VERGE]}
      setFormData={setFormDataVerge}
    />
  );
};

export default VergeFaktaInitPanel;
