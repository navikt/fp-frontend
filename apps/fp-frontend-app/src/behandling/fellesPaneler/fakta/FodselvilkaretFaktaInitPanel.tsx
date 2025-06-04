import { use } from 'react';
import { useIntl } from 'react-intl';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useQuery } from '@tanstack/react-query';

import { FodselFaktaIndex } from '@navikt/fp-fakta-fodsel';
import { AksjonspunktKode, fodselsvilkarene } from '@navikt/fp-kodeverk';
import { FaktaPanelCode } from '@navikt/fp-konstanter';

import { useBehandlingApi } from '../../../data/behandlingApi';
import { FaktaDefaultInitPanel } from '../../felles/fakta/FaktaDefaultInitPanel';
import { useStandardFaktaPanelProps } from '../../felles/fakta/useStandardFaktaPanelProps';
import { BehandlingDataContext } from '../../felles/utils/behandlingDataContext';

const AKSJONSPUNKT_KODER = [AksjonspunktKode.TERMINBEKREFTELSE, AksjonspunktKode.SJEKK_MANGLENDE_FODSEL];

export const FodselvilkaretFaktaInitPanel = () => {
  const intl = useIntl();

  const { behandling } = use(BehandlingDataContext);

  const skalPanelVisesIMeny = behandling.vilkår.some(v => fodselsvilkarene.some(fv => fv === v.vilkarType));

  const standardPanelProps = useStandardFaktaPanelProps(AKSJONSPUNKT_KODER);

  const api = useBehandlingApi(behandling);

  // TODO: slett når vi er ferdig, den er fin til å følge med på forskjeller mellom kallene
  // @ts-expect-error fjernes når fakta-fødsel er ferdig
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { data: familiehendelse } = useQuery(api.familiehendelseOptions(behandling, skalPanelVisesIMeny));
  const { data: faktafødsel } = useQuery(api.faktaFødselOptions(behandling, skalPanelVisesIMeny));

  return (
    <FaktaDefaultInitPanel
      standardPanelProps={standardPanelProps}
      faktaPanelKode={FaktaPanelCode.FODSELSVILKARET}
      faktaPanelMenyTekst={intl.formatMessage({ id: 'FaktaInitPanel.Title.Fodsel' })}
      skalPanelVisesIMeny={skalPanelVisesIMeny}
    >
      {faktafødsel ? (
        <FodselFaktaIndex fødsel={faktafødsel} submittable={standardPanelProps.submittable} />
      ) : (
        <LoadingPanel />
      )}
    </FaktaDefaultInitPanel>
  );
};
