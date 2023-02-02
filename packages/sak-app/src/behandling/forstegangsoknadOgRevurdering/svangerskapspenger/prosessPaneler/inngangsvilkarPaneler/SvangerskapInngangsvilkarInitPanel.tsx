import React, {
  FunctionComponent,
} from 'react';
import { useIntl } from 'react-intl';

import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { VilkarType, AksjonspunktCode } from '@navikt/fp-kodeverk';
import SvangerskapVilkarProsessIndex from '@navikt/fp-prosess-vilkar-svangerskap';
import { FodselOgTilrettelegging } from '@navikt/fp-types';

import InngangsvilkarPanelInitProps from '../../../../felles/typer/inngangsvilkarPanelInitProps';
import InngangsvilkarDefaultInitPanel from '../../../../felles/prosess/InngangsvilkarDefaultInitPanel';

import { SvpBehandlingApiKeys } from '../../data/svpBehandlingApi';

const AKSJONSPUNKT_KODER = [AksjonspunktCode.SVANGERSKAPSVILKARET];

const VILKAR_KODER = [VilkarType.SVANGERSKAPVILKARET];

const ENDEPUNKTER_PANEL_DATA = [SvpBehandlingApiKeys.SVANGERSKAPSPENGER_TILRETTELEGGING];

type EndepunktPanelData = {
  svangerskapspengerTilrettelegging: FodselOgTilrettelegging;
}

interface OwnProps {
  behandlingVersjon?: number;
}

const SvangerskapInngangsvilkarInitPanel: FunctionComponent<OwnProps & InngangsvilkarPanelInitProps> = ({
  behandlingVersjon,
  ...props
}) => {
  const intl = useIntl();
  return (
    <InngangsvilkarDefaultInitPanel<EndepunktPanelData>
      {...props}
      behandlingVersjon={behandlingVersjon}
      panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
      aksjonspunktKoder={AKSJONSPUNKT_KODER}
      vilkarKoder={VILKAR_KODER}
      inngangsvilkarPanelKode="SVANGERSKAP"
      hentInngangsvilkarPanelTekst={() => intl.formatMessage({ id: 'SvangerskapVilkarForm.FyllerVilkår' })}
      renderPanel={(data) => (
        <>
          <SvangerskapVilkarProsessIndex
            {...data}
          />
          <VerticalSpacer thirtyTwoPx />
        </>
      )}
    />
  );
};

export default SvangerskapInngangsvilkarInitPanel;
