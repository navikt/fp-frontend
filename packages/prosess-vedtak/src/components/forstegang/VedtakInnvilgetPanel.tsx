import React, { FunctionComponent } from 'react';
import { useIntl } from 'react-intl';
import { Element, Undertekst } from 'nav-frontend-typografi';
import { Column, Row } from 'nav-frontend-grid';

import {
  Behandlingsresultat, BeregningsresultatFp, BeregningsresultatEs,
} from '@fpsak-frontend/types';
import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';
import { formatCurrencyWithKr } from '@fpsak-frontend/utils';
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
              <Undertekst>{intl.formatMessage({ id: 'VedtakForm.beregnetTilkjentYtelse' })}</Undertekst>
              <Element>{formatCurrencyWithKr((resultatstruktur as BeregningsresultatEs).beregnetTilkjentYtelse)}</Element>
            </Column>
            <Column xs="8">
              <Undertekst>{intl.formatMessage({ id: 'VedtakForm.AntallBarn' })}</Undertekst>
              <Element>{resultatstruktur.antallBarn}</Element>
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
