import React, { FunctionComponent, ReactElement } from 'react';
import Panel from 'nav-frontend-paneler';
import { Element, Normaltekst } from 'nav-frontend-typografi';
import { FormattedMessage } from 'react-intl';

import { VerticalSpacer, AvsnittSkiller, FlexContainer } from '@navikt/ft-ui-komponenter';
import { Column, Row } from 'nav-frontend-grid';

import aktivitetStatus from '@fpsak-frontend/kodeverk/src/aktivitetStatus';
import {
  BeregningsgrunnlagAndel,
  BeregningsgrunnlagPeriodeProp,
  SammenligningsgrunlagProp,
} from '@fpsak-frontend/types';
import RelevanteStatuserProp from '../../types/RelevanteStatuserTsType';
import AvviksopplysningerSN from '../selvstendigNaeringsdrivende/AvvikopplysningerSN';
import AvviksopplysningerAT from '../arbeidstaker/AvvikopplysningerAT';
import AvviksopplysningerFL from '../frilanser/AvvikopplysningerFL';
import beregningStyles from '../beregningsgrunnlagPanel/beregningsgrunnlag.less';

const finnAlleAndelerIFørstePeriode = (allePerioder: BeregningsgrunnlagPeriodeProp[]): BeregningsgrunnlagAndel[] => {
  if (allePerioder && allePerioder.length > 0) {
    return allePerioder[0].beregningsgrunnlagPrStatusOgAndel;
  }
  return undefined;
};
const andelErIkkeTilkommetEllerLagtTilAvSBH = (andel: BeregningsgrunnlagAndel): boolean => {
  // Andelen er fastsatt før og må kunne fastsettes igjen
  if (andel.overstyrtPrAar !== null && andel.overstyrtPrAar !== undefined) {
    return true;
  }
  // Andeler som er lagt til av sbh eller tilkom før stp skal ikke kunne endres på
  return andel.erTilkommetAndel === false && andel.lagtTilAvSaksbehandler === false;
};
const finnAndelerSomSkalVises = (andeler: BeregningsgrunnlagAndel[], statuser: string[]): BeregningsgrunnlagAndel[] => {
  if (!andeler) {
    return [];
  }

  return andeler
    .filter((andel) => statuser.includes(andel.aktivitetStatus))
    .filter((andel) => andelErIkkeTilkommetEllerLagtTilAvSBH(andel));
};

const beløpEller0 = (beløp: number | undefined): number => {
  if (!beløp) {
    return 0;
  } return beløp;
};

const beregnAarsintektForAktivitetStatuser = (alleAndelerIForstePeriode: BeregningsgrunnlagAndel[], statuser: string[]): number => {
  const relevanteAndeler = finnAndelerSomSkalVises(alleAndelerIForstePeriode, statuser);
  if (relevanteAndeler) {
    const brutto = relevanteAndeler.reduce((acc, andel) => acc + andel.beregnetPrAar, 0);
    const bortfaltNaturalytelse = relevanteAndeler.reduce((acc, andel) => acc + beløpEller0(andel?.arbeidsforhold?.naturalytelseBortfaltPrÅr), 0);
    const tilkommetNaturalytelse = relevanteAndeler.reduce((acc, andel) => acc + beløpEller0(andel?.arbeidsforhold?.naturalytelseTilkommetPrÅr), 0);
    return brutto + bortfaltNaturalytelse - tilkommetNaturalytelse;
  }
  return null;
};

const lagRelevantePaneler = (
  alleAndelerIForstePeriode: BeregningsgrunnlagAndel[],
  relevanteStatuser: RelevanteStatuserProp,
  allePerioder: BeregningsgrunnlagPeriodeProp[],
  harAksjonspunkter: boolean,
  sammenligningsgrunnlagPrStatus: SammenligningsgrunlagProp[],
  gjelderBesteberegning: boolean,
): ReactElement => {
  if (gjelderBesteberegning) {
    return (<Normaltekst><FormattedMessage id="Beregningsgrunnlag.Avviksopplysninger.Besteberegning" /></Normaltekst>);
  }
  if (relevanteStatuser.isMilitaer) {
    return (<Normaltekst><FormattedMessage id="Beregningsgrunnlag.Avviksopplysninger.Miletar" /></Normaltekst>);
  }
  return (
    <FlexContainer>
      {
        relevanteStatuser.isAAP && (
          <Row>
            <Column xs="12">
              <Normaltekst>
                <FormattedMessage id="Beregningsgrunnlag.Avviksopplysninger.AAP" />
              </Normaltekst>
            </Column>
          </Row>
        )
      }
      {
        relevanteStatuser.isDagpenger && (
          <Row>
            <Column xs="12">
              <Normaltekst>
                <FormattedMessage id="Beregningsgrunnlag.Avviksopplysninger.Dagpenger" />
              </Normaltekst>
            </Column>
          </Row>
        )
      }
      {
        relevanteStatuser.isArbeidstaker && (
          <AvviksopplysningerAT
            beregnetAarsinntekt={beregnAarsintektForAktivitetStatuser(alleAndelerIForstePeriode, [aktivitetStatus.ARBEIDSTAKER, aktivitetStatus.FRILANSER])}
            sammenligningsgrunnlagPrStatus={sammenligningsgrunnlagPrStatus}
            relevanteStatuser={relevanteStatuser}
          />
        )
      }
      {
        relevanteStatuser.isFrilanser && (
          <AvviksopplysningerFL
            beregnetAarsinntekt={beregnAarsintektForAktivitetStatuser(alleAndelerIForstePeriode, [aktivitetStatus.ARBEIDSTAKER, aktivitetStatus.FRILANSER])}
            sammenligningsgrunnlagPrStatus={sammenligningsgrunnlagPrStatus}
            relevanteStatuser={relevanteStatuser}
          />
        )
      }
      {relevanteStatuser.isSelvstendigNaeringsdrivende && (
        <AvviksopplysningerSN
          alleAndelerIForstePeriode={alleAndelerIForstePeriode}
          sammenligningsgrunnlagPrStatus={sammenligningsgrunnlagPrStatus}
          relevanteStatuser={relevanteStatuser}
        />
      )}
    </FlexContainer>
  );
};

const harRelevanteStatuserSatt = (statuser: RelevanteStatuserProp): boolean => (statuser.isArbeidstaker
  || statuser.isFrilanser || statuser.isSelvstendigNaeringsdrivende || statuser.harDagpengerEllerAAP
  || statuser.isAAP || statuser.isDagpenger || statuser.isKombinasjonsstatus || statuser.isMilitaer);

type OwnProps = {
    relevanteStatuser: RelevanteStatuserProp;
    allePerioder?: BeregningsgrunnlagPeriodeProp[];
    sammenligningsgrunnlagPrStatus?: SammenligningsgrunlagProp[];
    harAksjonspunkter?: boolean;
    gjelderBesteberegning: boolean;
};

const AvviksopplysningerPanel: FunctionComponent<OwnProps> = ({
  relevanteStatuser, allePerioder, harAksjonspunkter, sammenligningsgrunnlagPrStatus, gjelderBesteberegning,
}) => {
  const alleAndelerIForstePeriode = finnAlleAndelerIFørstePeriode(allePerioder);

  const skalViseAvviksPanel = harRelevanteStatuserSatt({ ...relevanteStatuser });
  if (!skalViseAvviksPanel) {
    return null;
  }

  return (
    <Panel className={beregningStyles.panelRight}>
      <AvsnittSkiller spaceUnder />
      <Element className={beregningStyles.avsnittOverskrift}>
        <FormattedMessage id="Beregningsgrunnlag.Avviksopplysninger.ApplicationInformation" />
      </Element>
      <VerticalSpacer eightPx />
      {
        lagRelevantePaneler(
          alleAndelerIForstePeriode, relevanteStatuser, allePerioder, harAksjonspunkter, sammenligningsgrunnlagPrStatus, gjelderBesteberegning,
        )
      }

    </Panel>
  );
};

AvviksopplysningerPanel.defaultProps = {
  harAksjonspunkter: false,
  sammenligningsgrunnlagPrStatus: undefined,
};
export default AvviksopplysningerPanel;
