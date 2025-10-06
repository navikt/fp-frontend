import { use } from 'react';
import { useIntl } from 'react-intl';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useQuery } from '@tanstack/react-query';

import { FodselFaktaIndex } from '@navikt/fp-fakta-fodsel';
import { FaktaPanelCode } from '@navikt/fp-konstanter';
import type { AksjonspunktKode, Dokument } from '@navikt/fp-types';
import { PanelOverstyringProvider } from '@navikt/fp-utils';

import { harLenke, useBehandlingApi } from '../../../data/behandlingApi';
import { useFagsakApi } from '../../../data/fagsakApi';
import { BehandlingDataContext } from '../../felles/context/BehandlingDataContext';
import { FaktaDefaultInitPanel } from '../../felles/fakta/FaktaDefaultInitPanel';
import { useStandardFaktaPanelProps } from '../../felles/fakta/useStandardFaktaPanelProps';

const OVERSTYRING_KODER: AksjonspunktKode[] = ['6019'];
const AKSJONSPUNKT_KODER: AksjonspunktKode[] = ['5001', '5027', '6019'];

export const FodselvilkaretFaktaInitPanel = () => {
  const intl = useIntl();

  const { behandling, fagsak, rettigheter } = use(BehandlingDataContext);

  const standardPanelProps = useStandardFaktaPanelProps(AKSJONSPUNKT_KODER, OVERSTYRING_KODER);

  const api = useBehandlingApi(behandling);
  const fagsakApi = useFagsakApi();

  const harOverstyrigAP = standardPanelProps.aksjonspunkterForPanel.some(a => a.definisjon === '6019');
  const { data: faktafødsel } = useQuery(api.faktaFødselOptions(behandling));
  const { data: alleDokumenter = [] } = useQuery(
    fagsakApi.hentDokumenter(fagsak.saksnummer, behandling.uuid, behandling.versjon),
  );

  const terminbekreftelseDokument = finnTerminBekreftelse(alleDokumenter, fagsak.saksnummer);
  return (
    <PanelOverstyringProvider
      overstyringApKode="6019"
      kanOverstyreAccess={rettigheter.kanOverstyreAccess}
      overrideReadOnly={standardPanelProps.isReadOnly}
      initialToggleState={harOverstyrigAP}
    >
      <FaktaDefaultInitPanel
        standardPanelProps={standardPanelProps}
        faktaPanelKode={FaktaPanelCode.FODSELSVILKARET}
        faktaPanelMenyTekst={intl.formatMessage({ id: 'FaktaInitPanel.Title.Fodsel' })}
        skalPanelVisesIMeny={harLenke(behandling, 'FAKTA_FØDSEL')}
      >
        {faktafødsel ? (
          <FodselFaktaIndex fødsel={faktafødsel} terminbekreftelseDokument={terminbekreftelseDokument} />
        ) : (
          <LoadingPanel />
        )}
      </FaktaDefaultInitPanel>
    </PanelOverstyringProvider>
  );
};

const finnTerminBekreftelse = (dokumentliste: Dokument[], saksnummer: string) => {
  const terminbekreftelseDokument = dokumentliste.find(dok => dok.tittel === 'Terminbekreftelse');
  return terminbekreftelseDokument
    ? {
        saksnummer,
        journalpostId: terminbekreftelseDokument.journalpostId,
        dokumentId: terminbekreftelseDokument.dokumentId,
        dokumentTittel: terminbekreftelseDokument.tittel ?? undefined,
      }
    : undefined;
};
