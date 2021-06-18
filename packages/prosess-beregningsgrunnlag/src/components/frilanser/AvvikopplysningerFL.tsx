import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Normaltekst } from 'nav-frontend-typografi';
import { FlexRow } from '@fpsak-frontend/shared-components';
import { Column } from 'nav-frontend-grid';
import sammenligningType from '@fpsak-frontend/kodeverk/src/sammenligningType';
import { SammenligningsgrunlagProp } from '@fpsak-frontend/types';
import AvvikopplysningerATFL from '../fellesPaneler/AvvikopplysningerATFLSN';
import RelevanteStatuserProp from '../../types/RelevanteStatuserTsType';

type OwnProps = {
    beregnetAarsinntekt?: number;
    sammenligningsgrunnlagPrStatus?: SammenligningsgrunlagProp[];
    relevanteStatuser: RelevanteStatuserProp;
};

const AvvikopplysningerFL: FunctionComponent<OwnProps> = ({ relevanteStatuser, sammenligningsgrunnlagPrStatus, beregnetAarsinntekt }) => {
  const kombinasjonsstatusFNSN = relevanteStatuser.isKombinasjonsstatus
    && !relevanteStatuser.isArbeidstaker
    && relevanteStatuser.isSelvstendigNaeringsdrivende
    && relevanteStatuser.isFrilanser;
  const kombinasjonsstatusATFL = relevanteStatuser.isKombinasjonsstatus
    && relevanteStatuser.isArbeidstaker
    && relevanteStatuser.isFrilanser;
  if (kombinasjonsstatusFNSN) {
    return (
      <FlexRow>
        <Column xs="12">
          <Normaltekst>
            <FormattedMessage id="Beregningsgrunnlag.Avviksopplysninger.FL.KobinasjonsStatusFLSN" />
          </Normaltekst>
        </Column>
      </FlexRow>
    );
  }
  const sammenligningsGrunnlagFL = sammenligningsgrunnlagPrStatus
    ? sammenligningsgrunnlagPrStatus.find((status) => status.sammenligningsgrunnlagType.kode === sammenligningType.FL
      || status.sammenligningsgrunnlagType.kode === sammenligningType.ATFLSN)
    : undefined;
  if (!sammenligningsGrunnlagFL) {
    return null;
  }
  if (kombinasjonsstatusATFL) {
    return null;
  }
  const avvikFL = sammenligningsGrunnlagFL.avvikProsent !== undefined ? sammenligningsGrunnlagFL.avvikProsent : '';
  const avvikRoundedFL = avvikFL ? parseFloat((avvikFL.toFixed(1))) : 0;
  const sammenligningsgrunnlagSumFL = sammenligningsGrunnlagFL.rapportertPrAar || 0;
  const { differanseBeregnet } = sammenligningsGrunnlagFL;
  const visPaneler = {
    visAT: false,
    visFL: true,
    visSN: false,
  };
  return (
    <AvvikopplysningerATFL
      beregnetAarsinntekt={beregnetAarsinntekt}
      avvikProsentAvrundet={avvikRoundedFL}
      differanseBeregnet={differanseBeregnet}
      relevanteStatuser={relevanteStatuser}
      visPanel={visPaneler}
      sammenligningsgrunnlagSum={sammenligningsgrunnlagSumFL}
    />
  );
};

AvvikopplysningerFL.defaultProps = {
  beregnetAarsinntekt: undefined,
  sammenligningsgrunnlagPrStatus: undefined,
};
export default AvvikopplysningerFL;
