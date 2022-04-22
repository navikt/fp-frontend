import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Element, Normaltekst, Undertekst } from 'nav-frontend-typografi';
import { Column, Row } from 'nav-frontend-grid';

import { formatCurrencyWithKr } from '@navikt/ft-utils';
import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';
import {
  Behandlingsresultat, BeregningsresultatFp, BeregningsresultatEs,
} from '@fpsak-frontend/types';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';

import VedtakFritekstPanel from '../felles/VedtakFritekstPanel';

interface OwnProps {
  ytelseTypeKode: string;
  revurderingsÅrsakString?: string;
  isReadOnly: boolean;
  resultatstruktur?: BeregningsresultatFp | BeregningsresultatEs;
  språkKode: string;
  behandlingsresultat: Behandlingsresultat;
  beregningErManueltFastsatt: boolean;
  skalBrukeOverstyrendeFritekstBrev: boolean;
}

const VedtakInnvilgetRevurderingPanel: FunctionComponent<OwnProps> = ({
  ytelseTypeKode,
  revurderingsÅrsakString,
  isReadOnly,
  resultatstruktur,
  språkKode,
  behandlingsresultat,
  beregningErManueltFastsatt,
  skalBrukeOverstyrendeFritekstBrev,
}) => (
  <>
    {ytelseTypeKode === fagsakYtelseType.ENGANGSSTONAD && resultatstruktur && 'antallBarn' in resultatstruktur && (
      <Row>
        <Column xs="4">
          <Undertekst><FormattedMessage id="VedtakForm.beregnetTilkjentYtelse" /></Undertekst>
          <Element>{formatCurrencyWithKr((resultatstruktur as BeregningsresultatEs).beregnetTilkjentYtelse)}</Element>
        </Column>
        <Column xs="8">
          <Undertekst><FormattedMessage id="VedtakForm.AntallBarn" /></Undertekst>
          <Element>{resultatstruktur.antallBarn}</Element>
        </Column>
      </Row>
    )}
    {(ytelseTypeKode === fagsakYtelseType.FORELDREPENGER || ytelseTypeKode === fagsakYtelseType.SVANGERSKAPSPENGER) && (
      <>
        {revurderingsÅrsakString && (
          <>
            <Row>
              <Column xs="4">
                <Undertekst><FormattedMessage id="VedtakForm.RevurderingFP.Aarsak" /></Undertekst>
                <Normaltekst>
                  {revurderingsÅrsakString}
                </Normaltekst>
              </Column>
            </Row>
            <VerticalSpacer eightPx />
          </>
        )}
        {!skalBrukeOverstyrendeFritekstBrev && beregningErManueltFastsatt && (
          <VedtakFritekstPanel
            isReadOnly={isReadOnly}
            språkKode={språkKode}
            behandlingsresultat={behandlingsresultat}
            labelTextCode="VedtakForm.Fritekst.Beregningsgrunnlag"
          />
        )}
      </>
    )}
  </>
);

export default VedtakInnvilgetRevurderingPanel;
