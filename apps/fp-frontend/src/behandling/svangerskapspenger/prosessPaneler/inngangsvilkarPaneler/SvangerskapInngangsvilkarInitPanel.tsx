import { useIntl } from 'react-intl';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useQuery } from '@tanstack/react-query';

import { SvangerskapVilkarProsessIndex } from '@navikt/fp-prosess-vilkar-svangerskap';
import type { AksjonspunktKode, VilkårType } from '@navikt/fp-types';

import { useBehandlingApi } from '../../../../data/behandlingApi';
import { InngangsvilkarDefaultInitPanel } from '../../../felles/prosess/InngangsvilkarDefaultInitPanel';
import { useStandardProsessPanelProps } from '../../../felles/prosess/useStandardProsessPanelProps';

const AKSJONSPUNKT_KODER: AksjonspunktKode[] = ['5092'];

const VILKAR_KODER: VilkårType[] = ['SVP_VK_1'];

export const SvangerskapInngangsvilkarInitPanel = () => {
  const intl = useIntl();
  const standardPanelProps = useStandardProsessPanelProps(AKSJONSPUNKT_KODER, VILKAR_KODER);

  const api = useBehandlingApi(standardPanelProps.behandling);

  const { data: svangerskapspengerTilrettelegging } = useQuery(
    api.svp.svangerskapspengerTilretteleggingOptions(standardPanelProps.behandling),
  );

  return (
    <InngangsvilkarDefaultInitPanel
      vilkårKoder={VILKAR_KODER}
      standardPanelProps={standardPanelProps}
      inngangsvilkårPanelKode="SVANGERSKAP"
      hentInngangsvilkårPanelTekst={intl.formatMessage({ id: 'SvangerskapVilkarForm.FyllerVilkår' })}
    >
      <>
        {svangerskapspengerTilrettelegging && (
          <SvangerskapVilkarProsessIndex
            svangerskapspengerTilrettelegging={svangerskapspengerTilrettelegging}
            status={standardPanelProps.status}
          />
        )}
        {!svangerskapspengerTilrettelegging && <LoadingPanel />}
      </>
    </InngangsvilkarDefaultInitPanel>
  );
};
