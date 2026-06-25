import { useIntl } from 'react-intl';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useQuery } from '@tanstack/react-query';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { SvangerskapVilkarProsessIndex } from '@navikt/fp-prosess-vilkar-svangerskap';
import type { VilkårType } from '@navikt/fp-types';

import { getBehandlingApi } from '../../../../data/behandlingApi';
import { InngangsvilkarDefaultInitPanel } from '../../../felles/prosess/InngangsvilkarDefaultInitPanel';
import { useStandardProsessPanelProps } from '../../../felles/prosess/useStandardProsessPanelProps';

const AKSJONSPUNKT_KODER = [AksjonspunktKode.MANUELL_VURDERING_AV_SVANGERSKAPSPENGERVILKÅRET];

const VILKAR_KODER = ['SVP_VK_1'] satisfies VilkårType[];

export const SvangerskapInngangsvilkarInitPanel = () => {
  const intl = useIntl();
  const standardPanelProps = useStandardProsessPanelProps(AKSJONSPUNKT_KODER, VILKAR_KODER);

  // Svangerskapspengervilkåret har ingen overstyrings-aksjonspunkt, kun manuell vurdering (5092).
  // Når vilkåret er automatisk avgjort finnes ikke 5092-aksjonspunktet, og panelet må være read-only
  // slik at en innsending ikke feilaktig rutes til overstyr-endepunktet (gir ugyldig type id 5092).
  const harAksjonspunkt = standardPanelProps.aksjonspunkterForPanel.length > 0;
  const panelProps = {
    ...standardPanelProps,
    isReadOnly: standardPanelProps.isReadOnly || !harAksjonspunkt,
  };

  const api = getBehandlingApi(panelProps.behandling);

  const { data: svangerskapspengerTilrettelegging } = useQuery(
    api.svp.svangerskapspengerTilretteleggingOptions(panelProps.behandling),
  );

  return (
    <InngangsvilkarDefaultInitPanel
      vilkårKoder={VILKAR_KODER}
      standardPanelProps={panelProps}
      inngangsvilkårPanelKode="SVANGERSKAP"
      hentInngangsvilkårPanelTekst={intl.formatMessage({ id: 'SvangerskapVilkarForm.FyllerVilkår' })}
    >
      <>
        {svangerskapspengerTilrettelegging && (
          <SvangerskapVilkarProsessIndex
            svangerskapspengerTilrettelegging={svangerskapspengerTilrettelegging}
            status={panelProps.status}
          />
        )}
        {!svangerskapspengerTilrettelegging && <LoadingPanel />}
      </>
    </InngangsvilkarDefaultInitPanel>
  );
};
