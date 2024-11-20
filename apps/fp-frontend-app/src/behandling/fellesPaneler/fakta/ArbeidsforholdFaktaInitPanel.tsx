import React from 'react';
import { useIntl } from 'react-intl';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { ArbeidsforholdFaktaIndex } from '@navikt/fp-fakta-arbeidsforhold';
import { FaktaPanelCode } from '@navikt/fp-konstanter';
import { ArbeidOgInntektsmelding, ArbeidsgiverOpplysningerPerId } from '@navikt/fp-types';

import { FaktaPanelInitProps } from '../../felles/typer/faktaPanelInitProps';
import { FaktaDefaultInitPanel } from '../../felles/fakta/FaktaDefaultInitPanel';
import { BehandlingApiKeys } from '../../../data/behandlingContextApi';

const AKSJONSPUNKT_KODER = [AksjonspunktKode.AVKLAR_ARBEIDSFORHOLD];

const ENDEPUNKTER_PANEL_DATA = [BehandlingApiKeys.ARBEID_OG_INNTEKT];
type EndepunktPanelData = {
  arbeidOgInntekt: ArbeidOgInntektsmelding;
};

interface Props {
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

/**
 * ArbeidsforholdFaktaInitPanel
 *
 * Dette faktapanelet skal alltid vises
 */
export const ArbeidsforholdFaktaInitPanel = ({
  arbeidsgiverOpplysningerPerId,
  ...props
}: Props & FaktaPanelInitProps) => (
  <FaktaDefaultInitPanel<EndepunktPanelData>
    {...props}
    panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
    aksjonspunktKoder={AKSJONSPUNKT_KODER}
    faktaPanelKode={FaktaPanelCode.ARBEIDSFORHOLD}
    faktaPanelMenyTekst={useIntl().formatMessage({ id: 'ArbeidsforholdInfoPanel.Title' })}
    skalPanelVisesIMeny={() =>
      props?.behandling?.aksjonspunkt?.some(ap => AKSJONSPUNKT_KODER.some(kode => kode === ap.definisjon))
    }
    renderPanel={data => (
      <ArbeidsforholdFaktaIndex arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId} {...data} />
    )}
  />
);
