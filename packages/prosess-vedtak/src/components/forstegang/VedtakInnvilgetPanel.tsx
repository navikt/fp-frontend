import React, { FunctionComponent } from 'react';
import { useIntl } from 'react-intl';
import { Label, Detail } from '@navikt/ds-react';

import { Behandlingsresultat, BeregningsresultatFp, BeregningsresultatEs } from '@navikt/fp-types';
import { fagsakYtelseType } from '@navikt/fp-kodeverk';
import { formatCurrencyWithKr } from '@navikt/ft-utils';
import { FlexColumn, FlexContainer, FlexRow, VerticalSpacer } from '@navikt/ft-ui-komponenter';

import VedtakFritekstPanel from '../felles/VedtakFritekstPanel';

interface OwnProps {
  resultatstruktur?: BeregningsresultatFp | BeregningsresultatEs;
  behandlingsresultat?: Behandlingsresultat;
  ytelseTypeKode: string;
  språkKode: string;
  isReadOnly: boolean;
  skalBrukeOverstyrendeFritekstBrev: boolean;
  beregningErManueltFastsatt: boolean;
}

const VedtakInnvilgetPanel: FunctionComponent<OwnProps> = ({
  behandlingsresultat,
  ytelseTypeKode,
  språkKode,
  isReadOnly,
  skalBrukeOverstyrendeFritekstBrev,
  beregningErManueltFastsatt,
  resultatstruktur = {},
}) => {
  const intl = useIntl();
  return (
    <>
      {ytelseTypeKode === fagsakYtelseType.ENGANGSSTONAD && resultatstruktur && 'antallBarn' in resultatstruktur && (
        <FlexContainer>
          <FlexRow>
            <FlexColumn>
              <Detail>{intl.formatMessage({ id: 'VedtakForm.beregnetTilkjentYtelse' })}</Detail>
              <Label size="small">
                {formatCurrencyWithKr((resultatstruktur as BeregningsresultatEs).beregnetTilkjentYtelse)}
              </Label>
            </FlexColumn>
            <FlexColumn>
              <Detail>{intl.formatMessage({ id: 'VedtakForm.AntallBarn' })}</Detail>
              <Label size="small">{resultatstruktur.antallBarn}</Label>
            </FlexColumn>
          </FlexRow>
          <VerticalSpacer sixteenPx />
        </FlexContainer>
      )}
      {beregningErManueltFastsatt && !skalBrukeOverstyrendeFritekstBrev && (
        <VedtakFritekstPanel
          isReadOnly={isReadOnly}
          språkKode={språkKode}
          behandlingsresultat={behandlingsresultat}
          labelTextCode="VedtakForm.Fritekst.Beregningsgrunnlag"
        />
      )}
    </>
  );
};

export default VedtakInnvilgetPanel;
