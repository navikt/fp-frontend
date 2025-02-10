import { use } from 'react';
import { useIntl } from 'react-intl';

import { AksjonspunktKode, VilkarType } from '@navikt/fp-kodeverk';
import { ForeldreansvarVilkarProsessIndex } from '@navikt/fp-prosess-vilkar-foreldreansvar';

import { InngangsvilkarDefaultInitPanel } from '../../../felles/prosess/InngangsvilkarDefaultInitPanel';
import { useStandardProsessPanelProps } from '../../../felles/prosess/useStandardProsessPanelProps';
import type { InngangsvilkarPanelInitProps } from '../../../felles/typer/inngangsvilkarPanelInitProps';
import { BehandlingDataContext } from '../../../felles/utils/behandlingDataContext';

const AKSJONSPUNKT_KODER = [
  AksjonspunktKode.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_2_LEDD,
  AksjonspunktKode.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_4_LEDD,
  AksjonspunktKode.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN,
  AksjonspunktKode.AVKLAR_OM_STONAD_TIL_ANNEN_FORELDER_GJELDER_SAMME_BARN,
];

const AKSJONSPUNKT_TEKST_PER_KODE = {
  [AksjonspunktKode.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_2_LEDD]:
    'ErForeldreansvarVilkaarOppfyltForm.2LeddParagrafEngangsStonad',
  [AksjonspunktKode.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_4_LEDD]:
    'ErForeldreansvarVilkaarOppfyltForm.4LeddParagraf',
  [AksjonspunktKode.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN]: 'SRBVilkarForm.VurderSammeBarn',
  [AksjonspunktKode.AVKLAR_OM_STONAD_TIL_ANNEN_FORELDER_GJELDER_SAMME_BARN]:
    'SRBVilkarForm.VurderAnnenForelderSammeBarn',
} as Record<string, string>;

const VILKAR_KODER = [VilkarType.FORELDREANSVARSVILKARET_2_LEDD, VilkarType.FORELDREANSVARSVILKARET_4_LEDD];

export const ForeldreansvarInngangsvilkarInitPanel = (props: InngangsvilkarPanelInitProps) => {
  const intl = useIntl();

  const { behandling } = use(BehandlingDataContext);

  const standardPanelProps = useStandardProsessPanelProps(AKSJONSPUNKT_KODER, VILKAR_KODER);

  return (
    <InngangsvilkarDefaultInitPanel
      {...props}
      standardPanelProps={standardPanelProps}
      behandlingVersjon={behandling.versjon}
      vilkarKoder={VILKAR_KODER}
      inngangsvilkarPanelKode="FORELDREANSVARSVILKARET"
      hentInngangsvilkarPanelTekst={
        standardPanelProps.aksjonspunkter.length > 0
          ? intl.formatMessage({ id: AKSJONSPUNKT_TEKST_PER_KODE[standardPanelProps.aksjonspunkter[0].definisjon] })
          : ''
      }
      renderPanel={({ skalVises }) => (
        <>
          {skalVises && (
            <ForeldreansvarVilkarProsessIndex
              isEngangsstonad
              isForeldreansvar2Ledd={standardPanelProps.vilkar.some(
                v => v.vilkarType === VilkarType.FORELDREANSVARSVILKARET_2_LEDD,
              )}
              status={standardPanelProps.status}
              readOnlySubmitButton={standardPanelProps.readOnlySubmitButton}
            />
          )}
        </>
      )}
    />
  );
};
