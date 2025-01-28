import React from 'react';
import { useIntl } from 'react-intl';

import { AksjonspunktKode, VilkarType } from '@navikt/fp-kodeverk';
import { AdopsjonVilkarProsessIndex } from '@navikt/fp-prosess-vilkar-adopsjon';
import { AksessRettigheter } from '@navikt/fp-types';

import { InngangsvilkarDefaultInitPanel } from '../../../felles/prosess/InngangsvilkarDefaultInitPanel';
import { OverstyringPanelDef } from '../../../felles/prosess/OverstyringPanelDef';
import { useStandardProsessPanelProps } from '../../../felles/prosess/useStandardProsessPanelProps';
import { InngangsvilkarPanelInitProps } from '../../../felles/typer/inngangsvilkarPanelInitProps';

const AKSJONSPUNKT_KODER = [
  AksjonspunktKode.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN,
  AksjonspunktKode.AVKLAR_OM_STONAD_TIL_ANNEN_FORELDER_GJELDER_SAMME_BARN,
];

const VILKAR_KODER = [VilkarType.ADOPSJONSVILKARET_FORELDREPENGER];

interface Props {
  behandlingVersjon: number;
  rettigheter: AksessRettigheter;
}

export const AdopsjonInngangsvilkarFpInitPanel = ({
  behandlingVersjon,
  rettigheter,
  ...props
}: Props & InngangsvilkarPanelInitProps) => {
  const intl = useIntl();

  const standardPanelProps = useStandardProsessPanelProps(AKSJONSPUNKT_KODER, VILKAR_KODER);

  return (
    <InngangsvilkarDefaultInitPanel
      {...props}
      behandlingVersjon={behandlingVersjon}
      standardPanelProps={standardPanelProps}
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
