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

const AKSJONSPUNKT_KODER = [AksjonspunktKode.VURDER_MEDLEMSKAPSVILKÅRET, AksjonspunktKode.OVERSTYR_MEDLEMSKAPSVILKAR];

const VILKAR_KODER = [VilkarType.MEDLEMSKAPSVILKARET];

export const MedlemskapInngangsvilkarInitPanel = (props: InngangsvilkarPanelInitProps) => {
  const standardPanelProps = useStandardProsessPanelProps(AKSJONSPUNKT_KODER, VILKAR_KODER);

  const { behandling, rettigheter } = use(BehandlingDataContext);

  const api = useBehandlingApi(standardPanelProps.behandling);

  const { data: medlemskap, isFetching } = useQuery(api.medlemskapOptions(standardPanelProps.behandling));

  const harMedlemskapsAksjonspunkt = standardPanelProps.aksjonspunkter.some(
    ap => ap.definisjon === AksjonspunktKode.VURDER_MEDLEMSKAPSVILKÅRET && ap.status !== AksjonspunktStatus.AVBRUTT,
  );
  const harÅpentMedlemskapAksjonspunkt = standardPanelProps.aksjonspunkter.some(
    ap => ap.definisjon === AksjonspunktKode.VURDER_MEDLEMSKAPSVILKÅRET && ap.status == AksjonspunktStatus.OPPRETTET,
  );

  return (
    <InngangsvilkarDefaultInitPanel
      {...props}
      behandlingVersjon={behandling.versjon}
      standardPanelProps={standardPanelProps}
      vilkarKoder={VILKAR_KODER}
      inngangsvilkarPanelKode="MEDLEMSKAP"
      hentInngangsvilkarPanelTekst=""
      renderPanel={({ skalVises, erOverstyrt, toggleOverstyring }) => (
        <>
          {!harÅpentMedlemskapAksjonspunkt && !isFetching && (
            <PanelOverstyringProvider
              overstyringApKode={AksjonspunktKode.OVERSTYR_MEDLEMSKAPSVILKAR}
              kanOverstyreAccess={rettigheter.kanOverstyreAccess}
              overrideReadOnly={
                standardPanelProps.isReadOnly ||
                harMedlemskapsAksjonspunkt ||
                (props.harInngangsvilkarApentAksjonspunkt && !(standardPanelProps.isAksjonspunktOpen || erOverstyrt))
              }
              toggleOverstyring={toggleOverstyring}
            >
              {skalVises ? (
                <OverstyringPanelDef
                  vilkar={standardPanelProps.vilkar}
                  vilkarKoder={VILKAR_KODER}
                  panelTekstKode="Inngangsvilkar.Medlemskapsvilkaret"
                  medlemskap={medlemskap}
                />
              ) : null}
            </PanelOverstyringProvider>
          )}
        </>
      )}
    />
  );
};
