import React, { FunctionComponent } from 'react';
import { VerticalSpacer, FlexColumn, FlexRow } from '@fpsak-frontend/shared-components';
import { Normaltekst } from 'nav-frontend-typografi';
import { FormattedMessage } from 'react-intl';
import { formatCurrencyNoKr } from '@fpsak-frontend/utils';
import { RelevanteStatuserProp } from '@fpsak-frontend/types';
import beregningStyles from '../beregningsgrunnlagPanel/beregningsgrunnlag.less';
import styles from './avvikopplysningerPanel.less';

const lagFormatertetekster = (kriterie: string, visPanel: VisPanelProp, relevanteStatuser: RelevanteStatuserProp, isBold: boolean) => (
  <FlexColumn className={styles.colLable}>
    <Normaltekst className={isBold ? beregningStyles.semiBoldText : ''}>
      {!relevanteStatuser.isKombinasjonsstatus && (
        <FormattedMessage id={`Beregningsgrunnlag.Avviksopplysninger.${kriterie}`} />
      )}
      {relevanteStatuser.isKombinasjonsstatus && visPanel && visPanel.visAT && (
        <FormattedMessage id={`Beregningsgrunnlag.Avviksopplysninger.${kriterie}.Arbeid`} />
      )}
      {relevanteStatuser.isKombinasjonsstatus && visPanel && visPanel.visFL && (
        <FormattedMessage id={`Beregningsgrunnlag.Avviksopplysninger.${kriterie}.Frilans`} />
      )}
      {relevanteStatuser.isKombinasjonsstatus && visPanel && visPanel.visSN && (
        <FormattedMessage id={`Beregningsgrunnlag.Avviksopplysninger.${kriterie}.Naring`} />
      )}
    </Normaltekst>
  </FlexColumn>
);

type VisPanelProp = {
  visAT: boolean;
  visFL: boolean;
  visSN: boolean;
}

type OwnProps = {
    beregnetAarsinntekt?: number;
    relevanteStatuser: RelevanteStatuserProp;
    differanseBeregnet: number;
    sammenligningsgrunnlagSum: number;
    avvikProsentAvrundet: number;
    visPanel: VisPanelProp;
};

const AvvikopplysningerATFLSN: FunctionComponent<OwnProps> = ({
  relevanteStatuser, beregnetAarsinntekt, sammenligningsgrunnlagSum, visPanel, avvikProsentAvrundet, differanseBeregnet,
}) => (
  <>
    {relevanteStatuser.isKombinasjonsstatus && (
      <VerticalSpacer sixteenPx />
    )}
    <FlexRow>
      {lagFormatertetekster('OmregnetAarsinntekt', visPanel, relevanteStatuser, false)}
      <FlexColumn className={styles.colValue}>
        <Normaltekst>
          {beregnetAarsinntekt || beregnetAarsinntekt === 0 ? formatCurrencyNoKr(beregnetAarsinntekt) : '-'}
        </Normaltekst>
      </FlexColumn>
      <FlexColumn className={styles.colAvvik} />
    </FlexRow>

    <FlexRow>
      {lagFormatertetekster('RapportertAarsinntekt', visPanel, relevanteStatuser, false)}
      <FlexColumn className={styles.colValue}>
        <Normaltekst>
          {formatCurrencyNoKr(sammenligningsgrunnlagSum)}
        </Normaltekst>
      </FlexColumn>
      <FlexColumn className={styles.colAvvik} />
    </FlexRow>
    <FlexRow className={styles.avvikLinjeRad}>
      <FlexColumn className={`${styles.colLine} ${styles.colBorderTop}`} />
    </FlexRow>
    <FlexRow>
      {lagFormatertetekster('BeregnetAvvik', visPanel, relevanteStatuser, true)}
      <FlexColumn className={styles.colValue}>
        <Normaltekst>
          {formatCurrencyNoKr(differanseBeregnet === undefined ? 0
            : differanseBeregnet)}
        </Normaltekst>
      </FlexColumn>
      <FlexColumn className={styles.colAvvik}>
        <Normaltekst className={`${avvikProsentAvrundet > 25 ? beregningStyles.redError : ''} ${beregningStyles.semiBoldText}`}>
          <FormattedMessage id="Beregningsgrunnlag.Avviksopplysninger.AvvikProsent" values={{ avvik: avvikProsentAvrundet }} />
        </Normaltekst>
      </FlexColumn>
    </FlexRow>
  </>
);

AvvikopplysningerATFLSN.defaultProps = {
  beregnetAarsinntekt: undefined,
};
export default AvvikopplysningerATFLSN;
