import { useIntl } from 'react-intl';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useQuery } from '@tanstack/react-query';

import { FodselFaktaIndex } from '@navikt/fp-fakta-fodsel';
import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { FaktaPanelCode } from '@navikt/fp-konstanter';
import type { Dokument } from '@navikt/fp-types';
import { PanelOverstyringProvider } from '@navikt/fp-utils';

import { harLenke, useBehandlingApi } from '../../../data/behandlingApi';
import { useFagsakApi } from '../../../data/fagsakApi';
import { useBehandlingDataContext } from '../../felles/context/BehandlingDataContext';
import { FaktaDefaultInitPanel } from '../../felles/fakta/FaktaDefaultInitPanel';
import { useStandardFaktaPanelProps } from '../../felles/fakta/useStandardFaktaPanelProps';

const AKSJONSPUNKT_KODER = [
  AksjonspunktKode.SJEKK_TERMINBEKREFTELSE,
  AksjonspunktKode.SJEKK_MANGLENDE_FØDSEL,
  AksjonspunktKode.OVERSTYRING_AV_FAKTA_OM_FØDSEL,
];

export const FodselvilkaretFaktaInitPanel = () => {
  const intl = useIntl();

  const { behandling, fagsak, rettigheter } = useBehandlingDataContext();

  const standardPanelProps = useStandardFaktaPanelProps(AKSJONSPUNKT_KODER);

  const api = useBehandlingApi(behandling);
  const fagsakApi = useFagsakApi();

  const harOverstyrigAP = standardPanelProps.aksjonspunkterForPanel.some(
    a => a.definisjon === AksjonspunktKode.OVERSTYRING_AV_FAKTA_OM_FØDSEL,
  );
  const { data: faktafødsel } = useQuery(api.faktaFødselOptions(behandling));
  const { data: alleDokumenter = [] } = useQuery(
    fagsakApi.hentDokumenter(fagsak.saksnummer, behandling.uuid, behandling.versjon),
  );

  const terminbekreftelseDokument = finnTerminBekreftelse(alleDokumenter, fagsak.saksnummer);
  return (
    <PanelOverstyringProvider
      overstyringApKode={AksjonspunktKode.OVERSTYRING_AV_FAKTA_OM_FØDSEL}
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
