import FaktaPanelInitProps from "../../felles/typer/faktaPanelInitProps";
import FaktaDefaultInitPanel from '../../felles/fakta/FaktaDefaultInitPanel';
import React from 'react';
import { FaktaPanelCode } from "@navikt/fp-konstanter";
import { useIntl } from 'react-intl';
import { BehandlingApiKeys } from '../../../data/behandlingContextApi';

const ENDEPUNKTER_PANEL_DATA = [BehandlingApiKeys.INNTEKTSMELDINGER];

export const InntektsmeldingerFaktaInitPanel = ({...props}: FaktaPanelInitProps) => (
  <FaktaDefaultInitPanel
    {...props}
    panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
    // aksjonspunktKoder={AKSJONSPUNKT_KODER}
    faktaPanelKode={FaktaPanelCode.INNTEKTSMELDINGER}
    faktaPanelMenyTekst={useIntl().formatMessage({ id: 'InntektsmeldingerInfoPanel.Title' })}
    skalPanelVisesIMeny={() => true}
    renderPanel={data => <InntektsmledingerFaktaInnhold {...data} />}
  />
);

const InntektsmledingerFaktaInnhold = ({ inntektsmeldinger }: any) => {
  console.log(inntektsmeldinger);
  return (
    <div>Heisann</div>
  )
}
