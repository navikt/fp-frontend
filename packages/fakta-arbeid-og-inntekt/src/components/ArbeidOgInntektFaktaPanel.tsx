import React, { FunctionComponent } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Normaltekst, Undertittel } from 'nav-frontend-typografi';
import { Column, Row } from 'nav-frontend-grid';

import { Hovedknapp } from 'nav-frontend-knapper';
import advarselIkonUrl from '@fpsak-frontend/assets/images/advarsel2.svg';
import { Aksjonspunkt, ArbeidOgInntektsmelding, ArbeidsgiverOpplysningerPerId } from '@fpsak-frontend/types';
import {
  VerticalSpacer, Image, AksjonspunktHelpTextHTML, FloatRight, Table, TableColumn, PeriodLabel, DateTimeLabel,
} from '@fpsak-frontend/shared-components';
import ExpandableTableRow from './ExpandableTableRow';
import LeggTilArbeidsforholdForm, { FormValues as NyttArbeidsforholdFormValues } from './LeggTilArbeidsforholdForm';
import ManglendeOpplysningerForm, { FormValuesForManglendeArbeidsforhold } from './ManglendeOpplysningerForm';
import InntektsmeldingInnhentesForm, { FormValuesForManglendeInntektsmelding } from './InntektsmeldingInnhentesForm';

const HEADER_TEXT_IDS = [
  'EMPTY',
  'ArbeidOgInntektFaktaPanel.Arbeidsforhold',
  'ArbeidOgInntektFaktaPanel.Periode',
  'ArbeidOgInntektFaktaPanel.Kilde',
  'ArbeidOgInntektFaktaPanel.InntektsmeldingMottatt',
];

const finnApTekstKode = (
  aksjonspunkter: Aksjonspunkt[],
  harIngenArbeidsforholdEllerInntektsmeldinger: boolean,
): string | undefined => {
  if (harIngenArbeidsforholdEllerInntektsmeldinger) {
    return 'ArbeidOgInntektFaktaPanel.IngenArbeidsforhold';
  }
  if (aksjonspunkter.some((ap) => ap.definisjon.kode === '9999')) {
    return 'ArbeidOgInntektFaktaPanel.InnhentManglendeInntektsmelding';
  }
  if (aksjonspunkter.some((ap) => ap.definisjon.kode === '9998')) {
    return 'ArbeidOgInntektFaktaPanel.AvklarManglendeOpplysninger';
  }
  return undefined;
};

interface OwnProps {
  skjæringspunktDato: string;
  aksjonspunkter: Aksjonspunkt[];
  isReadOnly: boolean;
  arbeidOgInntekt: ArbeidOgInntektsmelding;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  lagreNyttArbeidsforhold: (formValues: NyttArbeidsforholdFormValues) => void;
  lagreManglendeArbeidsforhold: (formValues: FormValuesForManglendeArbeidsforhold) => void;
  lagreManglendeInntekstmelding: (formValues: FormValuesForManglendeInntektsmelding) => void;
}

const ArbeidOgInntektFaktaPanel: FunctionComponent<OwnProps> = ({
  skjæringspunktDato,
  aksjonspunkter,
  isReadOnly,
  arbeidOgInntekt,
  arbeidsgiverOpplysningerPerId,
  lagreNyttArbeidsforhold,
  lagreManglendeArbeidsforhold,
  lagreManglendeInntekstmelding,
}) => {
  const intl = useIntl();
  const headers = HEADER_TEXT_IDS.map((textId) => (textId !== 'EMPTY' ? intl.formatMessage({ id: textId }) : textId));

  const { arbeidsforhold, inntektsmeldinger, inntekter } = arbeidOgInntekt;

  const harIngenArbeidsforholdEllerInntektsmeldinger = arbeidsforhold.length === 0 && inntektsmeldinger.length === 0;

  /* const sorterteArbeidsforhold = [...arbeidsforhold]
    .sort((af1, af2) => arbeidsgiverOpplysningerPerId[af1.arbeidsgiverIdent].navn.localeCompare(arbeidsgiverOpplysningerPerId[af2.arbeidsgiverIdent].navn));
  const sorterteInntektsmeldinger = [...inntektsmeldinger]
    .sort((im1, im2) => arbeidsgiverOpplysningerPerId[im1.arbeidsgiverIdent].navn.localeCompare(arbeidsgiverOpplysningerPerId[im2.arbeidsgiverIdent].navn));

  const arbeidsforholdUtenInntekstmelding = arbeidsforhold
    .filter((af) => !inntektsmeldinger.some((iMelding) => iMelding.arbeidsgiverIdent === af.arbeidsgiverIdent));
  const inntekstmeldingerUtenArbeidsforhold = inntektsmeldinger
    .filter((im) => !arbeidsforhold.some((af) => im.arbeidsgiverIdent === af.arbeidsgiverIdent));

  const sorterteAnnet = arbeidsforhold
    .filter((af) => !inntektsmeldinger.some((iMelding) => iMelding.arbeidsgiverIdent === af.arbeidsgiverIdent));
*/
  const aksjonspunktTekstKode = finnApTekstKode(aksjonspunkter, harIngenArbeidsforholdEllerInntektsmeldinger);

  return (
    <>
      <Row>
        <Column xs="8">
          <Undertittel><FormattedMessage id="ArbeidOgInntektFaktaPanel.Overskrift" /></Undertittel>
        </Column>
        <Column xs="4">
          <FloatRight>
            <Normaltekst><FormattedMessage id="ArbeidOgInntektFaktaPanel.Skjaringstidspunkt" values={{ skjæringspunktDato }} /></Normaltekst>
          </FloatRight>
        </Column>
      </Row>
      <VerticalSpacer thirtyTwoPx />
      {aksjonspunktTekstKode && (
        <AksjonspunktHelpTextHTML>
          <FormattedMessage id={aksjonspunktTekstKode} />
        </AksjonspunktHelpTextHTML>
      )}
      <VerticalSpacer sixteenPx />
      {harIngenArbeidsforholdEllerInntektsmeldinger && (
        <>
          <VerticalSpacer thirtyTwoPx />
          <LeggTilArbeidsforholdForm isReadOnly={false} lagreNyttArbeidsforhold={lagreNyttArbeidsforhold} />
          <VerticalSpacer fourtyPx />
        </>
      )}
      <Table headerTextCodes={headers} noHover>
        <>
          {arbeidsforhold.map((aForhold) => {
            const arbeidsgiver = arbeidsgiverOpplysningerPerId[aForhold.arbeidsgiverIdent];
            const inntektsmelding = inntektsmeldinger.find((iMelding) => iMelding.arbeidsgiverIdent === aForhold.arbeidsgiverIdent);
            return (
              <ExpandableTableRow
                /* content={(
                  <InntektsmeldingOpplysningerPanel
                    arbeidsforhold={aForhold}
                    inntektsmelding={inntektsmelding}
                  />
                )} */
                content={(
                  <InntektsmeldingInnhentesForm
                    inntektsposter={inntekter.find((inntekt) => inntekt.arbeidsgiverIdent === aForhold.arbeidsgiverIdent).inntekter}
                    isReadOnly={isReadOnly}
                    arbeidsforhold={aForhold}
                    lagreManglendeInntekstmelding={lagreManglendeInntekstmelding}
                  />
                )}
                /* content={(
                  <LeggTilArbeidsforholdForm isReadOnly={false} />
                )} */
                showContent={false}
                toggleOpenHandler={() => undefined}
                isApLeftBorder
              >
                <TableColumn>
                  <Image alt={intl.formatMessage({ id: 'ArbeidOgInntektFaktaPanel.Aksjonspunkt' })} src={advarselIkonUrl} />
                </TableColumn>
                <TableColumn>
                  {arbeidsgiver.navn}
                </TableColumn>
                <TableColumn>
                  <PeriodLabel dateStringFom={aForhold.fom} dateStringTom={aForhold.tom} />
                </TableColumn>
                <TableColumn>
                  AA-registeret
                </TableColumn>
                <TableColumn>
                  {inntektsmelding?.motattDato && (
                    <DateTimeLabel dateTimeString={inntektsmelding.motattDato} />
                  )}
                  {!inntektsmelding?.motattDato && '-'}
                </TableColumn>
              </ExpandableTableRow>
            );
          })}
          {inntektsmeldinger.map((inntektsmelding) => {
            const arbeidsgiver = arbeidsgiverOpplysningerPerId[inntektsmelding.arbeidsgiverIdent];
            return (
              <ExpandableTableRow
                content={(
                  <ManglendeOpplysningerForm
                    inntektsmelding={inntektsmelding}
                    isReadOnly={isReadOnly}
                    lagreManglendeArbeidsforhold={lagreManglendeArbeidsforhold}
                  />
                )}
                showContent={false}
                toggleOpenHandler={() => undefined}
                isApLeftBorder
              >
                <TableColumn>
                  <Image alt={intl.formatMessage({ id: 'ArbeidOgInntektFaktaPanel.Aksjonspunkt' })} src={advarselIkonUrl} />
                </TableColumn>
                <TableColumn>
                  {arbeidsgiver.navn}
                </TableColumn>
                <TableColumn>
                  -
                </TableColumn>
                <TableColumn>
                  Inntektsmelding
                </TableColumn>
                <TableColumn>
                  {inntektsmelding?.motattDato && (
                    <DateTimeLabel dateTimeString={inntektsmelding.motattDato} />
                  )}
                  {!inntektsmelding?.motattDato && '-'}
                </TableColumn>
              </ExpandableTableRow>
            );
          })}
        </>
      </Table>
      <VerticalSpacer sixteenPx />
      <Hovedknapp
        mini
        autoFocus
      >
        <FormattedMessage id="ArbeidOgInntektFaktaPanel.SettPaVent" />
      </Hovedknapp>
      <Hovedknapp
        mini
        autoFocus
      >
        <FormattedMessage id="ArbeidOgInntektFaktaPanel.Bekreft" />
      </Hovedknapp>
    </>
  );
};

export default ArbeidOgInntektFaktaPanel;
