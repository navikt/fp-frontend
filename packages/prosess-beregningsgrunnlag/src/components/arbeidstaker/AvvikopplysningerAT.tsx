import React, { FunctionComponent, ReactElement } from 'react';
import { Normaltekst } from 'nav-frontend-typografi';
import { FormattedMessage } from 'react-intl';
import { FlexRow } from '@navikt/ft-ui-komponenter';

import { Column } from 'nav-frontend-grid';
import sammenligningType from '@fpsak-frontend/kodeverk/src/sammenligningType';

import { SammenligningsgrunlagProp } from '@fpsak-frontend/types';
import RelevanteStatuserProp from '../../types/RelevanteStatuserTsType';
import AvvikopplysningerATFL from '../fellesPaneler/AvvikopplysningerATFLSN';

const viserIkkeAvviksvurdering = (erKombinasjonsstatusATSN: boolean, erKombinasjonsstatusATFLSN: boolean): ReactElement => (
  <FlexRow>
    <Column xs="12">
      <Normaltekst>
        {erKombinasjonsstatusATSN && (
          <FormattedMessage id="Beregningsgrunnlag.Avviksopplysninger.AT.KobinasjonsStatusATSN" />
        )}
        {erKombinasjonsstatusATFLSN && (
          <FormattedMessage id="Beregningsgrunnlag.Avviksopplysninger.AT.KobinasjonsStatusATFLSN" />
        )}
      </Normaltekst>
    </Column>
  </FlexRow>
);

type OwnProps = {
    relevanteStatuser: RelevanteStatuserProp;
    sammenligningsgrunnlagPrStatus: SammenligningsgrunlagProp[];
    beregnetAarsinntekt?: number;
};

const AvvikopplysningerAT: FunctionComponent<OwnProps> = ({
  relevanteStatuser,
  sammenligningsgrunnlagPrStatus,
  beregnetAarsinntekt,
}) => {
  const erKombinasjonsstatusATSN = relevanteStatuser.isKombinasjonsstatus
    && relevanteStatuser.isArbeidstaker
    && relevanteStatuser.isSelvstendigNaeringsdrivende
    && !relevanteStatuser.isFrilanser;
  const erKombinasjonsstatusATFLSN = relevanteStatuser.isKombinasjonsstatus
    && relevanteStatuser.isArbeidstaker
    && relevanteStatuser.isSelvstendigNaeringsdrivende
    && relevanteStatuser.isFrilanser;
  if (erKombinasjonsstatusATSN || erKombinasjonsstatusATFLSN) {
    return viserIkkeAvviksvurdering(erKombinasjonsstatusATSN, erKombinasjonsstatusATFLSN);
  }
  const sammenligningsGrunnlagAT = sammenligningsgrunnlagPrStatus
    ? sammenligningsgrunnlagPrStatus.find((status) => status.sammenligningsgrunnlagType === sammenligningType.AT
    || status.sammenligningsgrunnlagType === sammenligningType.ATFLSN)
    : undefined;
  if (!sammenligningsGrunnlagAT) {
    return null;
  }
  const avvikAT = sammenligningsGrunnlagAT.avvikProsent;
  const avvikATRounded = avvikAT ? parseFloat((avvikAT.toFixed(1))) : 0;
  const sammenligningsgrunnlagSumAT = sammenligningsGrunnlagAT.rapportertPrAar;
  const { differanseBeregnet } = sammenligningsGrunnlagAT;
  const visPaneler = {
    visAT: true,
    visFL: false,
    visSN: false,
  };
  return (
    <AvvikopplysningerATFL
      beregnetAarsinntekt={beregnetAarsinntekt}
      avvikProsentAvrundet={avvikATRounded}
      differanseBeregnet={differanseBeregnet}
      relevanteStatuser={relevanteStatuser}
      visPanel={visPaneler}
      sammenligningsgrunnlagSum={sammenligningsgrunnlagSumAT}
    />
  );
};
AvvikopplysningerAT.defaultProps = {
  beregnetAarsinntekt: undefined,
};

export default AvvikopplysningerAT;
