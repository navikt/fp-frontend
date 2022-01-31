import React, { FunctionComponent, ReactElement } from 'react';
import { FormattedMessage } from 'react-intl';
import { Normaltekst } from 'nav-frontend-typografi';
import { Column } from 'nav-frontend-grid';
import aktivitetStatus from '@fpsak-frontend/kodeverk/src/aktivitetStatus';
import sammenligningType from '@fpsak-frontend/kodeverk/src/sammenligningType';
import { FlexRow } from '@fpsak-frontend/shared-components';
import { BeregningsgrunnlagAndel, SammenligningsgrunlagProp } from '@fpsak-frontend/types';
import AvvikopplysningerATFLSN from '../fellesPaneler/AvvikopplysningerATFLSN';
import RelevanteStatuserProp from '../../types/RelevanteStatuserTsType';

const ingenAvviksvurdering = (forklarendeTekst: string): ReactElement => (
  <FlexRow>
    <Column xs="12">
      <Normaltekst>
        <FormattedMessage id={forklarendeTekst} />
      </Normaltekst>
    </Column>
  </FlexRow>
);

type OwnProps = {
    alleAndelerIForstePeriode: BeregningsgrunnlagAndel[];
    sammenligningsgrunnlagPrStatus: SammenligningsgrunlagProp[];
    relevanteStatuser: RelevanteStatuserProp
};

const AvvikopplysningerSN: FunctionComponent<OwnProps> = ({
  sammenligningsgrunnlagPrStatus,
  alleAndelerIForstePeriode,
  relevanteStatuser,
}) => {
  const snAndel = alleAndelerIForstePeriode.find((andel) => andel.aktivitetStatus === aktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE);
  const erNyArbLivet = snAndel?.erNyIArbeidslivet;
  const erVarigEndring = snAndel?.næringer && snAndel.næringer.some((naring) => naring.erVarigEndret === true);
  const erNyoppstartet = snAndel?.næringer && snAndel.næringer.some((naring) => naring.erNyoppstartet === true);
  if (erNyArbLivet) {
    return ingenAvviksvurdering('Beregningsgrunnlag.Avviksopplysninger.SN.NyIArbeidslivet');
  }
  if (!erVarigEndring && !erNyoppstartet) {
    return ingenAvviksvurdering('Beregningsgrunnlag.Avviksopplysninger.SN.IkkeVarigEndring');
  }
  const sammenligningsGrunnlagSN = sammenligningsgrunnlagPrStatus
    ? sammenligningsgrunnlagPrStatus.find((status) => status.sammenligningsgrunnlagType === sammenligningType.SN
      || status.sammenligningsgrunnlagType === sammenligningType.ATFLSN)
    : undefined;
  if (!sammenligningsGrunnlagSN || !snAndel) {
    return null;
  }
  const { pgiSnitt } = snAndel;
  const avvikSN = sammenligningsGrunnlagSN.avvikProsent;
  const avvikRoundedSN = avvikSN ? parseFloat((avvikSN.toFixed(1))) : 0;
  const sammenligningsgrunnlagSumSN = sammenligningsGrunnlagSN.rapportertPrAar;
  const { differanseBeregnet } = sammenligningsGrunnlagSN;
  const visPaneler = {
    visAT: false,
    visFL: false,
    visSN: true,
  };
  return (
    <AvvikopplysningerATFLSN
      beregnetAarsinntekt={pgiSnitt}
      avvikProsentAvrundet={avvikRoundedSN}
      differanseBeregnet={differanseBeregnet}
      relevanteStatuser={relevanteStatuser}
      visPanel={visPaneler}
      sammenligningsgrunnlagSum={sammenligningsgrunnlagSumSN}
    />
  );
};

export default AvvikopplysningerSN;
