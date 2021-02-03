import React, { FunctionComponent } from 'react';
import {
  Element, Normaltekst, Undertekst,
} from 'nav-frontend-typografi';
import {
  FormattedMessage, injectIntl, IntlShape, WrappedComponentProps,
} from 'react-intl';
import {
  FlexColumn, FlexRow, VerticalSpacer, AvsnittSkiller,
} from '@fpsak-frontend/shared-components';
import { Column, Row } from 'nav-frontend-grid';
import aktivitetStatus from '@fpsak-frontend/kodeverk/src/aktivitetStatus';
import { dateFormat, formatCurrencyNoKr } from '@fpsak-frontend/utils';
import { ArbeidsgiverOpplysningerPerId, BeregningsgrunnlagAndel, Næring } from '@fpsak-frontend/types';
import Lesmerpanel from '../redesign/LesmerPanel';
import beregningStyles from '../beregningsgrunnlagPanel/beregningsgrunnlag.less';
import styles from './naeringsOpplysningsPanel.less';
import LinkTilEksterntSystem from '../redesign/LinkTilEksterntSystem';

const finnvirksomhetsTypeKode = (næring: Næring): string => {
  const kode = næring?.virksomhetType?.kode;
  return kode || 'UDEFINERT';
};
const virksomhetsDatoer = (næring: Næring): string => {
  const { oppstartsdato, opphørsdato } = næring;
  if (!oppstartsdato) {
    return undefined;
  }
  return opphørsdato ? `${dateFormat(oppstartsdato)}-${dateFormat(opphørsdato)} ` : `${dateFormat(oppstartsdato)}-`;
};

const revisorDetaljer = (næring: Næring): string => {
  const { regnskapsførerNavn, regnskapsførerTlf } = næring;
  if (!regnskapsførerNavn) {
    return null;
  }
  return regnskapsførerTlf ? `${regnskapsførerNavn}-${regnskapsførerTlf} ` : `${regnskapsførerNavn}-`;
};

const finnBedriftsnavn = (næring: Næring, arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId): string => {
  const agOpplysning = arbeidsgiverOpplysningerPerId[næring.orgnr];
  return agOpplysning ? agOpplysning.navn : 'Ukjent bedriftsnavn';
};

const lagIntroTilEndringspanel = (næring: Næring): React.ReactNode => {
  const {
    oppstartsdato, erVarigEndret, endringsdato,
  } = næring;
  const hendelseTekst = erVarigEndret ? 'Beregningsgrunnlag.NaeringsOpplysningsPanel.VarigEndret' : 'Beregningsgrunnlag.NaeringsOpplysningsPanel.Nyoppstaret';
  const hendelseDato = erVarigEndret ? endringsdato : oppstartsdato;
  if (!hendelseDato) {
    return null;
  }
  return (
    <span>
      <FormattedMessage id={hendelseTekst} values={{ dato: dateFormat(hendelseDato), b: (chunks) => <b>{chunks}</b> }} />
    </span>
  );
};

const erNæringNyoppstartetEllerVarigEndret = (næring): boolean => {
  const {
    erNyoppstartet, erVarigEndret,
  } = næring;
  return erVarigEndret || erNyoppstartet;
};

const lagBeskrivelsePanel = (næringsAndel: Næring, intl: IntlShape): React.ReactNode => (
  <>
    <VerticalSpacer fourPx />
    <Lesmerpanel
      className={styles.lesMer}
      intro={lagIntroTilEndringspanel(næringsAndel)}
      lukkTekst={intl.formatMessage({ id: 'Beregningsgrunnlag.NaeringsOpplysningsPanel.SkjulBegrunnelse' })}
      apneTekst={intl.formatMessage({ id: 'Beregningsgrunnlag.NaeringsOpplysningsPanel.VisBegrunnelse' })}
      defaultApen
    >
      {næringsAndel.begrunnelse && næringsAndel.begrunnelse !== '' && (
      <Normaltekst className={styles.merTekstBorder}>
        {næringsAndel.begrunnelse}
      </Normaltekst>
      )}
    </Lesmerpanel>
  </>
);

const søkerHarOppgittInntekt = (næring: Næring): boolean => !!næring.oppgittInntekt || næring.oppgittInntekt === 0;

type OwnProps = {
    alleAndelerIForstePeriode?: BeregningsgrunnlagAndel[];
    arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
};

export const NaeringsopplysningsPanel: FunctionComponent<OwnProps & WrappedComponentProps> = ({
  alleAndelerIForstePeriode,
  arbeidsgiverOpplysningerPerId,
  intl,
}) => {
  const snAndel = alleAndelerIForstePeriode.find((andel) => andel.aktivitetStatus.kode === aktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE);
  const userIdent = null; // TODO denne må hentes fra brukerID enten fra brukerObjectet eller på beregningsgrunnlag må avklares
  if (!snAndel.næringer) {
    return null;
  }

  return (
    <>
      <AvsnittSkiller spaceAbove spaceUnder />
      <FlexRow key="SNNareingOverskrift">
        <FlexColumn>
          <Element className={beregningStyles.avsnittOverskrift}>
            <FormattedMessage id="Beregningsgrunnlag.NaeringsOpplysningsPanel.Overskrift" />
          </Element>
        </FlexColumn>
        <FlexColumn>
          {userIdent && (
            <LinkTilEksterntSystem linkText="SØ" userIdent={userIdent} type="SØ" />
          )}
        </FlexColumn>
      </FlexRow>
      <VerticalSpacer eightPx />
      {snAndel.næringer.map((naring) => (
        <React.Fragment key={`NaringsWrapper${naring.orgnr}`}>
          <Row key="SNInntektIngress">
            <Column xs="9" />
            <Column xs="3" className={beregningStyles.colAarText}>
              {søkerHarOppgittInntekt(naring) && (
                <Undertekst>
                  <FormattedMessage id="Beregningsgrunnlag.NaeringsOpplysningsPanel.OppgittAar" />
                </Undertekst>
              )}
            </Column>
          </Row>
          <Row key={`NaringsNavn${naring.orgnr}`}>
            <Column xs="6">
              <Normaltekst className={beregningStyles.semiBoldText}>
                {finnBedriftsnavn(naring, arbeidsgiverOpplysningerPerId)}
              </Normaltekst>
            </Column>
            <Column xs="4">
              <Undertekst className={styles.naringsType}>
                <FormattedMessage id={`Beregningsgrunnlag.NaeringsOpplysningsPanel.VirksomhetsType.${finnvirksomhetsTypeKode(naring)}`} />
              </Undertekst>
            </Column>
            <Column xs="2" className={beregningStyles.colAarText}>
              {søkerHarOppgittInntekt(naring)
                && (
                <Normaltekst className={beregningStyles.semiBoldText}>
                  {formatCurrencyNoKr(naring.oppgittInntekt)}
                </Normaltekst>
                )}
            </Column>
          </Row>
          <Row key={`NaringsDetaljer${naring.orgnr}`}>
            <Column xs="2">
              <Normaltekst>
                {naring && naring.orgnr ? naring.orgnr : ''}
              </Normaltekst>
            </Column>
            <Column xs="4">
              {virksomhetsDatoer(naring)
                && (
                <Undertekst>
                  {virksomhetsDatoer(naring)}
                </Undertekst>
                )}
            </Column>
          </Row>
          <Row key={`RevisorRad${naring.orgnr}`}>
            <Column xs="10">
              {naring.regnskapsførerNavn && (
                <Normaltekst>
                  {revisorDetaljer(naring)}
                </Normaltekst>
              )}
            </Column>
          </Row>
          {erNæringNyoppstartetEllerVarigEndret(naring)
            && (
            <Row>
              {lagBeskrivelsePanel(naring, intl)}
            </Row>
            )}
          <VerticalSpacer twentyPx />
        </React.Fragment>
      ))}
    </>
  );
};
NaeringsopplysningsPanel.defaultProps = {
  alleAndelerIForstePeriode: undefined,
};

export default injectIntl(NaeringsopplysningsPanel);
