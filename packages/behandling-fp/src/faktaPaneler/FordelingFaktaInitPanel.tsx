import React, {
  FunctionComponent,
} from 'react';
import { createIntl } from '@navikt/ft-utils';

import { FaktaFordelBeregningAksjonspunktCode } from '@navikt/ft-fakta-fordel-beregningsgrunnlag';
import { Beregningsgrunnlag } from '@navikt/ft-types';
import { FaktaPanelCode } from '@fpsak-frontend/konstanter';
import { Aksjonspunkt, ArbeidsgiverOpplysningerPerId } from '@fpsak-frontend/types';
import { FaktaPanelInitProps, FaktaDefaultInitPanel, DynamicLoader } from '@fpsak-frontend/behandling-felles';

import messages from '../../i18n/nb_NO.json';
import { FpBehandlingApiKeys, requestFpApi } from '../data/fpBehandlingApi';

// TODO Denne burde ligga sånn til at den kun blir importert når denne pakka dynamisk blir importert
import '@navikt/ft-fakta-fordel-beregningsgrunnlag/dist/style.css';

const ProsessFordeling = React.lazy(() => import('@navikt/ft-fakta-fordel-beregningsgrunnlag'));
// eslint-disable-next-line import/no-unresolved
const ProsessFordelingMF = React.lazy(() => import('ft_fakta_fordel_beregningsgrunnlag/FaktaFordelBeregningsgrunnlag')) as typeof ProsessFordeling;

class FordelingPanel extends DynamicLoader<React.ComponentProps<typeof ProsessFordeling>> {
  render() {
    return super.doRender(ProsessFordeling, ProsessFordelingMF);
  }
}

const intl = createIntl(messages);

const AKSJONSPUNKT_KODER = [FaktaFordelBeregningAksjonspunktCode.FORDEL_BEREGNINGSGRUNNLAG, FaktaFordelBeregningAksjonspunktCode.VURDER_REFUSJON_BERGRUNN];

const ENDEPUNKTER_INIT_DATA = [FpBehandlingApiKeys.AKSJONSPUNKTER];
type EndepunktInitData = {
  aksjonspunkter: Aksjonspunkt[];
}

const ENDEPUNKTER_PANEL_DATA = [FpBehandlingApiKeys.BEREGNINGSGRUNNLAG];
type EndepunktPanelData = {
  beregningsgrunnlag: Beregningsgrunnlag;
}

interface OwnProps {
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

/**
 * FordelingFaktaInitPanel
 */
const FordelingFaktaInitPanel: FunctionComponent<OwnProps & FaktaPanelInitProps> = ({
  arbeidsgiverOpplysningerPerId,
  ...props
}) => (
  <FaktaDefaultInitPanel<EndepunktInitData, EndepunktPanelData>
    {...props}
    requestApi={requestFpApi}
    initEndepunkter={ENDEPUNKTER_INIT_DATA}
    panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
    aksjonspunktKoder={AKSJONSPUNKT_KODER}
    faktaPanelKode={FaktaPanelCode.FORDELING}
    faktaPanelMenyTekst={intl.formatMessage({ id: 'FordelBeregningsgrunnlag.Title' })}
    skalPanelVisesIMeny={(initData) => !!initData.aksjonspunkter
      && !!initData.aksjonspunkter.some((ap) => AKSJONSPUNKT_KODER.some((kode) => kode === ap.definisjon))}
    renderPanel={(data) => (
      <FordelingPanel
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
        {...data}
      />
    )}
  />
);

export default FordelingFaktaInitPanel;
