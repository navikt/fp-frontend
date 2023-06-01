import React, { FunctionComponent } from 'react';
import { useIntl } from 'react-intl';
import { Dokument, Fagsak } from '@navikt/ft-types';

import { AksjonspunktCode } from '@navikt/fp-kodeverk';
import { InnsynProsessIndex } from '@navikt/fp-prosess-innsyn';
import { ProsessStegCode } from '@navikt/fp-konstanter';
import { Innsyn } from '@navikt/fp-types';

import ProsessDefaultInitPanel from '../../felles/prosess/ProsessDefaultInitPanel';
import ProsessPanelInitProps from '../../felles/typer/prosessPanelInitProps';
import { BehandlingApiKeys } from '../../../data/behandlingContextApi';

const AKSJONSPUNKT_KODER = [AksjonspunktCode.VURDER_INNSYN];

const getEndepunkterPanelData = (saksnummer: string) => [
  { key: BehandlingApiKeys.INNSYN_DOKUMENTER, params: { saksnummer } },
  { key: BehandlingApiKeys.INNSYN },
];
type EndepunktPanelData = {
  innsynDokumenter?: Dokument[];
  innsyn: Innsyn;
};

interface OwnProps {
  fagsak: Fagsak;
}

const BehandleInnsynProsessStegInitPanel: FunctionComponent<OwnProps & ProsessPanelInitProps> = ({
  fagsak,
  ...props
}) => (
  <ProsessDefaultInitPanel<EndepunktPanelData>
    {...props}
    panelEndepunkter={getEndepunkterPanelData(fagsak.saksnummer)}
    aksjonspunktKoder={AKSJONSPUNKT_KODER}
    prosessPanelKode={ProsessStegCode.BEHANDLE_INNSYN}
    prosessPanelMenyTekst={useIntl().formatMessage({ id: 'Behandlingspunkt.Innsyn' })}
    skalPanelVisesIMeny={() => true}
    renderPanel={data => (
      <InnsynProsessIndex saksnummer={fagsak.saksnummer} alleDokumenter={data.innsynDokumenter} {...data} />
    )}
  />
);

export default BehandleInnsynProsessStegInitPanel;
