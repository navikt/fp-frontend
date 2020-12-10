import React, { FunctionComponent } from 'react';
import { Normaltekst } from 'nav-frontend-typografi';
import { FormattedMessage } from 'react-intl';
import { FlexRow } from '@fpsak-frontend/shared-components';

import { Column } from 'nav-frontend-grid';
import sammenligningType from '@fpsak-frontend/kodeverk/src/sammenligningType';

import { RelevanteStatuserProp, SammenligningsgrunlagProp } from '@fpsak-frontend/types';
import AvvikopplysningerATFL from '../fellesPaneler/AvvikopplysningerATFLSN';

const viserIkkeAvviksvurdering = (erKombinasjonsstatusATSN: boolean, erKombinasjonsstatusATFLSN: boolean) => (
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

const AvviksopplysningerAT: FunctionComponent<OwnProps> = ({
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
    ? sammenligningsgrunnlagPrStatus.find((status) => status.sammenligningsgrunnlagType.kode === sammenligningType.AT
    || status.sammenligningsgrunnlagType.kode === sammenligningType.ATFLSN)
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
AvviksopplysningerAT.defaultProps = {
  beregnetAarsinntekt: undefined,
};

export default AvviksopplysningerAT;
