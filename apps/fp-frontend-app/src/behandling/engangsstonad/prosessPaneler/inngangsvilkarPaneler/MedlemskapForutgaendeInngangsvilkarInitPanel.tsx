import { use } from 'react';

import { useQuery } from '@tanstack/react-query';

import { AksjonspunktKode, AksjonspunktStatus, VilkarType } from '@navikt/fp-kodeverk';
import { PanelOverstyringProvider } from '@navikt/fp-utils';

import { useBehandlingApi } from '../../../../data/behandlingApi';
import { InngangsvilkarDefaultInitPanel } from '../../../felles/prosess/InngangsvilkarDefaultInitPanel';
import { OverstyringPanelDef } from '../../../felles/prosess/OverstyringPanelDef';
import { useStandardProsessPanelProps } from '../../../felles/prosess/useStandardProsessPanelProps';
import type { InngangsvilkarPanelInitProps } from '../../../felles/typer/inngangsvilkarPanelInitProps';
import { BehandlingDataContext } from '../../../felles/utils/behandlingDataContext';

const AKSJONSPUNKT_KODER = [
  AksjonspunktKode.VURDER_FORUTGÅENDE_MEDLEMSKAPSVILKÅR,
  AksjonspunktKode.OVERSTYR_MEDLEMSKAPSVILKAR_FORUTGAENDE,
];

const VILKAR_KODER = [VilkarType.MEDLEMSKAPSVILKARET_FORUTGAENDE];

export const MedlemskapForutgaendeInngangsvilkarInitPanel = (props: InngangsvilkarPanelInitProps) => {
  const standardPanelProps = useStandardProsessPanelProps(AKSJONSPUNKT_KODER, VILKAR_KODER);

  const { behandling, rettigheter } = use(BehandlingDataContext);

  const api = useBehandlingApi(behandling);

  const { data: medlemskap, isFetching } = useQuery(api.medlemskapOptions(behandling));

  const harMedlemskapsAksjonspunkt = standardPanelProps.aksjonspunkter.some(
    ap =>
      ap.definisjon === AksjonspunktKode.VURDER_FORUTGÅENDE_MEDLEMSKAPSVILKÅR &&
      ap.status !== AksjonspunktStatus.AVBRUTT,
  );
  const harÅpentMedlemskapAksjonspunkt = standardPanelProps.aksjonspunkter.some(
    ap =>
      ap.definisjon === AksjonspunktKode.VURDER_FORUTGÅENDE_MEDLEMSKAPSVILKÅR &&
      ap.status == AksjonspunktStatus.OPPRETTET,
  );

  return (
    <InngangsvilkarDefaultInitPanel
      {...props}
      standardPanelProps={standardPanelProps}
      behandlingVersjon={behandling.versjon}
      vilkarKoder={VILKAR_KODER}
      inngangsvilkarPanelKode="MEDLEMSKAP"
      hentInngangsvilkarPanelTekst=""
      renderPanel={({ erOverstyrt, toggleOverstyring }) => (
        <>
          {!harÅpentMedlemskapAksjonspunkt && !isFetching && (
            <PanelOverstyringProvider
              overstyringApKode={AksjonspunktKode.OVERSTYR_MEDLEMSKAPSVILKAR_FORUTGAENDE}
              kanOverstyreAccess={rettigheter.kanOverstyreAccess}
              overrideReadOnly={
                standardPanelProps.isReadOnly ||
                harMedlemskapsAksjonspunkt ||
                (props.harInngangsvilkarApentAksjonspunkt && !(standardPanelProps.isAksjonspunktOpen || erOverstyrt))
              }
              toggleOverstyring={toggleOverstyring}
            >
              <OverstyringPanelDef
                vilkar={standardPanelProps.vilkar}
                vilkarKoder={VILKAR_KODER}
                panelTekstKode="Inngangsvilkar.Medlemskapsvilkaret"
                medlemskap={medlemskap}
              />
            </PanelOverstyringProvider>
          )}
        </>
      )}
    />
  );
};
