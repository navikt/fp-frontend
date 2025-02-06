import { use } from 'react';
import { useIntl } from 'react-intl';

import { AksjonspunktKode, FagsakYtelseType, VilkarType } from '@navikt/fp-kodeverk';
import { FodselVilkarProsessIndex } from '@navikt/fp-prosess-vilkar-fodsel';
import { PanelOverstyringProvider } from '@navikt/fp-utils';

import { InngangsvilkarDefaultInitPanel } from '../../../felles/prosess/InngangsvilkarDefaultInitPanel';
import { OverstyringPanelDef } from '../../../felles/prosess/OverstyringPanelDef';
import { useStandardProsessPanelProps } from '../../../felles/prosess/useStandardProsessPanelProps';
import type { InngangsvilkarPanelInitProps } from '../../../felles/typer/inngangsvilkarPanelInitProps';
import { BehandlingDataContext } from '../../../felles/utils/behandlingDataContext';

const AKSJONSPUNKT_KODER = [
  AksjonspunktKode.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN,
  AksjonspunktKode.AVKLAR_OM_STONAD_TIL_ANNEN_FORELDER_GJELDER_SAMME_BARN,
];

const VILKAR_KODER = [VilkarType.FODSELSVILKARET_MOR, VilkarType.FODSELSVILKARET_FAR];

export const FodselInngangsvilkarFpInitPanel = (props: InngangsvilkarPanelInitProps) => {
  const intl = useIntl();

  const { behandling, rettigheter } = use(BehandlingDataContext);

  const standardPanelProps = useStandardProsessPanelProps(AKSJONSPUNKT_KODER, VILKAR_KODER);

  return (
    <InngangsvilkarDefaultInitPanel
      {...props}
      behandlingVersjon={behandling.versjon}
      standardPanelProps={standardPanelProps}
      vilkarKoder={VILKAR_KODER}
      inngangsvilkarPanelKode="FODSEL"
      hentInngangsvilkarPanelTekst={intl.formatMessage({ id: 'SRBVilkarForm.VurderSammeBarn' })}
      renderPanel={({ erOverstyrt, toggleOverstyring }) => (
        <>
          {standardPanelProps.aksjonspunkter.length === 0 && (
            <PanelOverstyringProvider
              overstyringApKode={
                standardPanelProps.vilkar.some(v => v.vilkarType === VilkarType.FODSELSVILKARET_MOR)
                  ? AksjonspunktKode.OVERSTYR_FODSELSVILKAR
                  : AksjonspunktKode.OVERSTYR_FODSELSVILKAR_FAR_MEDMOR
              }
              kanOverstyreAccess={rettigheter.kanOverstyreAccess}
              overrideReadOnly={
                standardPanelProps.isReadOnly ||
                (props.harInngangsvilkarApentAksjonspunkt && !(standardPanelProps.isAksjonspunktOpen || erOverstyrt))
              }
              toggleOverstyring={toggleOverstyring}
            >
              <OverstyringPanelDef
                vilkar={standardPanelProps.vilkar}
                vilkarKoder={VILKAR_KODER}
                panelTekstKode="Inngangsvilkar.Fodselsvilkaret"
              />
            </PanelOverstyringProvider>
          )}
          {standardPanelProps.aksjonspunkter.length > 0 && (
            <FodselVilkarProsessIndex
              ytelseTypeKode={FagsakYtelseType.FORELDREPENGER}
              status={standardPanelProps.status}
              readOnlySubmitButton={standardPanelProps.readOnlySubmitButton}
              vilkar={standardPanelProps.vilkar}
            />
          )}
        </>
      )}
    />
  );
};
