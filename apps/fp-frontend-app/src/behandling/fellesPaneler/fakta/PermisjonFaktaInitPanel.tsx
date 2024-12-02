import React from 'react';
import { useIntl } from 'react-intl';

import { PermisjonFaktaIndex } from '@navikt/fp-fakta-permisjon';
import { AksjonspunktKode, hasAksjonspunkt } from '@navikt/fp-kodeverk';
import { FaktaPanelCode } from '@navikt/fp-konstanter';
import { ArbeidOgInntektsmelding, ArbeidsgiverOpplysningerPerId } from '@navikt/fp-types';

import { BehandlingApiKeys } from '../../../data/behandlingContextApi';
import { FaktaDefaultInitPanel } from '../../felles/fakta/FaktaDefaultInitPanel';
import { FaktaPanelInitProps } from '../../felles/typer/faktaPanelInitProps';

const AKSJONSPUNKT_KODER = [AksjonspunktKode.VURDER_ARBEIDSFORHOLD_PERMISJON];

const ENDEPUNKTER_PANEL_DATA = [BehandlingApiKeys.ARBEID_OG_INNTEKT];

type EndepunktPanelData = {
  arbeidOgInntekt: ArbeidOgInntektsmelding;
};

interface Props {
  saksnummer: string;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

export const PermisjonFaktaInitPanel = ({
  saksnummer,
  arbeidsgiverOpplysningerPerId,
  ...props
}: Props & FaktaPanelInitProps) => (
  <FaktaDefaultInitPanel<EndepunktPanelData>
    {...props}
    panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
    aksjonspunktKoder={AKSJONSPUNKT_KODER}
    faktaPanelKode={FaktaPanelCode.PERMISJON}
    faktaPanelMenyTekst={useIntl().formatMessage({ id: 'PermisjonFaktaInitPanel.Title' })}
    skalPanelVisesIMeny={() => AKSJONSPUNKT_KODER.some(kode => hasAksjonspunkt(kode, props.behandling.aksjonspunkt))}
    renderPanel={data => (
      <PermisjonFaktaIndex
        saksnummer={saksnummer}
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
        {...data}
      />
    )}
  />
);
