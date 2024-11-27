import React from 'react';
import { useIntl } from 'react-intl';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { ProsessStegCode } from '@navikt/fp-konstanter';
import { InnsynProsessIndex } from '@navikt/fp-prosess-innsyn';
import { Dokument, Fagsak, Innsyn } from '@navikt/fp-types';

import { BehandlingApiKeys } from '../../../data/behandlingContextApi';
import { ProsessDefaultInitPanel } from '../../felles/prosess/ProsessDefaultInitPanel';
import { ProsessPanelInitProps } from '../../felles/typer/prosessPanelInitProps';

const AKSJONSPUNKT_KODER = [AksjonspunktKode.VURDER_INNSYN];

const getEndepunkterPanelData = (saksnummer: string) => [
  { key: BehandlingApiKeys.INNSYN_DOKUMENTER, params: { saksnummer } },
  { key: BehandlingApiKeys.INNSYN },
];
type EndepunktPanelData = {
  innsynDokumenter?: Dokument[];
  innsyn: Innsyn;
};

interface Props {
  fagsak: Fagsak;
}

export const BehandleInnsynProsessStegInitPanel = ({ fagsak, ...props }: Props & ProsessPanelInitProps) => (
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
