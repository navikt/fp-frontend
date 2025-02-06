import { use } from 'react';
import { type IntlShape, useIntl } from 'react-intl';

import { AksjonspunktKode, VilkarType } from '@navikt/fp-kodeverk';
import { AdopsjonVilkarProsessIndex } from '@navikt/fp-prosess-vilkar-adopsjon';
import type { Aksjonspunkt } from '@navikt/fp-types';
import { PanelOverstyringProvider } from '@navikt/fp-utils';

import { InngangsvilkarDefaultInitPanel } from '../../../felles/prosess/InngangsvilkarDefaultInitPanel';
import { OverstyringPanelDef } from '../../../felles/prosess/OverstyringPanelDef';
import { useStandardProsessPanelProps } from '../../../felles/prosess/useStandardProsessPanelProps';
import type { InngangsvilkarPanelInitProps } from '../../../felles/typer/inngangsvilkarPanelInitProps';
import { BehandlingDataContext } from '../../../felles/utils/behandlingDataContext';

const AKSJONSPUNKT_TEKST_PER_KODE = {
  [AksjonspunktKode.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN]: 'SRBVilkarForm.VurderSammeBarn',
  [AksjonspunktKode.AVKLAR_OM_STONAD_TIL_ANNEN_FORELDER_GJELDER_SAMME_BARN]:
    'SRBVilkarForm.VurderAnnenForelderSammeBarn',
} as Record<string, string>;

const hentAksjonspunktTekst = (intl: IntlShape, aksjonspunkter: Aksjonspunkt[] = []): string =>
  aksjonspunkter.length > 0
    ? intl.formatMessage({ id: AKSJONSPUNKT_TEKST_PER_KODE[aksjonspunkter[0].definisjon] })
    : '';

const AKSJONSPUNKT_KODER = [
  AksjonspunktKode.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN,
  AksjonspunktKode.AVKLAR_OM_STONAD_TIL_ANNEN_FORELDER_GJELDER_SAMME_BARN,
];

const VILKAR_KODER = [VilkarType.ADOPSJONSVILKARET];

export const AdopsjonInngangsvilkarInitPanel = (props: InngangsvilkarPanelInitProps) => {
  const intl = useIntl();

  const { behandling, rettigheter } = use(BehandlingDataContext);

  const standardPanelProps = useStandardProsessPanelProps(AKSJONSPUNKT_KODER, VILKAR_KODER);

  return (
    <InngangsvilkarDefaultInitPanel
      {...props}
      standardPanelProps={standardPanelProps}
      behandlingVersjon={behandling.versjon}
      vilkarKoder={VILKAR_KODER}
      inngangsvilkarPanelKode="ADOPSJON"
      hentInngangsvilkarPanelTekst={hentAksjonspunktTekst(intl, standardPanelProps.aksjonspunkter)}
      renderPanel={({ erOverstyrt, toggleOverstyring }) => (
        <>
          {standardPanelProps.aksjonspunkter.length === 0 && (
            <PanelOverstyringProvider
              overstyringApKode={AksjonspunktKode.OVERSTYR_ADOPSJONSVILKAR}
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
                panelTekstKode="Inngangsvilkar.Adopsjonsvilkaret"
              />
            </PanelOverstyringProvider>
          )}
          {standardPanelProps.aksjonspunkter.length > 0 && (
            <AdopsjonVilkarProsessIndex
              readOnlySubmitButton={standardPanelProps.readOnlySubmitButton}
              status={standardPanelProps.status}
              vilkar={standardPanelProps.vilkar}
            />
          )}
        </>
      )}
    />
  );
};
