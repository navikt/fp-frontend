import React, {
  FunctionComponent, useState, useEffect,
} from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Normaltekst, Undertittel } from 'nav-frontend-typografi';
import { Column, Row } from 'nav-frontend-grid';
import Lenke from 'nav-frontend-lenker';
import { Hovedknapp } from 'nav-frontend-knapper';

import addCircleIcon from '@fpsak-frontend/assets/images/add-circle.svg';
import advarselIkonUrl from '@fpsak-frontend/assets/images/advarsel2.svg';
import {
  Aksjonspunkt, ArbeidOgInntektsmelding, ArbeidsgiverOpplysningerPerId, AoIArbeidsforhold, Inntektsmelding, Inntektspost,
} from '@fpsak-frontend/types';
import {
  VerticalSpacer, Image, AksjonspunktHelpTextHTML, FloatRight, Table, TableColumn, PeriodLabel, DateTimeLabel, OverstyringKnapp,
  FlexColumn, FlexContainer, FlexRow,
} from '@fpsak-frontend/shared-components';
import ExpandableTableRow from './ExpandableTableRow';
import NyttArbeidsforholdForm, { FormValues as NyttArbeidsforholdFormValues } from './NyttArbeidsforholdForm';
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
  erOverstyrer: boolean,
): string | undefined => {
  if (harIngenArbeidsforholdEllerInntektsmeldinger && erOverstyrer) {
    return 'ArbeidOgInntektFaktaPanel.IngenArbeidsforhold';
  }
  if (aksjonspunkter.some((ap) => ap.definisjon.kode === '9998')) {
    return 'ArbeidOgInntektFaktaPanel.InnhentManglendeInntektsmelding';
  }
  if (aksjonspunkter.some((ap) => ap.definisjon.kode === '9999')) {
    return 'ArbeidOgInntektFaktaPanel.AvklarManglendeOpplysninger';
  }
  return undefined;
};

type ArbeidsforholdOgInntekt = {
  arbeidsforhold: AoIArbeidsforhold | undefined;
  arbeidsforholdNavn: string | undefined;
  inntektsmelding: Inntektsmelding | undefined;
  inntektsposter: Inntektspost[] | undefined;
  erNyttArbeidsforhold?: boolean;
}

const byggStruktur = (
  arbeidOgInntekt: ArbeidOgInntektsmelding,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
): ArbeidsforholdOgInntekt[] => {
  const { arbeidsforhold, inntektsmeldinger, inntekter } = arbeidOgInntekt;

  const alleArbeidsforhold = arbeidsforhold.map((af) => ({
    arbeidsforhold: af,
    arbeidsforholdNavn: arbeidsgiverOpplysningerPerId[af.arbeidsgiverIdent]?.navn,
    inntektsmelding: inntektsmeldinger.find((inntektsmelding) => inntektsmelding.arbeidsgiverIdent === af.arbeidsgiverIdent),
    inntektsposter: inntekter.find((inntekt) => inntekt.arbeidsgiverIdent === af.arbeidsgiverIdent)?.inntekter,
  }));
  const alleInntektsmeldingerSomManglerArbeidsforhold = arbeidOgInntekt.inntektsmeldinger
    .filter((im) => !arbeidsforhold.some((af) => im.arbeidsgiverIdent === af.arbeidsgiverIdent))
    .map((im) => ({
      arbeidsforhold: undefined,
      arbeidsforholdNavn: arbeidsgiverOpplysningerPerId[im.arbeidsgiverIdent]?.navn,
      inntektsmelding: im,
      inntektsposter: inntekter.find((inntekt) => inntekt.arbeidsgiverIdent === im.arbeidsgiverIdent)?.inntekter,
    }));

  return alleArbeidsforhold.concat(alleInntektsmeldingerSomManglerArbeidsforhold);
};

interface OwnProps {
  skjæringspunktDato: string;
  aksjonspunkter: Aksjonspunkt[];
  isReadOnly: boolean;
  formData?: ArbeidsforholdOgInntekt[],
  setFormData: (data: ArbeidsforholdOgInntekt[]) => void,
  arbeidOgInntekt: ArbeidOgInntektsmelding;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  lagreNyttArbeidsforhold: (formValues: NyttArbeidsforholdFormValues) => void;
  lagreManglendeArbeidsforhold: (formValues: FormValuesForManglendeArbeidsforhold) => void;
  lagreManglendeInntekstmelding: (formValues: FormValuesForManglendeInntektsmelding) => void;
  erOverstyrer: boolean;
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
  formData,
  setFormData,
  erOverstyrer,
}) => {
  const intl = useIntl();
  const headers = HEADER_TEXT_IDS.map((textId) => (textId !== 'EMPTY' ? intl.formatMessage({ id: textId }) : textId));

  const { arbeidsforhold, inntektsmeldinger } = arbeidOgInntekt;

  const [listeData, setListeData] = useState(formData || byggStruktur(arbeidOgInntekt, arbeidsgiverOpplysningerPerId));

  useEffect(() => () => {
    setFormData(listeData);
  }, [listeData]);

  const harIngenArbeidsforholdEllerInntektsmeldinger = arbeidsforhold.length === 0 && inntektsmeldinger.length === 0;
  const aksjonspunktTekstKode = finnApTekstKode(aksjonspunkter, harIngenArbeidsforholdEllerInntektsmeldinger, erOverstyrer);

  const lagreStateOgNyttArbeidsforhold = (formValues: NyttArbeidsforholdFormValues) => {
    lagreNyttArbeidsforhold(formValues);
    setListeData((oldData) => oldData.concat({
      arbeidsforhold: {
        fom: formValues.periodeFra,
        tom: formValues.periodeTil,
        stillingsprosent: formValues.stillingsprosent,
        begrunnelse: formValues.begrunnelse,
      },
      arbeidsforholdNavn: formValues.arbeidsgiver,
      inntektsmelding: undefined,
      inntektsposter: undefined,
      erNyttArbeidsforhold: true,
    }));
  };

  const [erOverstyrt, toggleOverstyring] = useState(false);
  const [skalLeggeTilArbeidsforhold, toggleLeggTilArbeidsforhold] = useState(false);

  return (
    <>
      <Row>
        <Column xs="8">
          <FlexContainer>
            <FlexRow>
              <FlexColumn>
                <Undertittel><FormattedMessage id="ArbeidOgInntektFaktaPanel.Overskrift" /></Undertittel>
              </FlexColumn>
              {erOverstyrer && (
                <FlexColumn>
                  <OverstyringKnapp onClick={toggleOverstyring} />
                </FlexColumn>
              )}
            </FlexRow>
          </FlexContainer>
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
      {erOverstyrt && !skalLeggeTilArbeidsforhold && (
        <>
          <VerticalSpacer thirtyTwoPx />
          <Lenke
            onClick={(e) => {
              e.preventDefault();
              toggleLeggTilArbeidsforhold(true);
            }}
            href=""
          >
            <Image src={addCircleIcon} />
            <span>
              <FormattedMessage id="ArbeidOgInntektFaktaPanel.LeggTilArbeidsforhold" />
            </span>
          </Lenke>
          <VerticalSpacer thirtyTwoPx />
        </>
      )}
      {listeData.length === 0 && skalLeggeTilArbeidsforhold && (
        <>
          <VerticalSpacer thirtyTwoPx />
          <NyttArbeidsforholdForm
            isReadOnly={false}
            lagreNyttArbeidsforhold={lagreStateOgNyttArbeidsforhold}
            avbrytEditering={() => toggleLeggTilArbeidsforhold(false)}
          />
          <VerticalSpacer fourtyPx />
        </>
      )}
      <Table headerTextCodes={headers} noHover>
        <>
          {listeData.map((data) => (
            <ExpandableTableRow
                /* content={(
                  <InntektsmeldingOpplysningerPanel
                    arbeidsforhold={aForhold}
                    inntektsmelding={inntektsmelding}
                  />
                )} */
              content={(
                <>
                  {data.erNyttArbeidsforhold && (
                    <NyttArbeidsforholdForm
                      isReadOnly={false}
                      lagreNyttArbeidsforhold={lagreStateOgNyttArbeidsforhold}
                      arbeidsforhold={data.arbeidsforhold}
                      arbeidsforholdNavn={data.arbeidsforholdNavn}
                    />
                  )}
                  {data.arbeidsforhold && !data.erNyttArbeidsforhold && (
                    <InntektsmeldingInnhentesForm
                      inntektsposter={data.inntektsposter}
                      isReadOnly={isReadOnly}
                      arbeidsforhold={data.arbeidsforhold}
                      lagreManglendeInntekstmelding={lagreManglendeInntekstmelding}
                    />
                  )}
                  {!data.arbeidsforhold && (
                    <ManglendeOpplysningerForm
                      inntektsmelding={data.inntektsmelding}
                      isReadOnly={isReadOnly}
                      lagreManglendeArbeidsforhold={lagreManglendeArbeidsforhold}
                    />
                  )}
                </>
              )}
              showContent={false}
              isApLeftBorder
            >
              <TableColumn>
                <Image alt={intl.formatMessage({ id: 'ArbeidOgInntektFaktaPanel.Aksjonspunkt' })} src={advarselIkonUrl} />
              </TableColumn>
              <TableColumn>
                {data.arbeidsforholdNavn}
              </TableColumn>
              <TableColumn>
                {data.arbeidsforhold && (
                <PeriodLabel dateStringFom={data.arbeidsforhold.fom} dateStringTom={data.arbeidsforhold.tom} />
                )}
                {!data.arbeidsforhold && '-'}
              </TableColumn>
              <TableColumn>
                {data.arbeidsforhold ? 'AA-registeret' : 'Inntektsmelding'}
              </TableColumn>
              <TableColumn>
                {data.inntektsmelding?.motattDato && (
                <DateTimeLabel dateTimeString={data.inntektsmelding.motattDato} />
                )}
                {!data.inntektsmelding?.motattDato && '-'}
              </TableColumn>
            </ExpandableTableRow>
          ))}
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
