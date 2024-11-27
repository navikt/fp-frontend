import React from 'react';
import { useIntl } from 'react-intl';

import { OmsorgOgForeldreansvarFaktaIndex } from '@navikt/fp-fakta-omsorg-og-foreldreansvar';
import { AksjonspunktKode, hasAksjonspunkt } from '@navikt/fp-kodeverk';
import { FaktaPanelCode } from '@navikt/fp-konstanter';
import { FamilieHendelseSamling, InntektArbeidYtelse, Personoversikt, Soknad } from '@navikt/fp-types';

import { BehandlingApiKeys } from '../../../data/behandlingContextApi';
import { FaktaDefaultInitPanel } from '../../felles/fakta/FaktaDefaultInitPanel';
import { FaktaPanelInitProps } from '../../felles/typer/faktaPanelInitProps';

const AKSJONSPUNKT_KODER = [AksjonspunktKode.OMSORGSOVERTAKELSE, AksjonspunktKode.AVKLAR_VILKAR_FOR_FORELDREANSVAR];

const ENDEPUNKTER_PANEL_DATA = [
  BehandlingApiKeys.SOKNAD,
  BehandlingApiKeys.FAMILIEHENDELSE,
  BehandlingApiKeys.INNTEKT_ARBEID_YTELSE,
];
type EndepunktPanelData = {
  soknad: Soknad;
  familiehendelse: FamilieHendelseSamling;
  inntektArbeidYtelse: InntektArbeidYtelse;
};

interface Props {
  personoversikt: Personoversikt;
}

export const OmsorgvilkaretFaktaInitPanel = ({ personoversikt, ...props }: Props & FaktaPanelInitProps) => (
  <FaktaDefaultInitPanel<EndepunktPanelData>
    {...props}
    panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
    aksjonspunktKoder={AKSJONSPUNKT_KODER}
    faktaPanelKode={FaktaPanelCode.OMSORGSVILKARET}
    faktaPanelMenyTekst={useIntl().formatMessage({ id: 'OmsorgOgForeldreansvarInfoPanel.Omsorg' })}
    skalPanelVisesIMeny={() => AKSJONSPUNKT_KODER.some(kode => hasAksjonspunkt(kode, props.behandling.aksjonspunkt))}
    renderPanel={data => <OmsorgOgForeldreansvarFaktaIndex personoversikt={personoversikt} {...data} />}
  />
);
