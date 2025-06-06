import { use } from 'react';
import { useIntl } from 'react-intl';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useQuery } from '@tanstack/react-query';

import { FodselFaktaIndex } from '@navikt/fp-fakta-fodsel';
import { AksjonspunktKode, fodselsvilkarene } from '@navikt/fp-kodeverk';
import { FaktaPanelCode } from '@navikt/fp-konstanter';

import { useBehandlingApi } from '../../../data/behandlingApi';
import { useFagsakApi } from '../../../data/fagsakApi';
import { FaktaDefaultInitPanel } from '../../felles/fakta/FaktaDefaultInitPanel';
import { useStandardFaktaPanelProps } from '../../felles/fakta/useStandardFaktaPanelProps';
import { BehandlingDataContext } from '../../felles/utils/behandlingDataContext';

const AKSJONSPUNKT_KODER = [AksjonspunktKode.TERMINBEKREFTELSE, AksjonspunktKode.SJEKK_MANGLENDE_FODSEL];

export const FodselvilkaretFaktaInitPanel = () => {
  const intl = useIntl();

  const { behandling, fagsak } = use(BehandlingDataContext);

  const skalPanelVisesIMeny = behandling.vilkår.some(v => fodselsvilkarene.some(fv => fv === v.vilkarType));

  const standardPanelProps = useStandardFaktaPanelProps(AKSJONSPUNKT_KODER);

  const api = useBehandlingApi(behandling);
  const fagsakApi = useFagsakApi();

  const { data: faktafødsel } = useQuery(api.faktaFødselOptions(behandling, skalPanelVisesIMeny));
  const { data: alleDokumenter = [] } = useQuery(
    fagsakApi.hentDokumenter(fagsak.saksnummer, behandling.uuid, behandling.versjon),
  );

  const terminbekreftelseDokument = alleDokumenter.find(dok => dok.tittel === 'Terminbekreftelse');
  const terminbekreftelseDokumentReferanse = terminbekreftelseDokument
    ? {
        saksnummer: fagsak.saksnummer,
        journalpostId: terminbekreftelseDokument.journalpostId,
        dokumentId: terminbekreftelseDokument.dokumentId,
        dokumentTittel: terminbekreftelseDokument.tittel,
      }
    : undefined;
  return (
    <FaktaDefaultInitPanel
      standardPanelProps={standardPanelProps}
      faktaPanelKode={FaktaPanelCode.FODSELSVILKARET}
      faktaPanelMenyTekst={intl.formatMessage({ id: 'FaktaInitPanel.Title.Fodsel' })}
      skalPanelVisesIMeny={skalPanelVisesIMeny}
    >
      {faktafødsel ? (
        <FodselFaktaIndex
          fødsel={faktafødsel}
          terminbekreftelseDokumentReferanse={terminbekreftelseDokumentReferanse}
          submittable={standardPanelProps.submittable}
        />
      ) : (
        <LoadingPanel />
      )}
    </FaktaDefaultInitPanel>
  );
};
