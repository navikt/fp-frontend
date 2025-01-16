import { useQuery } from '@tanstack/react-query';

import { AksjonspunktKode, AksjonspunktStatus, VilkarType } from '@navikt/fp-kodeverk';
import { AksessRettigheter } from '@navikt/fp-types';

import { useBehandlingApi } from '../../../../data/behandlingApi';
import { InngangsvilkarDefaultInitPanel } from '../../../felles/prosess/InngangsvilkarDefaultInitPanel';
import { OverstyringPanelDef } from '../../../felles/prosess/OverstyringPanelDef';
import { useStandardProsessPanelProps } from '../../../felles/prosess/useStandardProsessPanelProps';
import { InngangsvilkarPanelInitProps } from '../../../felles/typer/inngangsvilkarPanelInitProps';

const AKSJONSPUNKT_KODER = [AksjonspunktKode.VURDER_MEDLEMSKAPSVILKÅRET, AksjonspunktKode.OVERSTYR_MEDLEMSKAPSVILKAR];

const VILKAR_KODER = [VilkarType.MEDLEMSKAPSVILKARET];

interface Props {
  behandlingVersjon: number;
  rettigheter: AksessRettigheter;
}

export const MedlemskapInngangsvilkarInitPanel = ({
  behandlingVersjon,
  rettigheter,
  ...props
}: Props & InngangsvilkarPanelInitProps) => {
  const standardPanelProps = useStandardProsessPanelProps(AKSJONSPUNKT_KODER, VILKAR_KODER);

  const api = useBehandlingApi(standardPanelProps.behandling);

  const { data: medlemskap, isSuccess } = useQuery(api.medlemskapOptions(standardPanelProps.behandling));

  const harMedlemskapsAksjonspunkt = standardPanelProps.aksjonspunkter.some(
    ap => ap.definisjon === AksjonspunktKode.VURDER_MEDLEMSKAPSVILKÅRET && ap.status !== AksjonspunktStatus.AVBRUTT,
  );
  const harÅpentMedlemskapAksjonspunkt = standardPanelProps.aksjonspunkter.some(
    ap => ap.definisjon === AksjonspunktKode.VURDER_MEDLEMSKAPSVILKÅRET && ap.status == AksjonspunktStatus.OPPRETTET,
  );

  return (
    <InngangsvilkarDefaultInitPanel
      {...props}
      behandlingVersjon={behandlingVersjon}
      standardPanelProps={standardPanelProps}
      vilkarKoder={VILKAR_KODER}
      inngangsvilkarPanelKode="MEDLEMSKAP"
      hentInngangsvilkarPanelTekst=""
      renderPanel={({ erOverstyrt, toggleOverstyring }) => (
        <>
          {!harÅpentMedlemskapAksjonspunkt && isSuccess && (
            <OverstyringPanelDef
              aksjonspunkter={standardPanelProps.aksjonspunkter}
              aksjonspunktKode={AksjonspunktKode.OVERSTYR_MEDLEMSKAPSVILKAR}
              vilkar={standardPanelProps.vilkar}
              vilkarKoder={VILKAR_KODER}
              panelTekstKode="Inngangsvilkar.Medlemskapsvilkaret"
              medlemskap={medlemskap}
              toggleOverstyring={toggleOverstyring}
              erOverstyrt={erOverstyrt}
              overrideReadOnly={
                standardPanelProps.isReadOnly ||
                harMedlemskapsAksjonspunkt ||
                (props.harInngangsvilkarApentAksjonspunkt && !(standardPanelProps.isAksjonspunktOpen || erOverstyrt))
              }
              kanOverstyreAccess={rettigheter.kanOverstyreAccess}
            />
          )}
        </>
      )}
    />
  );
};
