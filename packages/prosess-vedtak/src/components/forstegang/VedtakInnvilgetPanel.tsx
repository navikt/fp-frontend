import React, { FunctionComponent } from 'react';
import { useIntl } from 'react-intl';
import { Label, Detail } from '@navikt/ds-react';
import { Column, Row } from 'nav-frontend-grid';

import {
  Behandlingsresultat, BeregningsresultatFp, BeregningsresultatEs,
} from '@fpsak-frontend/types';
import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';
import { formatCurrencyWithKr } from '@navikt/ft-utils';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';

import VedtakFritekstPanel from '../felles/VedtakFritekstPanel';

interface OwnProps {
  resultatstruktur?: BeregningsresultatFp | BeregningsresultatEs;
  behandlingsresultat: Behandlingsresultat;
  ytelseTypeKode: string;
  språkKode?: string;
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
        <>
          <Row>
            <Column xs="4">
              <Detail size="small">{intl.formatMessage({ id: 'VedtakForm.beregnetTilkjentYtelse' })}</Detail>
              <Label size="small">{formatCurrencyWithKr((resultatstruktur as BeregningsresultatEs).beregnetTilkjentYtelse)}</Label>
            </Column>
            <Column xs="8">
              <Detail size="small">{intl.formatMessage({ id: 'VedtakForm.AntallBarn' })}</Detail>
              <Label size="small">{resultatstruktur.antallBarn}</Label>
            </Column>
          </Row>
          <VerticalSpacer sixteenPx />
        </>
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
