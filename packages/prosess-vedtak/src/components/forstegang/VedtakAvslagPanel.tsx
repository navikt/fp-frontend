import React, { FunctionComponent, ReactElement } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Label, BodyShort } from '@navikt/ds-react';

import { AlleKodeverk, Vilkar, Behandlingsresultat } from '@navikt/fp-types';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { getKodeverknavnFn } from '@navikt/fp-kodeverk/src/kodeverkUtils';
import vilkarUtfallType from '@navikt/fp-kodeverk/src/vilkarUtfallType';
import behandlingStatus from '@navikt/fp-kodeverk/src/behandlingStatus';
import fagsakYtelseType from '@navikt/fp-kodeverk/src/fagsakYtelseType';
import KodeverkType from '@navikt/fp-kodeverk/src/kodeverkTyper';

import { hasIkkeOppfyltSoknadsfristvilkar } from '../felles/VedtakHelper';
import VedtakFritekstPanel from '../felles/VedtakFritekstPanel';

export const getAvslagArsak = (
  vilkar: Vilkar[],
  behandlingsresultat: Behandlingsresultat,
  getKodeverkNavn: (kodeverk: string, kodeverkType: KodeverkType, undertype?: string) => string,
): ReactElement | string => {
  const avslatteVilkar = vilkar.filter((v) => v.vilkarStatus === vilkarUtfallType.IKKE_OPPFYLT);
  if (avslatteVilkar.length === 0) {
    return <FormattedMessage id="VedtakForm.UttaksperioderIkkeGyldig" />;
  }

  const vilkarType = getKodeverkNavn(avslatteVilkar[0].vilkarType, KodeverkType.VILKAR_TYPE);
  return `${vilkarType}: ${getKodeverkNavn(behandlingsresultat.avslagsarsak, KodeverkType.AVSLAGSARSAK, avslatteVilkar[0].vilkarType)}`;
};

interface OwnProps {
  behandlingStatusKode: string;
  vilkar: Vilkar[];
  behandlingsresultat: Behandlingsresultat;
  språkKode: string;
  isReadOnly: boolean;
  ytelseTypeKode: string;
  alleKodeverk: AlleKodeverk;
  beregningErManueltFastsatt: boolean;
  skalBrukeOverstyrendeFritekstBrev: boolean;
}

const VedtakAvslagPanel: FunctionComponent<OwnProps> = ({
  behandlingStatusKode,
  vilkar,
  behandlingsresultat,
  språkKode,
  isReadOnly,
  ytelseTypeKode,
  alleKodeverk,
  beregningErManueltFastsatt,
  skalBrukeOverstyrendeFritekstBrev,
}) => {
  const intl = useIntl();
  const getKodeverknavn = getKodeverknavnFn(alleKodeverk);
  const fritekstfeltForSoknadsfrist = behandlingStatusKode === behandlingStatus.BEHANDLING_UTREDES
    && hasIkkeOppfyltSoknadsfristvilkar(vilkar) && ytelseTypeKode === fagsakYtelseType.ENGANGSSTONAD;
  const textCode = beregningErManueltFastsatt ? 'VedtakForm.Fritekst.Beregningsgrunnlag' : 'VedtakForm.Fritekst';
  return (
    <>
      {getAvslagArsak(vilkar, behandlingsresultat, getKodeverknavn) && (
        <div>
          <Label size="small">{intl.formatMessage({ id: 'VedtakForm.ArsakTilAvslag' })}</Label>
          <BodyShort size="small">
            {getAvslagArsak(vilkar, behandlingsresultat, getKodeverknavn)}
          </BodyShort>
          <VerticalSpacer sixteenPx />
        </div>
      )}
      {(!skalBrukeOverstyrendeFritekstBrev
        && (fritekstfeltForSoknadsfrist || behandlingsresultat.avslagsarsakFritekst || beregningErManueltFastsatt)) && (
        <VedtakFritekstPanel
          isReadOnly={isReadOnly}
          språkKode={språkKode}
          behandlingsresultat={behandlingsresultat}
          labelTextCode={textCode}
        />
      )}
    </>
  );
};

export default VedtakAvslagPanel;
