import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Label, BodyShort, Detail } from '@navikt/ds-react';
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
          <Detail size="small"><FormattedMessage id="VedtakForm.beregnetTilkjentYtelse" /></Detail>
          <Label size="small">{formatCurrencyWithKr((resultatstruktur as BeregningsresultatEs).beregnetTilkjentYtelse)}</Label>
        </Column>
        <Column xs="8">
          <Detail size="small"><FormattedMessage id="VedtakForm.AntallBarn" /></Detail>
          <Label size="small">{resultatstruktur.antallBarn}</Label>
        </Column>
      </Row>
    )}
    {(ytelseTypeKode === fagsakYtelseType.FORELDREPENGER || ytelseTypeKode === fagsakYtelseType.SVANGERSKAPSPENGER) && (
      <>
        {revurderingsÅrsakString && (
          <>
            <Row>
              <Column xs="4">
                <Label size="small"><FormattedMessage id="VedtakForm.RevurderingFP.Aarsak" /></Label>
                <BodyShort size="small">
                  {revurderingsÅrsakString}
                </BodyShort>
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
