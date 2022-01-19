import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Element, Normaltekst, Undertekst } from 'nav-frontend-typografi';
import { Column, Row } from 'nav-frontend-grid';
import { DateLabel, VerticalSpacer, AvsnittSkiller } from '@fpsak-frontend/shared-components';
import aktivitetStatus from '@fpsak-frontend/kodeverk/src/aktivitetStatus';
import { dateFormat, formatCurrencyNoKr } from '@fpsak-frontend/utils';
import { BeregningsgrunnlagAndel } from '@fpsak-frontend/types';
import beregningStyles from '../beregningsgrunnlagPanel/beregningsgrunnlag.less';

type OwnProps = {
    alleAndeler: BeregningsgrunnlagAndel[];
};

/**
 * GrunnlagForAarsinntektPanelFL
 *
 * Presentasjonskomponent. Viser beregningsgrunnlag for frilansere.
 * Viser kun én frilanserinntekt og et inputfelt for å oversyre det ved aksjonspunkt.
 * Vises også hvis status er en kombinasjonsstatus som inkluderer frilanser.
 */
const GrunnlagForAarsinntektPanelFL: FunctionComponent<OwnProps> = ({ alleAndeler }) => {
  const relevanteAndeler = alleAndeler.filter((andel) => andel.aktivitetstatus === aktivitetStatus.FRILANSER);
  const beregnetAarsinntekt = relevanteAndeler[0].beregnetPrAar;
  const startDato = relevanteAndeler[0].arbeidsforhold.startdato;
  return (
    <>
      <>
        <AvsnittSkiller spaceAbove spaceUnder />
        <Element className={beregningStyles.avsnittOverskrift}>
          <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.Frilansinntekt" />
        </Element>
        <VerticalSpacer eightPx />
      </>
      {startDato && (
      <Row className={beregningStyles.rows}>
        <Column xs="12">
          <Normaltekst>
            <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.FrilansStartDato2" />
            <span className={beregningStyles.semiBoldText}>
              <DateLabel dateString={dateFormat(startDato)} />
            </span>
          </Normaltekst>
        </Column>
      </Row>
      )}
      <VerticalSpacer eightPx />
      <Row className={beregningStyles.rows}>
        <Column xs="7" />
        <Column xs="2" className={beregningStyles.colMaanedText}>
          <Undertekst>
            <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Maaned" />
          </Undertekst>
        </Column>
        <Column xs="2" className={beregningStyles.colAarText}>
          <Undertekst>
            <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Aar" />
          </Undertekst>
        </Column>
        <Column xs="1" className={beregningStyles.colLink} />
      </Row>
      <Row className={beregningStyles.rows}>
        <Column xs="7">
          <Normaltekst>
            <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.InnrapportertFrilans" />
          </Normaltekst>
        </Column>
        <Column xs="2" className={beregningStyles.colMaanedText}>
          <Normaltekst>{formatCurrencyNoKr(beregnetAarsinntekt / 12)}</Normaltekst>
        </Column>
        <Column xs="2" className={beregningStyles.colAarText}>
          <Element>{formatCurrencyNoKr(beregnetAarsinntekt)}</Element>
        </Column>
      </Row>
    </>
  );
};

export default GrunnlagForAarsinntektPanelFL;
