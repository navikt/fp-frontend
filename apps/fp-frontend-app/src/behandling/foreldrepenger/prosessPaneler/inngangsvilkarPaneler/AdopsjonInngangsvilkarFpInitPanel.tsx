import { use } from 'react';
import { useIntl } from 'react-intl';

import { AksjonspunktKode, VilkarType } from '@navikt/fp-kodeverk';
import { AdopsjonVilkarProsessIndex } from '@navikt/fp-prosess-vilkar-adopsjon';

import { InngangsvilkarDefaultInitPanel } from '../../../felles/prosess/InngangsvilkarDefaultInitPanel';
import { OverstyringPanelDef } from '../../../felles/prosess/OverstyringPanelDef';
import { useStandardProsessPanelProps } from '../../../felles/prosess/useStandardProsessPanelProps';
import { InngangsvilkarPanelInitProps } from '../../../felles/typer/inngangsvilkarPanelInitProps';
import { BehandlingDataContext } from '../../../felles/utils/behandlingDataContext';

const AKSJONSPUNKT_KODER = [
  AksjonspunktKode.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN,
  AksjonspunktKode.AVKLAR_OM_STONAD_TIL_ANNEN_FORELDER_GJELDER_SAMME_BARN,
];

const VILKAR_KODER = [VilkarType.ADOPSJONSVILKARET_FORELDREPENGER];

export const AdopsjonInngangsvilkarFpInitPanel = (props: InngangsvilkarPanelInitProps) => {
  const intl = useIntl();

  const { behandling, rettigheter } = use(BehandlingDataContext);

  const standardPanelProps = useStandardProsessPanelProps(AKSJONSPUNKT_KODER, VILKAR_KODER);

  return (
    <InngangsvilkarDefaultInitPanel
      {...props}
      behandlingVersjon={behandling.versjon}
      standardPanelProps={standardPanelProps}
      vilkarKoder={VILKAR_KODER}
      inngangsvilkarPanelKode="ADOPSJON"
      hentInngangsvilkarPanelTekst={intl.formatMessage({ id: 'SRBVilkarForm.VurderSammeBarn' })}
      renderPanel={({ erOverstyrt, toggleOverstyring }) => (
        <>
          {standardPanelProps.aksjonspunkter.length === 0 && (
            <OverstyringPanelDef
              aksjonspunkter={standardPanelProps.aksjonspunkter}
              aksjonspunktKode={AksjonspunktKode.OVERSTYRING_AV_ADOPSJONSVILKÅRET_FP}
              vilkar={standardPanelProps.vilkar}
              vilkarKoder={VILKAR_KODER}
              panelTekstKode="Inngangsvilkar.Adopsjonsvilkaret"
              toggleOverstyring={toggleOverstyring}
              erOverstyrt={erOverstyrt}
              overrideReadOnly={
                standardPanelProps.isReadOnly ||
                (props.harInngangsvilkarApentAksjonspunkt && !(standardPanelProps.isAksjonspunktOpen || erOverstyrt))
              }
              kanOverstyreAccess={rettigheter.kanOverstyreAccess}
            />
          )}
          {standardPanelProps.aksjonspunkter.length > 0 && <AdopsjonVilkarProsessIndex {...standardPanelProps} />}
        </>
      )}
    />
  );
};
