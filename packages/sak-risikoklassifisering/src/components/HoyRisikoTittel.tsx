import React, { FunctionComponent } from 'react';
import { EkspanderbartpanelBase } from 'nav-frontend-ekspanderbartpanel';

import risikoIkon from '@fpsak-frontend/assets/images/avslaatt_hover.svg';
import { Risikoklassifisering, Aksjonspunkt, KodeverkMedNavn } from '@fpsak-frontend/types';
import { VurderFaresignalerAp } from '@fpsak-frontend/types-avklar-aksjonspunkter';

import HoyRisikoPanel from './HoyRisikoPanel';
import TittelMedDivider from './TittelMedDivider';

import styles from './hoyRisikoTittel.less';

interface OwnProps {
  risikoklassifisering?: Risikoklassifisering;
  aksjonspunkt?: Aksjonspunkt;
  readOnly: boolean;
  submitCallback: (data: VurderFaresignalerAp) => Promise<void>;
  isRiskPanelOpen: boolean;
  toggleRiskPanel: () => void;
  faresignalVurderinger: KodeverkMedNavn[];
}

/**
 * HoyRisikoTittel
 *
 * Presentasjonskomponent. Statisk visning av tittel i utvidbart panel dersom faresignaler er funnet.
 */
const HoyRisikoTittel: FunctionComponent<OwnProps> = ({
  risikoklassifisering,
  aksjonspunkt,
  readOnly,
  submitCallback,
  isRiskPanelOpen,
  toggleRiskPanel,
  faresignalVurderinger,
}) => (
  <EkspanderbartpanelBase
    className={styles.hoyRisikoPanelTittel}
    apen={isRiskPanelOpen}
    onClick={toggleRiskPanel}
    tittel={(
      <TittelMedDivider
        imageSrc={risikoIkon}
        tittel="Risikopanel.Tittel.Faresignaler"
      />
    )}
    border
  >
    <HoyRisikoPanel
      risikoklassifisering={risikoklassifisering}
      aksjonspunkt={aksjonspunkt}
      readOnly={readOnly}
      submitCallback={submitCallback}
      faresignalVurderinger={faresignalVurderinger}
    />
  </EkspanderbartpanelBase>
);

export default HoyRisikoTittel;
