import React from 'react';
import { useIntl } from 'react-intl';

import { AksjonspunktKode, FagsakYtelseType, VilkarType } from '@navikt/fp-kodeverk';
import { FodselVilkarProsessIndex } from '@navikt/fp-prosess-vilkar-fodsel';
import { AksessRettigheter } from '@navikt/fp-types';

import { InngangsvilkarDefaultInitPanel } from '../../../felles/prosess/InngangsvilkarDefaultInitPanel';
import { OverstyringPanelDef } from '../../../felles/prosess/OverstyringPanelDef';
import { useStandardProsessPanelProps } from '../../../felles/prosess/useStandardProsessPanelProps';
import { InngangsvilkarPanelInitProps } from '../../../felles/typer/inngangsvilkarPanelInitProps';

const AKSJONSPUNKT_KODER = [
  AksjonspunktKode.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN,
  AksjonspunktKode.AVKLAR_OM_STONAD_TIL_ANNEN_FORELDER_GJELDER_SAMME_BARN,
];

const VILKAR_KODER = [VilkarType.FODSELSVILKARET_MOR, VilkarType.FODSELSVILKARET_FAR];

interface Props {
  behandlingVersjon: number;
  rettigheter: AksessRettigheter;
}

export const FodselInngangsvilkarFpInitPanel = ({
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
      vilkarKoder={VILKAR_KODER}
      inngangsvilkarPanelKode="FODSEL"
      hentInngangsvilkarPanelTekst={intl.formatMessage({ id: 'SRBVilkarForm.VurderSammeBarn' })}
      renderPanel={({ erOverstyrt, toggleOverstyring }) => (
        <>
          {standardPanelProps.aksjonspunkter.length === 0 && (
            <OverstyringPanelDef
              aksjonspunkter={standardPanelProps.aksjonspunkter}
              aksjonspunktKode={
                standardPanelProps.vilkar.some(v => v.vilkarType === VilkarType.FODSELSVILKARET_MOR)
                  ? AksjonspunktKode.OVERSTYR_FODSELSVILKAR
                  : AksjonspunktKode.OVERSTYR_FODSELSVILKAR_FAR_MEDMOR
              }
              vilkar={standardPanelProps.vilkar}
              vilkarKoder={VILKAR_KODER}
              panelTekstKode="Inngangsvilkar.Fodselsvilkaret"
              toggleOverstyring={toggleOverstyring}
              erOverstyrt={erOverstyrt}
              overrideReadOnly={
                standardPanelProps.isReadOnly ||
                (props.harInngangsvilkarApentAksjonspunkt && !(standardPanelProps.isAksjonspunktOpen || erOverstyrt))
              }
              kanOverstyreAccess={rettigheter.kanOverstyreAccess}
            />
          )}
          {standardPanelProps.aksjonspunkter.length > 0 && (
            <FodselVilkarProsessIndex ytelseTypeKode={FagsakYtelseType.FORELDREPENGER} {...standardPanelProps} />
          )}
        </>
      )}
    />
  );
};
