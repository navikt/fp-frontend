import React, { FunctionComponent } from 'react';
import { IntlShape, useIntl } from 'react-intl';

import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { AksjonspunktCode, VilkarType, fagsakYtelseType } from '@navikt/fp-kodeverk';
import { FodselVilkarProsessIndex } from '@navikt/fp-prosess-vilkar-fodsel';
import { Aksjonspunkt, AksessRettigheter } from '@navikt/fp-types';

import InngangsvilkarPanelInitProps from '../../../felles/typer/inngangsvilkarPanelInitProps';
import InngangsvilkarDefaultInitPanel from '../../../felles/prosess/InngangsvilkarDefaultInitPanel';
import OverstyringPanelDef from '../../../felles/prosess/OverstyringPanelDef';

const AKSJONSPUNKT_TEKST_PER_KODE = {
  [AksjonspunktCode.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN]: 'SRBVilkarForm.VurderSammeBarn',
  [AksjonspunktCode.AVKLAR_OM_STONAD_TIL_ANNEN_FORELDER_GJELDER_SAMME_BARN]: 'SRBVilkarForm.VurderAnnenForelderSammeBarn',
} as Record<string, string>;

const hentAksjonspunktTekst = (intl: IntlShape, aksjonspunkter: Aksjonspunkt[] = []): string =>
  aksjonspunkter.length > 0
    ? intl.formatMessage({ id: AKSJONSPUNKT_TEKST_PER_KODE[aksjonspunkter[0].definisjon] })
    : '';

const AKSJONSPUNKT_KODER = [
  AksjonspunktCode.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN,
  AksjonspunktCode.AVKLAR_OM_STONAD_TIL_ANNEN_FORELDER_GJELDER_SAMME_BARN,
];

const VILKAR_KODER = [VilkarType.FODSELSVILKARET_MOR];

interface OwnProps {
  behandlingVersjon: number;
  rettigheter: AksessRettigheter;
}

const FodselInngangsvilkarInitPanel: FunctionComponent<OwnProps & InngangsvilkarPanelInitProps> = ({
  behandlingVersjon,
  rettigheter,
  ...props
}) => {
  const intl = useIntl();
  return (
    <InngangsvilkarDefaultInitPanel
      {...props}
      behandlingVersjon={behandlingVersjon}
      aksjonspunktKoder={AKSJONSPUNKT_KODER}
      vilkarKoder={VILKAR_KODER}
      inngangsvilkarPanelKode="FODSEL"
      hentInngangsvilkarPanelTekst={data => hentAksjonspunktTekst(intl, data.aksjonspunkter)}
      renderPanel={(data, erOverstyrt, toggleOverstyring) => (
        <>
          {data.aksjonspunkter.length === 0 && (
            <OverstyringPanelDef
              aksjonspunkter={data.aksjonspunkter}
              aksjonspunktKode={AksjonspunktCode.OVERSTYR_FODSELSVILKAR}
              vilkar={data.vilkar}
              vilkarKoder={VILKAR_KODER}
              panelTekstKode="Inngangsvilkar.Fodselsvilkaret"
              erMedlemskapsPanel={false}
              toggleOverstyring={toggleOverstyring}
              erOverstyrt={erOverstyrt}
              overrideReadOnly={
                data.isReadOnly ||
                (props.harInngangsvilkarApentAksjonspunkt && !(data.isAksjonspunktOpen || erOverstyrt))
              }
              kanOverstyreAccess={rettigheter.kanOverstyreAccess}
            />
          )}
          {data.aksjonspunkter.length > 0 && (
            <>
              <FodselVilkarProsessIndex ytelseTypeKode={fagsakYtelseType.ENGANGSSTONAD} {...data} />
              <VerticalSpacer thirtyTwoPx />
            </>
          )}
        </>
      )}
    />
  );
};

export default FodselInngangsvilkarInitPanel;
