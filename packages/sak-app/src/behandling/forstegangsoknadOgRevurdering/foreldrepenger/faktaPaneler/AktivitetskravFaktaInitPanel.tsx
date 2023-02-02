import React, {
  FunctionComponent,
} from 'react';
import { useIntl } from 'react-intl';

import { AksjonspunktCode } from '@navikt/fp-kodeverk';
import AktivitetskravFaktaIndex from '@navikt/fp-fakta-aktivitetskrav';
import { UttakKontrollerAktivitetskrav } from '@navikt/fp-types';

import { FaktaPanelCode } from '@navikt/fp-konstanter';

import FaktaPanelInitProps from '../../../felles/typer/faktaPanelInitProps';
import FaktaDefaultInitPanel from '../../../felles/fakta/FaktaDefaultInitPanel';
import { FpBehandlingApiKeys } from '../data/fpBehandlingApi';

const AKSJONSPUNKT_KODER = [AksjonspunktCode.KONTROLLER_AKTIVITETSKRAV];

const ENDEPUNKTER_PANEL_DATA = [FpBehandlingApiKeys.UTTAK_KONTROLLER_AKTIVITETSKRAV];
type EndepunktPanelData = {
  uttakKontrollerAktivitetskrav: UttakKontrollerAktivitetskrav[];
}

/**
 * AktivitetskravFaktaInitPanel
 */
const AktivitetskravFaktaInitPanel: FunctionComponent<FaktaPanelInitProps> = (props) => (
  <FaktaDefaultInitPanel<EndepunktPanelData>
    {...props}
    panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
    aksjonspunktKoder={AKSJONSPUNKT_KODER}
    faktaPanelKode={FaktaPanelCode.AKTIVITETSKRAV}
    faktaPanelMenyTekst={useIntl().formatMessage({ id: 'AktivitetskravInfoPanel.FaktaAktivitetskrav' })}
      // eslint-disable-next-line react/destructuring-assignment
    skalPanelVisesIMeny={() => props.requestApi.hasPath(FpBehandlingApiKeys.UTTAK_KONTROLLER_AKTIVITETSKRAV.name)}
    renderPanel={(data) => (
      <AktivitetskravFaktaIndex
        {...data}
      />
    )}
  />
);

export default AktivitetskravFaktaInitPanel;
