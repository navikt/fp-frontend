import { use } from 'react';
import { useIntl } from 'react-intl';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useQuery } from '@tanstack/react-query';

import { FodselFaktaIndex } from '@navikt/fp-fakta-fodsel';
import { AksjonspunktKode, fodselsvilkarene } from '@navikt/fp-kodeverk';
import { FaktaPanelCode } from '@navikt/fp-konstanter';
import type { Dokument } from '@navikt/fp-types';

import { useBehandlingApi } from '../../../data/behandlingApi';
import { useFagsakApi } from '../../../data/fagsakApi';
import { BehandlingDataContext } from '../../felles/context/BehandlingDataContext';
import { FaktaDefaultInitPanel } from '../../felles/fakta/FaktaDefaultInitPanel';
import { useStandardFaktaPanelProps } from '../../felles/fakta/useStandardFaktaPanelProps';

const AKSJONSPUNKT_KODER = [AksjonspunktKode.SJEKK_TERMINBEKREFTELSE, AksjonspunktKode.SJEKK_MANGLENDE_FØDSEL];

export const FodselvilkaretFaktaInitPanel = () => {
  const intl = useIntl();

  const { behandling, fagsak } = use(BehandlingDataContext);

  const skalPanelVisesIMeny = (behandling.vilkår ?? []).some(v => fodselsvilkarene.some(fv => fv === v.vilkarType));

  const standardPanelProps = useStandardFaktaPanelProps(AKSJONSPUNKT_KODER);

  const api = useBehandlingApi(behandling);
  const fagsakApi = useFagsakApi();

  const { data: faktafødsel } = useQuery(api.faktaFødselOptions(behandling, skalPanelVisesIMeny));
  const { data: alleDokumenter = [] } = useQuery(
    fagsakApi.hentDokumenter(fagsak.saksnummer, behandling.uuid, behandling.versjon),
  );

  const terminbekreftelseDokument = finnTerminBekreftelse(alleDokumenter, fagsak.saksnummer);

  return (
    <FaktaDefaultInitPanel
      standardPanelProps={standardPanelProps}
      faktaPanelKode={FaktaPanelCode.FODSELSVILKARET}
      faktaPanelMenyTekst={intl.formatMessage({ id: 'FaktaInitPanel.Title.Fodsel' })}
      skalPanelVisesIMeny={skalPanelVisesIMeny}
    >
      {faktafødsel ? (
        <FodselFaktaIndex fødsel={faktafødsel} terminbekreftelseDokument={terminbekreftelseDokument} />
      ) : (
        <LoadingPanel />
      )}
    </FaktaDefaultInitPanel>
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
