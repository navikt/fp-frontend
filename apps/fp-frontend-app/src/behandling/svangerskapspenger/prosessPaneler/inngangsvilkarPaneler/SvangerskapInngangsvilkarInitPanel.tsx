import React from 'react';
import { useIntl } from 'react-intl';

import { AksjonspunktKode,VilkarType } from '@navikt/fp-kodeverk';
import { SvangerskapVilkarProsessIndex } from '@navikt/fp-prosess-vilkar-svangerskap';
import { FodselOgTilrettelegging } from '@navikt/fp-types';

import { BehandlingApiKeys } from '../../../../data/behandlingContextApi';
import { InngangsvilkarDefaultInitPanel } from '../../../felles/prosess/InngangsvilkarDefaultInitPanel';
import { InngangsvilkarPanelInitProps } from '../../../felles/typer/inngangsvilkarPanelInitProps';

const AKSJONSPUNKT_KODER = [AksjonspunktKode.SVANGERSKAPSVILKARET];

const VILKAR_KODER = [VilkarType.SVANGERSKAPVILKARET];

const ENDEPUNKTER_PANEL_DATA = [BehandlingApiKeys.SVANGERSKAPSPENGER_TILRETTELEGGING];

type EndepunktPanelData = {
  svangerskapspengerTilrettelegging: FodselOgTilrettelegging;
};

interface Props {
  behandlingVersjon: number;
}

export const SvangerskapInngangsvilkarInitPanel = ({
  behandlingVersjon,
  ...props
}: Props & InngangsvilkarPanelInitProps) => {
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
      renderPanel={data => <SvangerskapVilkarProsessIndex {...data} />}
    />
  );
};
